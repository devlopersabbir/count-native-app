import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "../theme/Native";
import { StatusBar } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return (
    <>
      {/* <GestureHandlerRootView> */}
      <StatusBar hidden />
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
      {/* </GestureHandlerRootView> */}
    </>
  );
};

export default AppContainer;
