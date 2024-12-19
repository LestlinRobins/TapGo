import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Haptics from "expo-haptics";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import { Button } from "react-native-paper";

let userInfo = null;
const LoginScreen = () => {
  const [error, setError] = useState();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "242096250534-r7ia04t347u2j6p23mi17le6v4qqlgnk.apps.googleusercontent.com",
    });
  }, []);
  const signin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      userInfo = user;
      setUserin(true);
      setError();
      console.log(userInfo.user);
    } catch (e) {
      setError(e);
    }
  };

  const logout = () => {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: "5%",
        paddingTop: "13%",
        backgroundColor: "#0C1321",
      }}
    >
      <StatusBar style="light" />
      <View>
        <Text
          style={{ color: "gray", fontSize: 30, fontFamily: "DMSans-Regular" }}
        >
          Hello, there! Let's get this party started!
        </Text>
      </View>
      <Text>{JSON.stringify(error)}</Text>

      {userInfo && <Text>{JSON.stringify(userInfo.user.email)}</Text>}

      {userInfo != null ? (
        <Button onPress={logout}>Logout</Button>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            Haptics.selectionAsync();
          }}
          style={{
            backgroundColor: "#253863",
            width: "80%",
            alignSelf: "center",
            height: "5%",
            borderRadius: 30,
            padding: "3%",
          }}
          onPressIn={signin}
        >
          <Text
            style={{ fontFamily: "DMSans-Medium", color: "#fff", fontSize: 18 }}
          >
            Sign in with Google
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LoginScreen;
export { userInfo };
