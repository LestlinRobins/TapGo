import React from "react";
import { View, Text, StatusBar } from "react-native";

function FacultyDetails() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#120d20",
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#120d20" />

      <Text style={{ color: "white" }}>Faculty Details!</Text>
    </View>
  );
}

export default FacultyDetails;
