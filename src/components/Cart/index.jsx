import React from 'react'
import "../Cart/cart.css"
import empty from "../../assets/illustration-empty-cart.svg"
import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../cartContext/cartContext';
import carbonNeutral from "../../assets/icon-carbon-neutral.svg"

const Cart = ({setIsModalOpen}) => {

  const { cartItems, totalCartItemsCount, totalOrderPrice } = useCartContext();

  return (
    <div className="cartContainer">
      <h4 className="heading">Your Cart ({totalCartItemsCount})</h4>
      {!totalCartItemsCount ? (
        <div className="emptyCartContainer">
          <img
            src={empty}
            alt="empty cart"
            loading="lazy"
          />
          <p className="emptyCartQuote">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className='cartItems'>
          {cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
          <div className="totalOrderPrice">
            <p className="orderTotalLabel">Order Total</p>
            <p className="totalPrice">${totalOrderPrice.toFixed(2)}</p>
          </div>
          <div className="message">
            <img src={carbonNeutral} alt="carbon-neutral" loading="lazy" />
            <p>
              This is a <span className="boldText">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
            className="confirmBtn"
            onClick={() => setIsModalOpen(true)}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

