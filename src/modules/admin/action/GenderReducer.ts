import { createAsyncThunk } from '@reduxjs/toolkit';
import { postGenderHttp } from '../controllers/GenderControllers';
import { IFormgender } from '../interface/FormgenderInterface';

export const postGender = createAsyncThunk(
  'gender/post', async ( data:IFormgender ) => {
    const res = await postGenderHttp( data );
    return res;
  },
);
