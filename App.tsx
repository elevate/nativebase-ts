import React, { useEffect } from "react";
import { NativeBaseProvider, extendTheme, theme as nbTheme } from "native-base";
import Config from "./nativebase.config";
import { Platform } from "react-native";
import {
  Button,
  IconButton,
  Divider,
  Input,
  Radio,
  Pressable,
  TextArea,
} from "./themes";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import OtpVerification from "./screens/OtpVerification";
import ProductDetails from "./screens/ProductDetails";
import Splash from "./screens/Splash";

export default ({ children }: { children?: React.ReactNode }) => {
  const customTheme = extendTheme({
    config: {
      initialColorMode: "light",
    },
    colors: {
      primary: nbTheme.colors.violet,
      customGray: "#2F3948",
      secondary: nbTheme.colors.coolGray,
    },
    sizes: {
      container: "1016px",
    },
    components: {
      Button,
      Radio,
      Divider,
      Input,
      TextArea,
    },
  });

  // Move this to index.html later
  useEffect(() => {
    if (Platform.OS === "web") {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    }
  }, []);

  const Drawer = createDrawerNavigator();

  return (
    <NativeBaseProvider theme={customTheme} config={Config}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ headerShown: true }}
          initialRouteName="Splash"
        >
          <Drawer.Screen name={"Splash"} component={Splash} />
          <Drawer.Screen name={"SignUp"} component={SignUp} />
          <Drawer.Screen name={"SignIn"} component={SignIn} />
          <Drawer.Screen name={"OtpVerification"} component={OtpVerification} />
          <Drawer.Screen name={"ProductDetails"} component={ProductDetails} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
