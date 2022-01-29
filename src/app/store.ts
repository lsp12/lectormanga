import { configureStore } from '@reduxjs/toolkit';
import uiSlice from '../modules/shared/slice/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware({
    serializableCheck: false,
  }),

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
