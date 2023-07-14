import { Center, IconButton } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Footer = () => {
  return (
    <Center w="full" h="full">
      <IconButton
        rounded="full"
        shadow="9"
        bg="white"
        icon={<Feather name="settings" size={30} color="black" />}
      />
    </Center>
  );
};

export default Footer;
