import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import color from "../Utils/Color";
import { client } from "../Utils/KindConfig";
import { useContext } from "react";
import { AuthContext } from "../index";


const LoginScreen = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      setAuth(true);
      console.log("Authenticated sucessfully");
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      setAuth(true);
      console.log("Authenticated sucessfully");
    }
  };

  return (
    <View>
      <Image
        source={require("../../assets/images/rocket.jpg")}
        style={{ width: "100%", height: 400, resizeMode: "cover" }} // Fixed styling
      />

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 45, fontWeight: "bold" }}>
          Welcome
          <Text style={{ color: color.PRIMARY }}>to CodeBox</Text>
        </Text>
        <Text style={{ fontSize: 20, marginTop: 7, color: color.GRAY }}>
          Learn Programming to Build Life Project{" "}
        </Text>
        {/* Sign In button */}
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text
            style={{ textAlign: "center", color: color.WHITE, fontSize: 18 }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp}>
          <Text
            style={{
              marginTop: 10,
              color: color.PRIMARY,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Create New Account{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: color.PRIMARY,
    borderRadius: 99,
    marginTop: 60,
  },
});
