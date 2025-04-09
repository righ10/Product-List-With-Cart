import React from 'react'
import remove from "../../assets/icon-remove-item.svg";
import { useCartContext } from '../cartContext/cartContext';
import "../CartItem/cartItem.css"




const CartItem = ({ cartItem }) => {
  
  const { handleRemoveCartItem } = useCartContext();

  return (
    <div className="cartItemContainer">
      <div>
        <p className="itemName">{cartItem.name}</p>
        <div className="priceContainer">
          <p className="quantity">{cartItem.quantity}x</p>
          <p className="price">@ ${cartItem.price.toFixed(2)}</p>
          <p className="totalPrice">
            ${(cartItem.price * cartItem.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <button className="removeIcon"
onClick={() => handleRemoveCartItem(cartItem.name)}>
        <img src={remove} alt="remove Button" />
        
      </button>
    </div>
  );
};


export default CartItem