import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import * as Haptics from "expo-haptics";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import * as Icon from "phosphor-react-native";

function HostelToCampus() {
  return (
    <View style={{ height: "50%", backgroundColor: "pink", marginTop: "25%" }}>
      <Text>Hostel to Campus</Text>
    </View>
  );
}
function CampusToHostel() {
  return (
    <View>
      <Text>Campus to Hostel</Text>
    </View>
  );
}

function BusBookingDetailsMainScreen({ navigation }) {
  const handleButtonPressIn = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  };
  const handleButtonPress = async (buttonFunction) => {
    // await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    buttonFunction();
  };
  const handleButtonPressOut = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  };

  return (
    <View style={{ backgroundColor: "#120d20", flex: 1, paddingTop: "0%" }}>
      <StatusBar barStyle="light-content" backgroundColor="#231C4D" />
      <View
        style={{
          height: "10%",
          zIndex: 1,
          backgroundColor: "#231C4D",
          paddingHorizontal: "5%",
          marginTop: StatusBar.currentHeight, // Adjust to appear just after the status bar
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingTop: "3%",
        }}
      >
        <Text
          style={{
            fontFamily: "DMSans-Bold",
            color: "#8E7EDE",
            fontSize: 30,
          }}
        >
          Traveller.io
        </Text>
      </View>
      <ScrollView style={{ paddingHorizontal: "5%" }}>
        <View
          style={{
            backgroundColor: "#120d20",
            height: "100%",
            marginBottom: "0%",
            borderRadius: 15,
          }}
        >
          <View style={{}}>
            <Text
              style={{
                fontFamily: "DMSans-Regular",
                fontSize: 23,
                marginTop: "9%",
                color: "#948BFF",
              }}
            >
              Heading to college or back to the hostel?
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "5%",
              width: "100%",
              marginBottom: "6%",
              borderRadius: 18,
              elevation: 15,
              height: "35%",
              justifyContent: "center",
              marginTop: "10%",
            }}
            activeOpacity={0.7}
            onPress={() =>
              handleButtonPress(() => navigation.navigate("HostelToCampus"))
            }
            onPressIn={handleButtonPressIn}
          >
            <Icon.GraduationCap size="60px" color="#6666FF" weight="bold" />
            <Text
              style={{
                fontFamily: "DMSans-Medium",
                color: "#948BFF",
                fontSize: 18,
                marginTop: "3%",
              }}
            >
              Campus
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "5%",
              width: "100%",
              marginBottom: "6%",
              borderRadius: 18,
              elevation: 15,
              height: "35%",
              justifyContent: "center",
            }}
            activeOpacity={0.7}
            onPress={() =>
              handleButtonPress(() => navigation.navigate("CampusToHostel"))
            }
            onPressIn={handleButtonPressIn}
          >
            <Icon.Bed size="60px" color="#6666FF" weight="bold" />
            <Text
              style={{
                fontFamily: "DMSans-Medium",
                color: "#948BFF",
                fontSize: 18,
                marginTop: "3%",
              }}
            >
              Hostel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
const BusBookingMainStack = createStackNavigator();

const BusBookingDetails = () => {
  return (
    <BusBookingMainStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        title: false,
        headerShown: false,
      }}
    >
      <BusBookingMainStack.Screen
        name="BusHomeScreen"
        component={BusBookingDetailsMainScreen}
        options={{
          animationEnabled: true,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
      <BusBookingMainStack.Screen
        name="HostelToCampus"
        component={HostelToCampus}
        options={{
          animationEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <BusBookingMainStack.Screen
        name="CampusToHostel"
        component={CampusToHostel}
        options={{
          animationEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </BusBookingMainStack.Navigator>
  );
};

export default BusBookingDetails;
