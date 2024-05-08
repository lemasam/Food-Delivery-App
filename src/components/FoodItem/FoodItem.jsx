// FoodItem.js
import React from 'react';

const FoodItem = ({ name, description, price, image }) => {
  return (
    <div className="food-item">
      <img src={image} alt={name} />
      <div className="food-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default FoodItem;
