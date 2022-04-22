import React, {useEffect} from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';

import {useDispatch} from 'react-redux';
import {fetchTheProfile} from '../redux/profile/profileSlice';

export default Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTheProfile());
  }, []);

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
