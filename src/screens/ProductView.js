import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import * as API from '../api/products/products.api';

import ProductItemLarge from '../components/products/ProductItemLarge';
import ProductSuggestions from '../components/products/ProductSuggestions';

const SW = Dimensions.get('window').width;
const SH = Dimensions.get('window').height;

// TODO: add loading screen
export default ProductView = ({...props}) => {
  const [productFocus, setProductFocus] = useState(null);
  const [suggestedProducts, setSuggestedProducts] = useState(null);

  useEffect(() => {
    async function fetchUsersPosts() {
      let res = await API.featchProductFocus(props.route.name);
      let suggested = await API.featchProductSuggestions(res);
      setProductFocus(res);
      setSuggestedProducts(suggested);
    }

    fetchUsersPosts();
  }, []);

  return (
    <SafeAreaView style={styles.prodSectionCon}>
      <TextInput
        style={styles.searchBar}
        placeholder={'Search...'}
        placeholderTextColor={'lightgrey'}></TextInput>
      <ScrollView>
        {productFocus !== null ? (
          <ProductItemLarge product={productFocus} />
        ) : (
          <></>
        )}
        {suggestedProducts !== null ? (
          <ProductSuggestions productList={suggestedProducts} />
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  prodSectionCon: {
    backgroundColor: 'white',
  },
  searchBar: {
    width: SW - 20,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    height: 30,
  },
});
