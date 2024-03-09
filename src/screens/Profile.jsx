import { View, Text, Image, FlatList, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useUser,useClerk } from "@clerk/clerk-expo";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const Profile = ({business}) => {
  const { user  } = useUser();
  const {  signOut  } = useClerk();

  const navigation = useNavigation()
  const handleContact = () => {
    console.log('this is press able');
    const email = "support@example.com"; // Replace with your support email
    const subject = "I am looking for your Service";
    const body = "Hi There";
    const mailToUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    Linking.openURL(mailToUrl);
    // Linking.openURL('mailto:'+business?.email+"?subject= I am looking for your Service&body=Hi There")
  }
  const logout = async() => {
    await signOut()
    
  }

  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      onPress: () => navigation.navigate("Home"),
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
      onPress: () => navigation.navigate("Booking"),
    },
    {
      id: 3,
      name: "Contact Us",
      icon: "mail",
      onPress: () => handleContact()
    },
    {
      id: 4,
      name: "Logout",
      icon: "log-out",
      onPress: () => logout(),
    },
  ];

  return (
    <View>
      <View
        style={{ padding: 20, paddingTop: 30, backgroundColor: colors.PRIMARY }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            color: colors.WHITE,
          }}
        >
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              fontSize: 26,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: colors.WHITE,
            }}
          >
            {user.fullName}
          </Text>
          <Text
            style={{
              fontSize: 18,
              marginTop: 8,
              fontFamily: "outfit-medium",
              color: colors.WHITE,
            }}
          >
            {user?.primaryEmailAddress.emailAddress}
          </Text>
        </View>
      </View>
      <View style={{paddingTop:60}}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
                paddingHorizontal: 80,
              }}
              onPress={item.onPress}
            >
              <Ionicons name={item.icon} size={44} color={colors.PRIMARY} />
              <Text style={{ fontFamily: "outfit", fontSize: 20 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Profile;
