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
import { BlurView } from "expo-blur";

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
    // await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
    buttonFunction();
  };
  // background: #120d20
  // buttons: #1b163b
  // headings: #948BFF
  // paras: #6F6AB0
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
          marginTop: StatusBar.currentHeight, // Adjust to appear just after the status bar
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingTop: "3%",
        }}
      >
        <Animated.Text
          style={{
            fontFamily: "DMSans-Bold",
            color: "#8E7EDE",
            fontSize: headerHeight,
          }}
        >
          Settings
        </Animated.Text>
      </Animated.View>
      <BlurView
        intensity={35}
        experimentalBlurMethod="dimezisBlurView"
        style={{ position: "absolute", top: 200, width: "100%", zIndex: 10 }}
      >
        <Text>Blurry</Text>
      </BlurView>
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
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 15,
            }}
            onPress={() =>
              handleButtonPress(() => console.log("Profile pressed"))
            }
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
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
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 5,
            }}
            onPress={() =>
              handleButtonPress(() => console.log("Account pressed"))
            }
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
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
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 5,
            }}
            onPress={() =>
              handleButtonPress(() => console.log("Notifications pressed"))
            }
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
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
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 5,
            }}
            onPress={() =>
              handleButtonPress(() => console.log("Booking pressed"))
            }
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="target"
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
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 5,
            }}
            onPress={() =>
              handleButtonPress(() => console.log("Appearance pressed"))
            }
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="feather"
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
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 5,
            }}
            onPress={() =>
              handleButtonPress(() => console.log("Privacy pressed"))
            }
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="eye-off"
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
              backgroundColor: "#1b163b",
              padding: "3%",
              width: "100%",
              marginBottom: "4%",
              borderRadius: 18,
              elevation: 5,
            }}
            onPress={() =>
              handleButtonPress(() => console.log("About pressed"))
            }
            onPressIn={handleButtonPressIn}
            activeOpacity={0.7}
          >
            <Feather
              name="info"
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
