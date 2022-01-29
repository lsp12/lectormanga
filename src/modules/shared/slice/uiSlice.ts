import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUiState {
  loadingPreview: boolean;
  resizing: boolean;
}

const initialState: IUiState = {
  loadingPreview: false,
  resizing: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoadingPreview: ( state, action: PayloadAction<boolean> ) => {
      state.loadingPreview = action.payload;
    },
    setResizing: ( state, action: PayloadAction<boolean> ) => {
      state.resizing = action.payload;
    },
  },
  extraReducers: {},
});

export const {
  setLoadingPreview, setResizing,
} = uiSlice.actions;

export default uiSlice.reducer;
