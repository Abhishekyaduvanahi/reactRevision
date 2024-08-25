// src/components/Cart.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, decreaseItemQuantity, addItemToCart } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <button onClick={() => handleIncreaseQuantity(item)}>+</button>
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalAmount}</h3>
    </div>
  );
};

export default Cart;
