import { extendTheme } from "native-base";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

const colors = {
  primary: {
    100: "#3498DB",
    200: "#2E86C1",
  },
  secondary: {
    600: "#17202A",
  },
};

export const theme = extendTheme({ config, colors });
