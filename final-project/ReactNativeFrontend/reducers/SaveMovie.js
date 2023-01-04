
import { createSlice } from '@reduxjs/toolkit';

const initialItems = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : []
const SaveMovie = createSlice({
  name: 'SaveMovie',
  initialState: { items: initialItems },

  reducers: {
    toggleItem: (store, action) => {
      store.items.forEach((item) => {
        if (item.id === action.payload) {
          item.isCaught = !item.isCaught
        }
      });
    },
    addMovie: (store, action) => {
      store.items.unshift(action.payload)
    },
    deleteItem: (store, action) => {
      store.items = store.items.filter((item) => item.id !== action.payload)
    }
  }
});

export default SaveMovie;