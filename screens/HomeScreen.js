import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Animated,
} from "react-native";
import { useState } from "react";
import * as Icon from "phosphor-react-native";
import * as Haptics from "expo-haptics";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

import BusBookingDetails from "./components/busBooking/busBookingDetails";
import CafeDetails from "./components/cafeteriaBooking/cafeteriaBookingDetails";
import CollegeMapDetails from "./components/collegeMap/collegeMapDetails";
import FacultyDetails from "./components/facultyAvailability/facultyAvailabilityDetails";
import LeaveDetails from "./components/leaveApplications/leaveApplicationsDetails";
import LibraryBooksDetails from "./components/libraryReturn/libraryBooksDetails";
import SportsCourtsDetails from "./components/sportsCourtsBooking/sportsCourtsDetails";
import WashingMachineDetails from "./components/washingMachineBooking/washingMachineDetails";
import { userInfo } from "./LoginScreen";

const logout = () => {
  GoogleSignin.revokeAccess();
  GoogleSignin.signOut();
  userInfo = null;
};

function HomeScreen({ navigation }) {
  const [scrollY] = useState(new Animated.Value(0));

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [30, 20],
    extrapolate: "clamp",
  });

  const headerPosition = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 0],
    extrapolate: "clamp",
  });

  const animatedViewHeight = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ["10%", "6%"],
    extrapolate: "clamp",
  });

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ["#231C4D", "#231C4D"],
    extrapolate: "clamp",
  });

  const handleButtonPressIn = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  };

  const handleButtonPressOut = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  };

  const handleButtonPress = async (buttonFunction) => {
    buttonFunction();
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <View style={{ backgroundColor: "#120d20", flex: 1, paddingTop: "0%" }}>
      <StatusBar barStyle="light-content" backgroundColor="#231C4D" />
      <Animated.View
        style={{
          height: animatedViewHeight,
          transform: [{ translateY: headerPosition }],
          zIndex: 0,
          backgroundColor,
          paddingHorizontal: "5%",
          marginTop: StatusBar.currentHeight,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingTop: "3%",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Animated.Text
          style={{
            fontFamily: "DMSans-Bold",
            color: "#8E7EDE",
            fontSize: headerHeight,
          }}
        >
          TapGo
        </Animated.Text>
        <Animated.Image
          style={{
            height: Animated.multiply(headerHeight, 1.5),
            width: Animated.multiply(headerHeight, 1.5),
            borderRadius: 100,
          }}
          source={require("../assets/Images/avatar.png")}
        />
      </Animated.View>
      <Animated.ScrollView
        style={{ paddingHorizontal: "5%" }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
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
                fontFamily: "Satoshi-Bold",
                fontSize: 30,
                marginTop: "6%",
                color: "#948BFF",
              }}
            >
              {getGreeting() + ",\nLestlin!"}
            </Text>
            <Text
              style={{
                fontFamily: "DMSans-Regular",
                color: "#948BFF",
                fontSize: 23,
                marginTop: "6%",
                marginBottom: "6%",
              }}
            >
              {/* What would you like to do today? */}
              {/* {JSON.stringify(userInfo.user.email)} */}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: "white",
              color: "black",
            }}
            onPress={logout()}
          >
            <Text>LOGOUT</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() => navigation.navigate("BusDetails"))
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.Bus size="60px" color="#ABABFF" weight="regular" />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 15,
                    marginTop: "5%",
                  }}
                >
                  Book a ride
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() =>
                  navigation.navigate("SportsCourtsDetails")
                )
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.BeachBall size="60px" color="#ABABFF" weight="regular" />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 15,
                    marginTop: "5%",
                  }}
                >
                  Sports Courts
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() =>
                  navigation.navigate("WashingMachineDetails")
                )
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.WashingMachine
                size="60px"
                color="#ABABFF"
                weight="regular"
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 15,
                    marginTop: "5%",
                  }}
                >
                  Washing Machine
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() => navigation.navigate("LeaveDetails"))
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.Mailbox size="60px" color="#ABABFF" weight="regular" />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 15,
                    marginTop: "5%",
                  }}
                >
                  Leave Applications
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() => navigation.navigate("FacultyDetails"))
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.ChalkboardTeacher
                size="60px"
                color="#ABABFF"
                weight="regular"
              />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 15,
                    marginTop: "5%",
                  }}
                >
                  Faculty Availability
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() =>
                  navigation.navigate("LibraryBooksDetails")
                )
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.Books size="60px" color="#ABABFF" weight="regular" />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 15,
                    marginTop: "5%",
                  }}
                >
                  Library Books
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() =>
                  navigation.navigate("CollegeMapDetails")
                )
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.Blueprint size="60px" color="#ABABFF" weight="regular" />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 18,
                    marginTop: "5%",
                  }}
                >
                  College Map
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1b163b",
                padding: "5%",
                width: "48%",
                marginBottom: "4%",
                borderRadius: 18,
                elevation: 15,
              }}
              onPress={() =>
                handleButtonPress(() => navigation.navigate("CafeDetails"))
              }
              onPressIn={handleButtonPressIn}
              activeOpacity={0.7}
            >
              <Icon.BowlSteam size="60px" color="#ABABFF" weight="regular" />
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "DMSans-Medium",
                    color: "#948BFF",
                    fontSize: 18,
                    marginTop: "5%",
                  }}
                >
                  Buy Food
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const HomeMainStack = createStackNavigator();

const Home = () => {
  return (
    <HomeMainStack.Navigator
      screenOptions={{
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
        title: false,
        headerShown: false,
      }}
    >
      <HomeMainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          animationEnabled: true,
          ...TransitionPresets.BottomSheetAndroid,
        }}
      />
      <HomeMainStack.Screen
        name="BusDetails"
        component={BusBookingDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <HomeMainStack.Screen
        name="CafeDetails"
        component={CafeDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <HomeMainStack.Screen
        name="CollegeMapDetails"
        component={CollegeMapDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <HomeMainStack.Screen
        name="FacultyDetails"
        component={FacultyDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <HomeMainStack.Screen
        name="LeaveDetails"
        component={LeaveDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <HomeMainStack.Screen
        name="LibraryBooksDetails"
        component={LibraryBooksDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <HomeMainStack.Screen
        name="SportsCourtsDetails"
        component={SportsCourtsDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <HomeMainStack.Screen
        name="WashingMachineDetails"
        component={WashingMachineDetails}
        options={{
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </HomeMainStack.Navigator>
  );
};

export default Home;
