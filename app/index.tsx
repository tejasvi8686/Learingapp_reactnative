import React, { createContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import { useEffect } from "react";
import TabNavigation from "./Navigations/TabNavigation";
import { client } from "./Utils/KindConfig";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationIndependentTree } from "@react-navigation/native";

export const AuthContext = createContext(null);
export default function Page() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      setAuth(true);
    } else {
      setAuth(false);
    }
  };

  return (
    <View style={styles.container}>
      <AuthContext.Provider value={{ auth, setAuth } as any}>
        <NavigationIndependentTree>
          {/* <LoginScreen /> */}
          <NavigationContainer>
            {auth ? <TabNavigation /> : <LoginScreen />}
          </NavigationContainer>
        </NavigationIndependentTree>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
