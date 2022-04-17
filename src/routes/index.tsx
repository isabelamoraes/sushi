import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Cart } from "../screens/Cart";

const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
}
