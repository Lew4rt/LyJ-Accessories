import React, { useState, useEffect } from 'react';

function QuantitySelector({stock, quantity, setQuantity}) {

  useEffect(() => {
    if (quantity > stock) {
      setQuantity(stock);
    }
  }, [quantity, stock, setQuantity]);

  const handleQuantityChange = (direction) => {
    const newQuantity = quantity + direction;
    const updatedQuantity = Math.min(Math.max(newQuantity, 1), stock);

    setQuantity(updatedQuantity);
  };

  return (
      <div className="product-quantity d-flex">
        <input
          type="text"
          name="quantity"
          value={quantity}
          readOnly
        />
        <div className="quantity-selectors-container">
          <div className="quantity-selectors">
            <button
              type="button"
              className="increment-quantity"
              aria-label="Add one"
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= stock}
            >
              <span>&#43;</span>
            </button>
            <button
              type="button"
              className="decrement-quantity"
              aria-label="Subtract one"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity === 1}
            >
              <span>&#8722;</span>
            </button>
          </div>
        </div>
        <div  className='d-flex align-items-center ms-2'>
        {quantity === 0 && (
        <span style={{color:"#d3d3d3"}}>Producto no disponible momentaneamente</span>
        )}
        </div>
      </div>
  );
}

export default QuantitySelector;