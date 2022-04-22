import React from 'react';
import {Text, StyleSheet} from 'react-native';

/**
 *
 * Component used to display loading.
 * @function Loading
 *
 *
 */
export default Loading = () => {
  return <Text style={styles.loadingText}>Loading...</Text>;
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 28,
    textAlign: 'center',
  },
});
