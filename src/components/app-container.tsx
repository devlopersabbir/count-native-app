import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "../theme/Native";

type Props = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: Props) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default AppContainer;
