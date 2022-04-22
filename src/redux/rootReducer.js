import {combineReducers} from '@reduxjs/toolkit';
import profileReducer from './profile/profileSlice';

export default combineReducers({
  profile: profileReducer,
});
