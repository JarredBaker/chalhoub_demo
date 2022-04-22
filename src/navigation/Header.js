import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SW = Dimensions.get('window').width;

export default Header = () => {
  const navigation = useNavigation();

  _goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <Text style={styles.logo}>LOGO</Text>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => this._goToProfile()}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 50,
    paddingTop: 10,
  },
  headerContainer: {
    height: 'auto',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 50,
    width: SW - 50,
  },
});
