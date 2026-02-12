import React from 'react';
import { useCart } from '../Components/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  
  const removeItem = (product) => {
    dispatch({ type: 'REMOVE_ITEM', payload: product });
  };

  
  const updateQuantity = (product, quantity) => {
    if (quantity < 1) return;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: product.id, quantity },
    });
  };


  const calculateTotalAmount = () => {
    return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };


  const handleProceedToPayment = () => {
    alert("Proceeding to payment...");
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {state.cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {state.cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>
                Quantity:
                <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
              </p>
              <p>Total: ₹ {item.price * item.quantity}</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          ))}
          <h2>Grand Total: ₹ {calculateTotalAmount()}</h2>
          <button id="payButton" onClick={handleProceedToPayment}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
