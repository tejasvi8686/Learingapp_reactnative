import { View, Text, Button } from "react-native";
import React from "react";
import { client } from "../Utils/KindConfig";
import { AuthContext } from "../index";
import { useContext } from "react";
import Header from "../Components/Header";

export default function HomeScreen() {
  const { auth, setAuth } = useContext(AuthContext);
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };
  return (
    <View>
    <Header />
      {/* <Text>HomeScreen</Text>
      <Button title="Logout" onPress={handleLogout}>
        Press Me
      </Button> */}
    </View>
  );
}
