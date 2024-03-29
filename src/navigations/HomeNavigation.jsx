import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BusinessListByCategory from '../screens/BusinessListByCategory';
import BusinessDetails from '../screens/BusinessDetails';


const HomeNavigation = () => {
    const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='BusinessListByCategory' component={BusinessListByCategory}/>
        <Stack.Screen name='BusinessDetails' component={BusinessDetails}/>
    </Stack.Navigator>
  )
}

export default HomeNavigation