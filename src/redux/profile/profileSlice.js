import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as API from '../../api/profile/profile.api';

const initialState = {
  profileLoadStatus: 'idle',
  profile: {},
};

export const fetchTheProfile = createAsyncThunk(
  'profile/fetchTheProfile',
  async () => {
    let profile = await API.featchProfile();
    return profile;
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
