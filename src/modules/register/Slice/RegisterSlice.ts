import { createSlice } from '@reduxjs/toolkit';
import { postRegister } from '../Action/Register.Reducer';
import { RegisteruserInterface } from '../interface/register.interface';

interface IRegisterSlice {
  formRegister?: RegisteruserInterface;
  isLoading?: boolean;
}

const initialState: IRegisterSlice = {
  isLoading: false,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: ( builder ) => {
    builder
      .addCase( postRegister.pending, ( state ) => {
        state.isLoading = true;
      })
      .addCase( postRegister.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.formRegister = action.payload;
      });
  },
});

export default registerSlice.reducer;
