import React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const SW = Dimensions.get('window').width;
const SH = Dimensions.get('window').height;

/**
 *
 * Controlled component used to display an expanded product.
 * @function ProductItemLarge(@param {Object} product)
 *
 *
 */
export default ProductItemLarge = ({product}) => {
  const hasSizes = product.avaliableSizes instanceof Array;
  const hasColors = product.colors instanceof Array;
  const validURI =
  product.productImage instanceof String && product.productImage.length() > 0;

  return (
    <View style={styles.productContainer}>
      <ImageBackground
        style={styles.productImage}
        source={
          validURI ? {uri: product.productImage} : null
        }></ImageBackground>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>
        {product.currency} {product.price}
      </Text>
      {hasSizes ? (
        <View style={styles.rowView}>
          <Text style={styles.titleSectionOption}>Avaliable sizes: </Text>
          {product.avaliableSizes.map((data, idx) => {
            return [
              <TouchableOpacity key={'PS -' + data + '-' + idx}>
                <Text style={styles.titleSectionOption}> {data} </Text>
              </TouchableOpacity>,
            ];
          })}
        </View>
      ) : (
        <></>
      )}

      {hasColors ? (
        <>
          <Text style={styles.titleSectionOption}>Colors: </Text>
          <View style={styles.rowView}>
            {product.colors.map((data, idx) => {
              return [
                <TouchableOpacity
                  style={[styles.colorItem, {backgroundColor: data.toString()}]}
                  key={'PC -' + data + '-' + idx}></TouchableOpacity>,
              ];
            })}
          </View>
        </>
      ) : (
        <></>
      )}

      <TouchableOpacity style={styles.unUsedButton}></TouchableOpacity>

      <Text style={styles.titleSection}>Description:</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unUsedButton: {
    width: SW - 20,
    marginVertical: 15,
    backgroundColor: 'lightgrey',
    height: 50,
    borderRadius: 10,
  },
  description: {
    marginTop: 8,
    color: 'grey',
  },
  titleSectionOption: {
    fontSize: 25,
    fontWeight: '200',
    color: 'grey',
  },
  titleSection: {
    fontSize: 17,
    fontWeight: '500',
    color: 'grey',
  },
  colorItem: {
    width: 40,
    height: 40,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 0.5,
    margin: 8,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 8,
    alignContent: 'center',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 23,
    fontWeight: '300',
    color: 'grey',
  },
  productTitle: {
    marginTop: 15,
    fontSize: 28,
  },
  productImage: {
    width: SW - 20,
    minHeight: SW - 20,
    backgroundColor: 'lightgrey', 
    borderRadius: 10
  },
  productContainer: {
    width: SW,
    padding: 10,
    minHeight: SH,
  },
});

ProductItemLarge.propTypes = {
  product: PropTypes.object.isRequired,
};
