import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import { useEffect } from "react";
import { client } from "./Utils/KindConfig";

export default function Page() {
  useEffect(() => {
    checkAuthenticate();
  }, []);
  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      // Need to implement, e.g: call an api, etc...
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };

  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
