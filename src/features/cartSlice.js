import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cart: {
   items:[],
   quantity: 0,
   totalItems: 0,
   price: 0,
 }
}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemstoCart: (state, action)=>{
      const item = {
        
        productImage: action.payload.productImage,
        price: action.payload.price,
        id: action.payload.id,
        productName: action.payload.productName,
        quantity: 1,
        
        
      }
      // console.log(action.payload)
      state.cart.totalItems += 1;
      state.cart.price += action.payload.price;
      console.log(state.cart.price)
      console.log(state.cart.totalItems)
      
      const existingItemIndex = state.cart.items.findIndex(
        cartItem => cartItem.id == item.id
      )
      if(existingItemIndex !== -1){
        state.cart.items[existingItemIndex].quantity += 1;
        
        
        
      }
     
      else {
        // If item does not exist in the cart, add it
        state.cart.items.push(item);
        
      }
      },
      removeCart: (state, action) => {
        const itemIndex = state.cart.items.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (itemIndex !== -1) {
          const item = state.cart.items[itemIndex];
          state.cart.totalItems -= item.quantity;
          state.cart.price -= item.price * item.quantity;
          state.cart.items.splice(itemIndex, 1); // Remove item from array
        }
      },
    }
  }
    
  
)

export const {addItemstoCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer

