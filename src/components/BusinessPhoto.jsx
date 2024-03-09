import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import Heading from "./Heading";

const BusinessPhoto = ({ business }) => {
  return (
    <View>
      <Heading text={"Photos"} />
      <FlatList
        data={business.images}
        renderItem={({ item, index }) => (
          <Image
            source={{ uri: item.url }}
            style={{ width: "100%", height: 120,flex:1,borderRadius:15,margin:5 }}
          />
        )}
      />
    </View>
  );
};

export default BusinessPhoto;
