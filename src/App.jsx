import { useState } from "react";
import { Cart, DessertList } from "./components";
import { useCartContext } from "./components/cartContext/cartContext";
import check from "./assets/icon-order-confirmed.svg"
import Modal from "react-modal"

Modal.setAppElement('head')

function App() {
  const { cartItems, totalOrderPrice, setCartItems } = useCartContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetCart = () => {
    setCartItems([]);
    setIsModalOpen(false);
  };


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }; 

  return (
    <div className="container">
      <DessertList />

      <Cart setIsModalOpen={setIsModalOpen}/>
    

    <Modal isOpen={isModalOpen} style={customStyles}>
      <div className="orderConfirmed">
          <img src={check} alt="confirmed icon" />
          <h1>Order Confirmed</h1>
          <p className="order-confirm-label">We hope you enjoy your food!</p>
          <div className="order-summary">
            {cartItems.map((item, index) => (
              <div key={index} className="order-summary-row">
                <div className="order-item-container">
                  <div className="item-thumbnail-container">
                    <img src={item.thumbnail} />
                  </div>
                  <div className="item-details-container">
                    <p className="item-name">{item.name}</p>
                    <p className="item-quantity-container">
                      <span className="item-quantity">{item.quantity}x</span>
                      <span className="item-price">@ ${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className="item-total-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="order-summary-row border-none">
              <p className="order-total-label">Order Total</p>
              <h3 className="total-order-price">${totalOrderPrice.toFixed(2)}</h3>
            </div>
          </div>
          <button className="start-new-order" onClick={resetCart}>Start New Order</button>
        </div></Modal>
    </div>)}
export default App
