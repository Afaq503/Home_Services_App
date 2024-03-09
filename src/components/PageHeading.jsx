import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const PageHeading = ({title}) => {
    const navigation = useNavigation();
  return (
    <View>
       <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color={"black"} />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontFamily: "outfit-medium" }}>
          {title}
        </Text>
      </View>
    </View>
  )
}

export default PageHeading