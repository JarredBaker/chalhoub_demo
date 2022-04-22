import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  profileLoadStatus: 'idle',
  profile: {},
};

// TODO: replace this with an api call.
export const fetchTheProfile = createAsyncThunk(
  'profile/fetchTheProfile',
  async () => {
    return {
      userName: 'Jarred',
      id: 1120,
    };
  },
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTheProfile.pending]: (state, action) => {
      state.profileLoadStatus = 'loading';
    },
    [fetchTheProfile.fulfilled]: (state, action) => {
      state.profileLoadStatus = 'succeeded';
      state.profile = action.payload;
    },
    [fetchTheProfile.rejected]: (state, action) => {
      state.profileLoadStatus = 'failed';
    },
  },
});

export default profileSlice.reducer;
