import React from 'react';
import {Text, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

/**
 *
 * Component used to display an error message and view
 * @function FailedItem(@param {String} text the message on the screen)
 *
 *
 */
export default FailedItem = ({text}) => {
  return <Text style={styles.errorText}>{text}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
});

FailedItem.propTypes = {
  text: propTypes.string.isRequired,
};
