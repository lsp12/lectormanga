import { createAsyncThunk } from '@reduxjs/toolkit';
import { postLenguajeHttp } from '../controllers/LengaujeController';
import { IFormLenguaje } from '../interface/FormLenguaje';

export const postLenguaje = createAsyncThunk(
  'lenguaje/post',
  async ( data:IFormLenguaje, thunkAPI ) => {
    console.log( thunkAPI );
    const res = await postLenguajeHttp( data );
    return res;
  },
);
