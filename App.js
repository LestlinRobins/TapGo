import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import "expo-dev-client";
import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/HomeScreen";
import Profile from "./screens/ProfileScreen";
import Search from "./screens/SearchScreen";
import Chats from "./screens/ChatScreen";
import Explore from "./screens/ExploreScreen";
import LoginScreen, { userInfo } from "./screens/LoginScreen";
import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import LottieView from "lottie-react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "DMSans-Thin": require("./assets/Fonts/DM_Sans/static/DMSans-Thin.ttf"),
    "DMSans-ExtraLight": require("./assets/Fonts/DM_Sans/static/DMSans-ExtraLight.ttf"),
    "DMSans-Light": require("./assets/Fonts/DM_Sans/static/DMSans-Light.ttf"),
    "DMSans-Regular": require("./assets/Fonts/DM_Sans/static/DMSans-Regular.ttf"),
    "DMSans-Medium": require("./assets/Fonts/DM_Sans/static/DMSans-Medium.ttf"),
    "DMSans-Bold": require("./assets/Fonts/DM_Sans/static/DMSans-Bold.ttf"),
    "DMSans-SemiBold": require("./assets/Fonts/DM_Sans/static/DMSans-SemiBold.ttf"),
    "DMSans-ExtraBold": require("./assets/Fonts/DM_Sans/static/DMSans-ExtraBold.ttf"),
    "DMSans-Black": require("./assets/Fonts/DM_Sans/static/DMSans-Black.ttf"),
    "Satoshi-Light": require("./assets/Fonts/Satoshi/Satoshi-Light.otf"),
    "Satoshi-Regular": require("./assets/Fonts/Satoshi/Satoshi-Regular.otf"),
    "Satoshi-Medium": require("./assets/Fonts/Satoshi/Satoshi-Medium.otf"),
    "Satoshi-Bold": require("./assets/Fonts/Satoshi/Satoshi-Bold.otf"),
    "Satoshi-Black": require("./assets/Fonts/Satoshi/Satoshi-Black.otf"),
  });

  const [isReady, setIsReady] = React.useState(false);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setIsReady(true);
      }, 1000);
    }
  }, [fontsLoaded]);

  if (!isReady) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#120d20",
        }}
      >
        <StatusBar style="light" />
        <LottieView
          autoPlay
          style={{
            width: 150,
            height: 150,
            backgroundColor: "transparent",
          }}
          loop={false}
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("./assets/Animations/Animation6.json")}
        />
      </View>
    );
  }
  const handleTabPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
  };

  if (userInfo == null) {
    return <LoginScreen />;
  }
  if (JSON.stringify(userInfo.user.email)) {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let icon;
                let iconColor;
                if (route.name === "Home") {
                  icon = "home";
                  iconName = focused
                    ? "ios-information-circle"
                    : "ios-information-circle-outline";
                  iconColor = focused ? "#A3A3FF" : "#9191FF";
                } else if (route.name === "Search") {
                  icon = "help-circle";
                  iconName = focused ? "ios-list" : "ios-list-outline";
                  iconColor = focused ? "#A3A3FF" : "#9191FF";
                } else if (route.name === "Explore") {
                  icon = "compass";
                  iconName = focused ? "ios-list" : "ios-list-outline";
                  iconColor = focused ? "#A3A3FF" : "#9191FF";
                } else if (route.name === "Chats") {
                  icon = "bell";
                  iconName = focused ? "ios-list" : "ios-list-outline";
                  iconColor = focused ? "#A3A3FF" : "#9191FF";
                } else if (route.name === "Profile") {
                  icon = "settings";
                  iconName = focused ? "ios-list" : "ios-list-outline";
                  iconColor = focused ? "#A3A3FF" : "#9191FF";
                }
                return focused ? (
                  <View
                    style={{
                      backgroundColor: "#413675",
                      width: "85%",
                      alignItems: "center",
                      height: "75%",
                      borderRadius: 30,
                      justifyContent: "center",
                      elevation: 5,
                      shadowColor: "black",
                      shadowOpacity: 0.5,
                      shadowRadius: 1,
                    }}
                  >
                    <Feather name={icon} size={25} color={iconColor} />
                  </View>
                ) : (
                  <View
                    style={{
                      backgroundColor: "#231C4D",
                      width: "85%",
                      alignItems: "center",
                      height: "75%",
                      borderRadius: 20,
                      justifyContent: "center",
                    }}
                  >
                    <Feather name={icon} size={25} color={iconColor} />
                  </View>
                );
              },
              tabBarButton: (props) => (
                <TouchableOpacity
                  {...props}
                  activeOpacity={0.7}
                  onPress={async () => {
                    await handleTabPress();
                    props.onPress();
                  }}
                />
              ),
              tabBarActiveTintColor: "#FF70FF",
              tabBarInactiveTintColor: "#D4BDCF",
              tabBarStyle: {
                backgroundColor: "#231C4D",
                height: "9%",
                paddingBottom: 10,
                borderTopWidth: 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 10,
                paddingHorizontal: 7,
              },
              tabBarLabelStyle: {
                fontFamily: "DMSans-Regular",
                fontSize: 11.5,
              },
              headerShown: false,
              tabBarHideOnKeyboard: true,
              tabBarShowLabel: false,
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Chats" component={Chats} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#120d20",
    height: "100%",
    justifyContent: "space-between",
    elevation: 3,
  },
});
