import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeading from "../components/PageHeading";
import GlobalApi from "../utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItem from "./BusinessListItem";

const Booking = () => {
  const { user } = useUser();
  const [bookingList, setBookingList] = useState();
  const [loading, setLoading] =useState(false)

  useEffect(() => {
    user && getUserBooking();
  }, [user]);
  const getUserBooking = () => {
    setLoading(true)
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        console.log(res);
        setBookingList(res.bookings);
        setLoading(false)
      }
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 26 }}>
        My Booking
      </Text>

      <View>
        <FlatList
          data={bookingList}
          onRefresh={() =>getUserBooking() }
          refreshing={loading}
          renderItem={({ item, index }) => (
            <View>
              <BusinessListItem
                business={item?.businessLists}
                booking={item}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Booking;
