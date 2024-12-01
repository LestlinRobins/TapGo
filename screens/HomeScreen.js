import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Animated,
  Image,
} from "react-native";
import { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import * as Icon from "phosphor-react-native";
import * as Haptics from "expo-haptics";

const Home = () => {
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
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
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
          zIndex: 1,
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
              What would you like to do today?
            </Text>
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
                handleButtonPress(() => console.log("Home pressed"))
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
                handleButtonPress(() => console.log("Home pressed"))
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
                handleButtonPress(() => console.log("Home pressed"))
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
                handleButtonPress(() => console.log("Home pressed"))
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
                handleButtonPress(() => console.log("Home pressed"))
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
                handleButtonPress(() => console.log("Home pressed"))
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
                handleButtonPress(() => console.log("Home pressed"))
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
                handleButtonPress(() => console.log("Home pressed"))
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
};

export default Home;
