import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import colors from "../utils/colors";

const BusinessListItemSamll = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: business?.images[0]?.url }} />

      <View style={styles.infoContainer}>
        <Text style={{ fontSize: 17, fontFamily: "outfit-medium" }}>
          {business?.name}
        </Text>
        <Text style={{ fontSize: 13, fontFamily: "outfit",color:colors.GRAY }}>
          {business?.contactPerson}
        </Text>
        <Text
          style={{
            fontSize: 10,
            fontFamily: "outfit",
            padding: 3,
            color: colors.PRIMARY,
            backgroundColor: colors.PRIMARY_LIGHT,
            borderRadius:3,
            alignSelf:'flex-start',
            paddingHorizontal:7
          }}
        >
          {business?.category.name}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
  },
  image: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  infoContainer:{
    padding:7,
    display:'flex',
    gap:3

  }
});

export default BusinessListItemSamll;
