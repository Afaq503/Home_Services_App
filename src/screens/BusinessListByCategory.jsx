import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import GlobalApi from "../utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";
import colors from "../utils/colors";
import PageHeading from "../components/PageHeading";

const BusinessListByCategory = () => {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    param && getBusinessByCategory();
  }, [param]);

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(param.category).then((res) => {
      setBusinessList(res.businessLists);
    });
  };

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
      <PageHeading title={param.category}/>
      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => <BusinessListItem business={item} />}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            textAlign: "center",
            marginTop: "20%",
            color: colors.GRAY
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategory;
