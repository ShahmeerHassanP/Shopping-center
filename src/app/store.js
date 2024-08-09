import { configureStore } from '@reduxjs/toolkit'
import cartreducer from '../features/cartSlice'
export const store = configureStore(
  {
    reducer: cartreducer
  }
)