import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import Header from './src/navigation/Header';
import HomeScreenTabView from './src/navigation/HomeScreenTabView';
import rootReducer from './src/redux/rootReducer';
import MyProfile from './src/screens/MyProfile';

const store = configureStore({reducer: rootReducer, middleware: [thunk]});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreenTabView}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen name="Profile" component={MyProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
