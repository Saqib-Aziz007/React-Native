import {createSlice} from '@reduxjs/toolkit';

const initialState = {value: 0};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      console.log('increment', state.value);
      state.value += 1;
    },
    decrement: state => {
      console.log('decrement', state.value);
      state.value -= 1;
    },
    reset: state => {
      console.log('reset', state.value);
      state.value = 0;
    },
    addNumber: (state, action) => {
      state.value += action.payload;
    },
  },
});

export default counterSlice.reducer;
export const {increment, decrement, reset, addNumber} = counterSlice.actions;
