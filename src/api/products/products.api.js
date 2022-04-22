import products from '../../assets/products.json';
import axios from 'axios';
import * as CONFIG from '../../env/config';

/**
 *
 *
 * @module api/products/products.api
 * @param {String} catagorie Used to get specific results from the api call.
 * @returns {Array} of products.
 *
 *
 */
export const featchProductFocus = async catagorie => {
  let res = {};

  /** based on the catagorie passed into the function. Fetched filtered products. */
  if (CONFIG.hasStorageAccess) {
    const response = await axios.get(CONFIG.productsURL);
    for (let i = 0; i < response.data.length; i++) {
      if (response.data[i].catagorie === catagorie) {
        res = {...response.data[i]};
        break;
      }
    }
  } else {
    for (let i = 0; i < products.length; i++) {
      if (products[i].catagorie === catagorie) {
        res = {...products[i]};
        break;
      }
    }
  }

  return res;
};

/**
 *
 *
 * @module api/products/products.api
 * @param {String} productFocused Used to fetch similar products.
 * @returns {Array} of products.
 *
 *
 */
export const featchProductSuggestions = async productFocused => {
  let res = {};

  /** based on the catagorie passed into the function. Fetched filtered products. */
  if (CONFIG.hasStorageAccess) {
    const response = await axios.get(CONFIG.productsURL);
    res = response.data;
  } else {
    res = [...products];
  }

  return res;
};
