import React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

export default Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.logo}>LOGO</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 'auto',
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
