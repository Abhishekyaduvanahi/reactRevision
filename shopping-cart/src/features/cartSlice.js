// src/features/cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      
      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);
      
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.totalQuantity -= existingItem.quantity;
        state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === itemId);
      
      if (existingItem) {
        state.totalAmount -= existingItem.price;
        state.totalQuantity -= 1;
        
        if (existingItem.quantity === 1) {
          state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
