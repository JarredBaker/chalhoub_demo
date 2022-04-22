import products from '../../assets/products.json';

/**
 *
 *
 * @module api/products/products.api
 * @param {String} catagorie Used to get specific results from the api call.
 * @returns {Array} of products.
 *
 *
 */
export const featchProductFocus = catagorie => {
  let res = {};

  /** based on the catagorie passed into the function. Fetched filtered products. */
  for (let i = 0; i < products.length; i++) {
    if (products[i].catagorie === catagorie) {
      res = {...products[i]};
      break;
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
export const featchProductSuggestions = productFocused => {
  let res = {};

  /** based on the catagorie passed into the function. Fetched filtered products. */
  res = [...products];

  return res;
};
