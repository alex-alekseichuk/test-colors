import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { colorsApi } from './colorsAPI';

const api = colorsApi();

const availableColors = ['green', 'yellow', 'pink', 'red', 'blue', 'gray'];

function getRandomInt(n) {
  return Math.floor(Math.random() * (n));
}

const initialState = {
  colors: [],
};

export const loadColorsAsync = createAsyncThunk(
  'colors/list',
  async () => {
    return await api.listColors();
  },
);

export const addColorAsync = createAsyncThunk(
  'colors/addColor',
  async () => {
    const randomColor = availableColors[getRandomInt(availableColors.length)];
    return await api.addColor(randomColor);
  }
);

export const removeColorAsync = createAsyncThunk(
  'colors/removeColor',
  async (id) => {
    return await api.removeColor(id);
  }
);

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadColorsAsync.fulfilled, (state, action) => {
        // Update the state with the fetched data
        state.colors = action.payload;
      })
      .addCase(addColorAsync.fulfilled, (state, action) => {
        // TODO: keep array sorted
        state.colors.unshift(action.payload);
      })
      .addCase(removeColorAsync.fulfilled, (state, action) => {
        // TODO: remove record by id
        state.colors.pop();
      })
    ;
  },
});

export const selectColors = (state) => state.colors.colors;

export default colorsSlice.reducer;
