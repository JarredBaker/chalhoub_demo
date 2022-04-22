import propTypes from 'prop-types';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const SW = Dimensions.get('window').width;
const SH = Dimensions.get('window').height;

import ProductItemSmall from './ProductItemSmall';

/**
 *
 * Controlled component used to display a list of suggested products
 * @function ProductSuggestions(@param {Array} productList)
 *
 *
 */
export default ProductSuggestions = ({productList}) => {
  return (
    <View style={styles.mainWrap}>
      <Text style={styles.titleSection}>SEE MORE PRODUCTS</Text>
      <View style={styles.suggestionCon}>
        {productList.map((data, idx) => {
          return [
            <ProductItemSmall
              key={'SP - ' + data.title + '-' + idx}
              product={data}
            />,
          ];
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleSection: {
    fontSize: 17,
    fontWeight: '500',
    color: 'grey',
    paddingTop: 20,
  },
  mainWrap: {
    margin: 10,
    borderTopColor: 'lightgrey',
    borderTopWidth: 0.3,
    marginBottom: 130,
  },
  suggestionCon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

ProductSuggestions.propTypes = {
  productList: propTypes.array.isRequired,
};
