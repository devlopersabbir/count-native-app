import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "../theme/Native";

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
