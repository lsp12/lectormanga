import { createAsyncThunk } from '@reduxjs/toolkit';
import { postCategoryHttp } from '../controllers/CategoryController';
import { IFormCategory } from '../interface/FormCategoryInterface';

export const postCategory = createAsyncThunk(
  'category/post',
  async ( data:IFormCategory, thunkAPI ) => {
    console.log( thunkAPI );
    const res = await postCategoryHttp( data );
    return res;
  },
);
