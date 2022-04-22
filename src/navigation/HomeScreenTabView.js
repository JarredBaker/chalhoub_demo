import React from 'react';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ProductView from '../screens/ProductView';

const Tab = createMaterialTopTabNavigator();
const SW = Dimensions.get('window').width;

export default function HomeScreenTabView() {
  return (
    <Tab.Navigator
      initialRouteName="MEN"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {
          backgroundColor: 'white',
          width: SW,
        },
        tabBarContentContainerStyle: {
          justifyContent: 'space-evenly',
          width: SW,
          borderBottomColor: 'white',
        },
        tabBarAllowFontScaling: true,
        tabBarInactiveTintColor: 'black',
        tabBarItemStyle: {width: 'auto', textAlign: 'center'},
        tabBarIndicatorStyle: {
          borderBottomColor: 'white',
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="MEN"
        component={ProductView}
        options={{tabBarLabel: 'MEN'}}
      />
      <Tab.Screen
        name="WOMEN"
        component={ProductView}
        options={{tabBarLabel: 'WOMEN'}}
      />
      <Tab.Screen
        name="KIDS"
        component={ProductView}
        options={{tabBarLabel: 'KIDS'}}
      />

      <Tab.Screen
        name="FTW"
        component={ProductView}
        options={{tabBarLabel: 'FTW'}}
      />
      <Tab.Screen
        name="ACCESSORIES"
        component={ProductView}
        options={{tabBarLabel: 'ACCESSORIES'}}
      />
    </Tab.Navigator>
  );
}
