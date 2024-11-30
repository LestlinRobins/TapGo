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

const Profile = () => {
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
    outputRange: ["13%", "8%"],
    extrapolate: "clamp",
  });

  const backgroundColor = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: ["#231C4D", "#171429"],
    extrapolate: "clamp",
  });

  return (
    <View
      style={{ backgroundColor: "#171429", height: "100%", paddingTop: "0%" }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#231C4D" />
      <Animated.View
        style={{
          height: animatedViewHeight,
          transform: [{ translateY: headerPosition }],
          zIndex: 1,
          backgroundColor,
          paddingHorizontal: "5%",
          marginTop: "5%",
          justifyContent: "center",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        }}
      >
        <Animated.Text
          style={{
            fontFamily: "Satoshi-Bold",
            color: "#8E7EDE",
            fontSize: headerHeight,
          }}
        >
          Settings
        </Animated.Text>
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
            backgroundColor: "#171429",
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
              Your Profile
            </Text>
            <Image
              style={{
                height: 150,
                width: 150,
                borderRadius: 100,
                top: "1%",
                alignSelf: "center",
                marginTop: "6%",
              }}
              source={require("../assets/Images/avatar.png")}
            />
            <Text
              style={{
                fontFamily: "Satoshi-Bold",
                color: "#948BFF",
                fontSize: 30,
                alignSelf: "center",
                marginTop: "6%",
              }}
            >
              Lestlin Robins
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
              (2024BCS0060)
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#231C4D",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
            }}
          >
            <Feather
              name="user"
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
                Profile
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Update your name, contact info, and pic to keep your profile
                fresh and make your TapGo experience smoother.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#231C4D",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
            }}
          >
            <Feather
              name="at-sign"
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
                Account
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Customize your account by updating security, changing your
                password, and adjusting settings to match your vibe.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#231C4D",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
            }}
          >
            <Feather
              name="bell"
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
                Notifications
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Stay in the loop: customize your notifications to get alerts
                that matter to you, and mute the rest.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#231C4D",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
            }}
          >
            <Feather
              name="bell"
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
                Booking Preferences
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Set your booking preferences to match your schedule and make
                booking easy and stress-free.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#231C4D",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
            }}
          >
            <Feather
              name="bell"
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
                Appearance
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Customize the app’s look to match your style with themes,
                colors, and layout options.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#231C4D",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
            }}
          >
            <Feather
              name="bell"
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
                Privacy
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Manage your privacy settings to control what you share and who
                sees your info.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#231C4D",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
            }}
          >
            <Feather
              name="bell"
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
                About
              </Text>
              <Text
                style={{
                  fontFamily: "DMSans-Light",
                  color: "#6F6AB0",
                  fontSize: 12,
                }}
              >
                Learn more about TapGo, our features, and how we’re here to make
                your experience better.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Profile;
