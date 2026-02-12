
import React, { useState } from 'react';
import '../index.css';
import { useCart } from './CartContext';

function Cards({ products }) {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="cardCompo">
      {products.map((product) => (
        <div className="card" key={product.id}>
          {/* 🔹 Image hover swap */}
          <img
            src={product.img}
            alt={product.title}
            className="product-img"
            onMouseOver={(e) => (e.currentTarget.src = product.img2 || product.img)}
            onMouseOut={(e) => (e.currentTarget.src = product.img)}
          />

          <h3>{product.title}</h3>

          {/* Price */}
          <p className="price">
            ₹{product.price}
            {product.usdPrice && <span> (≈ ${product.usdPrice} USD)</span>}
          </p>

          <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
