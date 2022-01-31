import { createSlice } from '@reduxjs/toolkit';
import { postLenguaje } from '../action/LenguajeReducer';
import { IFormLenguaje } from '../interface/FormLenguaje';

interface ILenguajeSlice {
  Lennguaje?:IFormLenguaje;
  loadingGender:boolean;
}

const initialState:ILenguajeSlice = {
  loadingGender: false,
};

const lenguajeSlice = createSlice({
  name: 'LenguajeSlice',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( postLenguaje.pending, ( state ) => {
        state.loadingGender = true;
      })
      .addCase( postLenguaje.fulfilled, ( state, action ) => {
        state.loadingGender = false;
        state.Lennguaje = action.payload;
      });
  },
});

export default lenguajeSlice.reducer;
