import React, { createContext, useContext, useEffect, useState } from 'react';
import { db, auth } from './firebase';
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const CartContext = createContext({
    cartItems: [],
    addToCart: () => {},
    loading: true,
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentUser = auth.currentUser;

    useEffect(() => {
        const fetchCart = async () => {
            if (currentUser) {
                const cartRef = collection(db, 'carts');
                const userDoc = doc(cartRef, currentUser.uid);

                try {
                    const docSnap = await getDoc(userDoc);
                    if (docSnap.exists()) {
                        setCartItems(docSnap.data().items || []);
                    } else {
                        await setDoc(userDoc, { items: [] }); // Create empty cart
                        setCartItems([]);
                    }
                } catch (error) {
                    console.error("Error fetching cart:", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchCart();
    }, [currentUser]);

    const addToCart = async (product) => {
        if (!auth.currentUser) {  
            alert("Please login to add items to cart");
            return;
        }

        const userDocRef = doc(collection(db, 'carts'), auth.currentUser.uid); 

        try {
            const docSnap = await getDoc(userDocRef);
            const cartData = docSnap.exists() ? docSnap.data() : { items: [] };

            const existingProduct = cartData.items.find(item => item.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cartData.items.push({ ...product, quantity: 1 });
            }

            await setDoc(userDocRef, cartData);
            setCartItems(cartData.items);

        } catch (error) {
            console.error("Error adding to cart:", error);
            alert("Error adding to cart. Please try again later.");
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, loading }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartContext;