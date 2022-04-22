import React from 'react';
import {Dimensions, StyleSheet, ImageBackground} from 'react-native';

const SW = Dimensions.get('window').width;
const SH = Dimensions.get('window').height;

/**
 *
 * Controlled component used to display an small product view.
 * @function ProductItemSmall(@param {Object} product)
 *
 *
 */
export default ProductItemSmall = ({product}) => {
  const validURI =
    product.productImage instanceof String && product.productImage.length() > 0;

  return (
    <ImageBackground
      imageStyle={styles.imageBorder}
      source={validURI ? {uri: product.productImage} : null}
      style={styles.smallProduct}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBorder: {borderRadius: 10},
  smallProduct: {
    width: (SW - 60) / 4,
    height: (SW - 60) / 4,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'lightgrey',
    marginTop: 30,
  },
});
