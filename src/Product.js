import React, { useState, useEffect, useContext } from 'react';
import './Product.css';
import CartContext from './CartContext';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [addedMessage, setAddedMessage] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('products.json'); 

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
                }

                const data = await response.json();
                setProducts(data);

            } catch (error) {
                console.error("Error fetching products:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        setAddedMessage(`${product.name} added to cart!`);
        setTimeout(() => setAddedMessage(null), 3000);
    };


    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Over-the-Counter Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        {product.image && (
                            <img src={product.image} alt={product.name} onError={(e) => { e.target.onerror = null; e.target.src="placeholder_image.jpg"; }}/>
                        )}
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price.toFixed(2)}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            {addedMessage && (
                <div className="added-to-cart-message">
                    {addedMessage}
                </div>
            )}
        </div>
    );
};

export default Product;