import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BusinessListByCategory from '../screens/BusinessListByCategory';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='BusinessListByCategory' component={BusinessListByCategory}/>
    </Stack.Navigator>
  )
}

export default HomeNavigation