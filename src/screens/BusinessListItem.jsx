import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BusinessListItem = ({ business }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push("BusinessDetails", { business: business })
      }
      style={styles.container}
    >
      <Image source={{ uri: business?.images[0]?.url }} style={styles.image} />
      <View style={styles.subContaner}>
        <Text
          style={{ fontFamily: "outfit", color: colors.GRAY, fontSize: 15 }}
        >
          {business.contactPerson}
        </Text>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 19 }}>
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            color: colors.GRAY,
            fontSize: 16,
          }}
        >
          <Ionicons name="location" size={20} color={colors.PRIMARY} />
          {business.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  subContaner: {
    display: "flex",
    gap: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
});

export default BusinessListItem;
