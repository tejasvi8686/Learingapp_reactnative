import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { client } from "../Utils/KindConfig";
import Color from "../Utils/Color";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const [userDetail, setUserDetail] = useState();
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    const user = await client.getUserDetails();
    setUserDetail(user);
    console.log(user);
  };
  return (
    <>
      <View
        style={{
          padding: 10,
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: userDetail?.picture }}
          style={{ width: 45, height: 45, borderRadius: 99 }}
        />

        <View>
          <Text style={{ fontSize: 18, fontFamily: "outfit" }}>Welcome</Text>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: Color.PRIMARY }}
          >
            Hello {userDetail?.given_name}
          </Text>
        </View>
      </View>
      <View style={styles.input}>
        <Ionicons name="search" size={24} color={Color.GRAY} />
        <TextInput placeholder="Search"  />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Color.WHITE,
    borderRadius: 99,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    borderWidth: 0.5,
    borderColor:Color.PRIMARY,
  },
});
