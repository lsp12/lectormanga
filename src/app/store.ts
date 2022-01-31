import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../modules/shared/slice/uiSlice';
import registerSlice from '../modules/register/Slice/RegisterSlice';
import genderSlice from '../modules/admin/slice/GenderSlice';
import categorySlice from '../modules/admin/slice/CategorySlice';
import lenguajeSlice from '../modules/admin/slice/LengaujeSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
    register: registerSlice,
    genders: genderSlice,
    category: categorySlice,
    lengauje: lenguajeSlice,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: false,
  }),

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
