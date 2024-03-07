import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import colors from "../utils/colors";
import { FontAwesome } from "@expo/vector-icons";

const Header = () => {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileMaincontainer}>
          <View style={styles.profilecontainer}>
            <Image source={{ uri: user?.imageUrl }} style={styles.UserImage} />
            <View>
              <Text style={{ color: colors.WHITE }}>Welcome</Text>
              <Text style={{ color: colors.WHITE, fontSize: 20 }}>
                {user?.fullName}
              </Text>
            </View>
          </View>
          <FontAwesome name="bookmark-o" size={27} color="white" />
        </View>
        {/* Search Bar Section */}
        <View style={styles.searchBarContainer}>
          <TextInput placeholder="Search" style={styles.textInput} />
          <FontAwesome style={styles.searchbtn} name="search" size={27} color={colors.PRIMARY}/>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: colors.PRIMARY,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 25,
  },
  profileMaincontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profilecontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  UserImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
  searchBarContainer: {
    marginTop: 15,
    display:'flex',
    flexDirection:'row',
    gap:10,
    marginBottom:10
  },
  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize:16
  },
  searchbtn:{
    backgroundColor:colors.WHITE,
    padding:10,
    borderRadius:8
  },
});

export default Header;
