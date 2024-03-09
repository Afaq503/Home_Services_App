import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Booking from '../screens/Booking'
import BusinessDetails from '../screens/BusinessDetails'


const Stack = createStackNavigator()

const BookingNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Booking' component={Booking}/>
        <Stack.Screen name='BusinessDetails' component={BusinessDetails}/>
    </Stack.Navigator>
  )
}

export default BookingNavigation