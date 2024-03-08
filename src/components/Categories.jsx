import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../utils/GlobalApi";
import Heading from "./Heading";
import colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [categories, setgetCategories] = useState([]);

  const navigation = useNavigation()
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = () => {
    GlobalApi.getCategories().then((res) => {
      //   console.log(`this is getCategories ${res?.categories}`);
      setgetCategories(res?.categories);
    });
  };
  return (
    <View>
      <Heading text={"Categories"} isView={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              onPress={() => navigation.push("BusinessListByCategory",{
                category: item.name
              })}
              style={styles.container}
            >
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: item?.icon?.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
});

export default Categories;
