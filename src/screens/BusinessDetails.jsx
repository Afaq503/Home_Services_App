import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../utils/colors";
import Heading from "../components/Heading";
import BusinessPhoto from "../components/BusinessPhoto";
import BookingModel from "../components/BookingModel";

const BusinessDetails = () => {
  const param = useRoute().params;

  const [business, setBusiness] = useState(param.business);
  const [isReadMore, setIsReadMore] = useState(false);
  const [ showModal, setShowModal] = useState(false)

  const navigation = useNavigation();

  const onMessageBtnClick = () => {
    console.log('this is press able');
    Linking.openURL('mailto:'+business?.email+"?subject= I am looking for your Service&body=Hi There")
  }

  useEffect(() => {}, [param]);
  return (
    business && (
      <View>
        <ScrollView style={{ height: "92%" }}>
          <TouchableOpacity
            style={styles.backBtnContainer}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={24} color={"white"} />
          </TouchableOpacity>
          <Image
            source={{ uri: business?.images[0]?.url }}
            style={{ width: "100%", height: 300 }}
          />
          <View style={styles.infoContainer}>
            <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
              {business?.name}
            </Text>
            <View style={styles.subContainer}>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 20,
                  color: colors.PRIMARY,
                }}
              >
                {business?.contactPerson}
              </Text>
              <Text
                style={{
                  color: colors.PRIMARY,
                  backgroundColor: colors.PRIMARY_LIGHT,
                  padding: 5,
                  borderRadius: 5,
                  fontSize: 14,
                }}
              >
                {business?.category.name}
              </Text>
            </View>
            <Text
              style={{ fontSize: 17, fontFamily: "outfit", color: colors.GRAY }}
            >
              <Ionicons name="location" size={20} color={colors.PRIMARY} />
              {business?.address}
            </Text>
            {/* Horizental line */}
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.GRAY,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <View>
              <Heading text={"About"} />
              <Text
                style={{
                  lineHeight: 25,
                  fontFamily: "outfit",
                  color: colors.GRAY,
                  fontSize: 16,
                }}
                numberOfLines={isReadMore ? 20 : 5}
              >
                {business?.about}
              </Text>
              <TouchableOpacity onPress={() => setIsReadMore(true)}>
                <Text
                  style={{
                    color: colors.PRIMARY,
                    fontSize: 16,
                    fontFamily: "outfit",
                  }}
                >
                  {isReadMore ? "Read Less" : "Read More"}
                </Text>
              </TouchableOpacity>
            </View>
            {/* Horizental line */}
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.GRAY,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <BusinessPhoto business={business} />
          </View>
        </ScrollView>
        <View
          style={{ display: "flex", flexDirection: "row", margin: 10, gap: 10 }}
        >
          <TouchableOpacity onPress={() => onMessageBtnClick() } style={styles.messageBtn}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit-medium",
                color: colors.PRIMARY,
                fontSize: 18,
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(true) } style={styles.bookingBtn}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit-medium",
                color: colors.WHITE,
                fontSize: 18,
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
        <Modal animationType="slide"
        visible={showModal}
        >
            <BookingModel businessId={business.id} hideModal={() => setShowModal(false)}/>
        </Modal>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  messageBtn: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 99,
    textAlign: "center",
    flex: 1,
  },
  bookingBtn: {
    padding: 10,
    backgroundColor: colors.PRIMARY,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 99,
    textAlign: "center",
    flex: 1,
  },
});

export default BusinessDetails;
