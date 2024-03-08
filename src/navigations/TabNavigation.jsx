import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Booking from "../screens/Booking";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../utils/colors";
import HomeNavigation from "./HomeNavigation";

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Booking
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>
              Profile
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
