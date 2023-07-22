import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "../theme/Native";
import { StatusBar } from "react-native";

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return (
    <>
      <StatusBar hidden />
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </>
  );
};

export default AppContainer;
