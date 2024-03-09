import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CalendarPicker from "react-native-calendar-picker";
import colors from "../utils/colors";
import Heading from "./Heading";
import GlobalApi from "../utils/GlobalApi";
import { useUser } from "@clerk/clerk-expo";
import moment from "moment";

const BookingModel = ({ businessId, hideModal }) => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [timeList, setTimeList] = useState();
  const [note, setNote] = useState();
  const { user } = useUser();

  useEffect(() => {
    getTime();
  }, []);

  const onDateChange = (date) => {

    setSelectedDate(date);
    return new Date(date).toISOString();
  };
  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };

  const createNewBooking = () => {
    if (!selectedTime || !selectedDate) {
      ToastAndroid.show("Please select Date and Time", ToastAndroid.LONG);
      hideModal(false)
    }

    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: moment(selectedDate).format('DD-MMM-YYYY'),
      note: note,
      businessId: businessId,
    };

    GlobalApi.createBooking(data)
      .then((res) => {
        console.log(`Response for create Booking:`, res);

        ToastAndroid.show("Booking Created Successfully", ToastAndroid.LONG);
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
        ToastAndroid.show("Error creating booking", ToastAndroid.LONG);
      });
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <TouchableOpacity onPress={() => hideModal()}>
            <Ionicons name="arrow-back-outline" size={24} color={"black"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontFamily: "outfit-medium" }}>
            Booking
          </Text>
        </View>
        <Heading text={"Select Date"} />
        <View style={styles.calendarContiner}>
          <CalendarPicker
            onDateChange={onDateChange}
            width={340}
            minDate={Date.now()}
            todayBackgroundColor={colors.BLACK}
            todayTextStyle={{ color: colors.WHITE }}
            selectedDayColor={colors.PRIMARY}
            selectedDayTextStyle={{ color: colors.WHITE }}
          />
        </View>
        {/* Time Select Section  */}
        <View style={{ marginTop: 20 }}>
          <Heading text={"Select Time Slot"} />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => setSelectedTime(item.time)}
                style={{ marginRight: 10 }}
              >
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Note Section  */}
        <View style={{ paddingTop: 20 }}>
          <Heading text={"Any Suggestion Note"} />
          <TextInput
            placeholder="Note"
            numberOfLines={4}
            multiline={true}
            style={styles.noteTextArea}
            onChange={(text) => setNote(text)}
          />
        </View>
        {/* confirm Button  */}
        <View>
          <TouchableOpacity
            onPress={() => createNewBooking()}
            style={{ marginTop: 15 }}
          >
            <Text style={styles.confirmBtn}>Confirm Book</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  calendarContiner: {
    backgroundColor: colors.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    backgroundColor: colors.PRIMARY,
    color: colors.WHITE,
  },
  unSelectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: colors.PRIMARY,
  },
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 20,
    fontSize: 16,
    fontFamily: "outfit",
    borderColor: colors.PRIMARY,
  },
  confirmBtn: {
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: 17,
    backgroundColor: colors.PRIMARY,
    color: colors.WHITE,
    padding: 13,
    borderRadius: 99,
    elevation: 2,
  },
});

export default BookingModel;
