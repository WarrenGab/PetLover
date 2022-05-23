import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Consult from "../screens/Consultation";
import Adopt from "../screens/Adoption";
import Guide from "../screens/Guide";
import PTIStart from "../screens/PTI";
import MessagesScreen from "../screens/Chat";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Home Page" component={Home} />
      <Stack.Screen name="Consultation Page" component={Consult} />
      <Stack.Screen name="Guide Page" component={Guide} />
      <Stack.Screen name="Adoption Page" component={Adopt} />
      <Stack.Screen name="PTI Test Start" component={PTIStart} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Profile Page" component={Profile} />
    </Stack.Navigator>
  );
}

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Chat Page" component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ProfileStackNavigator, ChatStackNavigator };