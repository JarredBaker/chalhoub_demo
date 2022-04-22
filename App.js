import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './src/navigation/Header';
import HomeScreenTabView from './src/navigation/HomeScreenTabView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreenTabView}
          options={{
            header: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
