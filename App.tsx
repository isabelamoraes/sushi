import "intl";
import "intl/locale-data/jsonp/pt-BR";
import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { Oxygen_400Regular, Oxygen_700Bold } from "@expo-google-fonts/oxygen";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";

import theme from "./src/styles/theme";
import { Routes } from "./src/routes";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    Oxygen_400Regular,
    Oxygen_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
