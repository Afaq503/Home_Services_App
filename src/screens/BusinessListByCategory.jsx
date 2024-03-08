import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";

const BusinessListByCategory = () => {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [businessList, setBusinessList] = useState([])

  useEffect(() => {
    console.log("Category:", param.category);
    param &&  getBusinessByCategory()
  }, [param]);

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then(res => {
        console.log(`this is responc for category: ${res.businessLists}`);
        setBusinessList(res.businessLists)
    })
  }

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color={"black"} />

        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontFamily: "outfit-medium" }}>
          {param?.category}
        </Text>
      </View>
      <FlatList
      data={businessList}
      renderItem={({item,index}) => (
        <BusinessListItem business={item}/>
      )}
      />
    </View>
  );
};

export default BusinessListByCategory;
