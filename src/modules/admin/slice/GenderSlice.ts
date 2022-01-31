import { createSlice } from '@reduxjs/toolkit';
import { postGender } from '../action/GenderReducer';
import { IFormgender } from '../interface/FormgenderInterface';

interface IGenderSlice {
  genderForm?:IFormgender;
  loadingGender:boolean;
}

const initialState:IGenderSlice = {
  loadingGender: false,
};

const genderSlice = createSlice({
  name: 'GenderSlice',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( postGender.pending, ( state ) => {
        state.loadingGender = true;
      })
      .addCase( postGender.fulfilled, ( state, action ) => {
        state.loadingGender = false;
        state.genderForm = action.payload;
      });
  },
});

export default genderSlice.reducer;
