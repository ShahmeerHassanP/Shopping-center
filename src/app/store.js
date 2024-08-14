import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import cartreducer from '../features/cartSlice'
// import userreducer from '../features/userSlice'

// const rootReducer = combineReducers({
//   cartreducer, // This corresponds to the reducerOne slice of state
//   userreducer, // This corresponds to the reducerTwo slice of state
// });

export const store = configureStore(


  {
    reducer: 
      cartreducer
     
      

    
  }
)