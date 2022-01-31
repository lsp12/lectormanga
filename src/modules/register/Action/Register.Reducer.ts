import { createAsyncThunk } from '@reduxjs/toolkit';
import { postRegisterhttp } from '../controllers/register.controllers';
import { RegisteruserInterface } from '../interface/register.interface';

export const postRegister = createAsyncThunk(
  'register/postRegister',
  async ( data:RegisteruserInterface, thunkAPI ) => {
    console.log( thunkAPI );
    const res = await postRegisterhttp( data );
    return res;
  },
);
