import React, { useContext } from 'react';
import CartContext from './CartContext';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} x {item.quantity} - ${item.price * item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;