import { createSlice } from '@reduxjs/toolkit';
import { postCategory } from '../action/CategoryReducer';
import { IFormCategory } from '../interface/FormCategoryInterface';

interface ICategorySlice {
  categoryForm?:IFormCategory;
  loadingGender:boolean;
}

const initialState:ICategorySlice = {
  loadingGender: false,
};

const categorySlice = createSlice({
  name: 'CategorySlice',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( postCategory.pending, ( state ) => {
        state.loadingGender = true;
      })
      .addCase( postCategory.fulfilled, ( state, action ) => {
        state.loadingGender = false;
        state.categoryForm = action.payload;
      });
  },
});

export default categorySlice.reducer;
