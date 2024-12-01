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
                fontFamily: "Satoshi-Bold",
                color: "#948BFF",
                fontSize: 30,
                alignSelf: "center",
                marginTop: "6%",
              }}
            >
              Home Sweet Home
            </Text>
            <Text
              style={{
                fontFamily: "DMSans-Light",
                color: "#6F6AB0",
                fontSize: 10,
                alignSelf: "center",
                marginBottom: "6%",
              }}
            >
              (Your Home ID)
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() => handleButtonPress(() => console.log("Home pressed"))}
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="home"
              size={24}
              color="#948BFF"
              style={{ marginRight: 13 }}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontFamily: "DMSans-Bold",
                  color: "#948BFF",
                  fontSize: 18,
                }}
              >
                Home
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Welcome to your home screen. Here you can find all the latest
                updates and information.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Home;
