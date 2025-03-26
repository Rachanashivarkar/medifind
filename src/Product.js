import React from 'react';
import './Product.css';
import { useCart } from './CartContext';

const Product = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item">
            {product && product.image && (
                <img src={product.image} alt={product.name} onError={(e) => { e.target.onerror = null; e.target.src="placeholder_image.jpg"; }}/>
            )}
            <h3>{product ? product.name : 'Loading...'}</h3>
            <p>{product ? product.description : 'Loading...'}</p>
            <p>Price: ${product ? product.price.toFixed(2) : 'Loading...'}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;