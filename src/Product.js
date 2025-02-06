import React, { useState, useEffect } from 'react';
import './Product.css'; 

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('products.json'); // Replace with your actual endpoint

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

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Display the error message
  }

  return (
    <div>
      <h2>Over-the-Counter Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
            {/* Check if the image URL is valid before displaying */}
            {product.image && (
              <img src={product.image} alt={product.name} onError={(e) => { e.target.onerror = null; e.target.src="placeholder_image.jpg"; }}/>
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;