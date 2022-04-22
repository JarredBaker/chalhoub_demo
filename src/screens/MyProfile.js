import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {fetchTheProfile} from '../redux/profile/profileSlice';

import Loading from '../components/utilities/Loading';
import FailedItem from '../components/utilities/FailedItem';

const SW = Dimensions.get('window').width;
const SH = Dimensions.get('window').height;

export default MyProfile = () => {
  const dispatch = useDispatch();
  const profileLoadStatus = useSelector(
    state => state.profile.profileLoadStatus,
  );
  const profile = useSelector(state => state.profile.profile);

  useEffect(() => {
    dispatch(fetchTheProfile());
  }, []);

  return (
    <SafeAreaView style={styles.profileSectionCon}>
      {profileLoadStatus === 'idle' || profileLoadStatus === 'loading' ? (
        <View style={styles.wrapConCenter}>
          <Loading />
        </View>
      ) : (
        <></>
      )}

      {profileLoadStatus === 'failed' ? (
        <View style={styles.wrapConCenter}>
          <FailedItem text={'Oops, something went wrong.'} />
        </View>
      ) : (
        <></>
      )}

      {profileLoadStatus === 'succeeded' ? (
        <View style={styles.rowCon}>
          <Image
            style={styles.avatarStyle}
            source={profile.image ? {uri: profile.image} : null}></Image>
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.userName}>
            {profile.name}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10
  },
  rowCon: {
    width: SW,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  avatarStyle: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  wrapConCenter: {
    height: SH,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    top: -100,
  },
  profileSectionCon: {
    backgroundColor: 'white',
    minHeight: SH,
    padding: 20,
  },
});
