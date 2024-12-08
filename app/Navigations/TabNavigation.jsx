import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import MyCourseScreen from "../Screens/MyCourseScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyCourse" component={MyCourseScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
