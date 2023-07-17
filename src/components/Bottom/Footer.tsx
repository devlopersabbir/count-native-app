import { Center, IconButton, Pressable, Text } from "native-base";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SettingScreens } from "../../utils/pages/pageTypes";

const Footer = ({ navigation }: SettingScreens) => {
  return (
    <Center w="full" h="full">
      <IconButton
        onPress={() => navigation.navigate("Settings")}
        rounded="full"
        shadow="9"
        bg="white"
        icon={<Feather name="settings" size={30} color="black" />}
      />
    </Center>
  );
};

export default Footer;
