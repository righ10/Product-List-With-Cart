import React from 'react'
import { useCartContext } from "../cartContext/cartContext";
import "../Dessert/desserts.css"

const Desserts = ({product}) => {

  const {
    addItemToCart,
    isProductInCart,
    getCartItem,
    incrementQuantity,
    decrementQuantity,
  } = useCartContext();

  return (
    <div className="productItemContainer">
      <div className="imageContainer">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <source media="(max-width: 767px)" srcSet={product.image.mobile} />
          <img
            src={product.image.thumbnail}
            alt={product.name}
            loading="lazy"
            className="productImage"
            style={{border:isProductInCart(product.name) ? "1px solid hsl(14, 86%, 42%)":"none"}}
          />
        </picture>
      </div>

      <div className="productDetails">
        {isProductInCart(product.name) ? (
          <div className="cartItemButtonContainer">
            <div className='cartItemButton'>
              <div
                className="circle"
              >
                <button className='minusBtn' onClick={() => decrementQuantity(product.name)}><img src="./assets/icon-decrement-quantity.svg" alt="minus" className="icon" /></button> 
              </div>
              <p className="quantity">
                {getCartItem(product.name).quantity}
              </p>
              <div
                className="circle">
              <button className='plusBtn' onClick={() => incrementQuantity(product.name)}><img src="./assets/icon-increment-quantity.svg" alt="add" className="icon" /></button>
              </div>
            </div>
          </div>
        ) :(<div
          className="addCartButton"
          
        >
          <button onClick={() => addItemToCart(product)} className='cartBtn'><img src="./src/assets/icon-add-to-cart.svg" alt="cart button" /><span>Add to Cart</span></button>
          
        </div>
      )}
      <p className="productCategory">{product.category}</p>
      <p className="productName">{product.name}</p>
      <p className="productPrice">${product.price}</p>
    </div>
  </div>)
}

export default Desserts






