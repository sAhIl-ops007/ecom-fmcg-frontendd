import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../src/redux/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});