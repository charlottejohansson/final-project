// import { createSlice } from '@reduxjs/toolkit';

// export const savedmovies = createSlice({
//   name: 'cart',
//   initialState: {
//     items: []
//   },
//   reducers: {
//     addItem: (state, action) => {
//       const existingProducts = state.items.find((item) => item.id === action.payload.id)
//       state.items.push({ ...action.payload, quantity: 1 })

//       if (existingProducts) {
//         existingProducts.quantity += 1
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 })
//       }
//     },
//     removeItem: (state, action) => {
//         addItem: (state, action) => {
//             const existingProducts = state.items.find((item) => item.id === action.payload.id)
// if (existingProducts && existingProducts===1){
// state.items = state.imtens.filter((item) => item.id !== action.payload.id)
// }else if (existingProducts) {
// existingProducts.quantity-= 1

// }
//     }
//   }

// })