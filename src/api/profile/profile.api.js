import axios from 'axios';

/**
 *
 *
 * @module api/profile/profile.api
 * @returns {Object} profile object from backend
 *
 *
 */
export const featchProfile = async () => {
  let res = {};

  const response = await axios.get(
    'https://rickandmortyapi.com/api/character/2',
  );
  res = {...response.data};
  return res;
};
