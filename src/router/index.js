import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Splash, Profile, ListProduct } from '../pages/pages.js';
import { BottomNavigator } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator 
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="ListProduct" component={ListProduct} options={{ headerShown: false, title: 'Product' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}



const Router = () => {
	return(
	  <Stack.Navigator initialRouteName="Splash" options={{ backgroundColor: 'white' }}> 
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
      </Stack.Navigator>
	);
}

export default Router;

