import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";

export default function AppNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen headerShown={false} name="Home" component={Home} />
    </Stack.Navigator>
  );
}