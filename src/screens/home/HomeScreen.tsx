import { Flex, View, ScrollView, Text, Center, IconButton } from "native-base";
import React, { useEffect, useLayoutEffect } from "react";
import Header from "../../components/Topbar/Header";
import Footer from "../../components/Bottom/Footer";
import Counter from "../../components/Counter/Counter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeScreens } from "../../utils/pages/pageTypes";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }: HomeScreens) => {
  const navigations = useNavigation();

  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    const getListFromStorage = async () => {
      try {
        const res = await AsyncStorage.getItem("create-list");
        console.log("res: ", res);
      } catch (error) {
        if (error) return console.log("Error: ", error);
      }
    };

    getListFromStorage();
  }, []);

  return (
    <View flex={10}>
      <Flex color="white" flex={1.5} bg="blue.500">
        <Header />
      </Flex>
      <Flex flex={8}>
        <ScrollView>
          <Counter />
        </ScrollView>
      </Flex>
      <Flex flex={1}>
        <Center w="full" h="full">
          <IconButton
            onPress={() => navigation.navigate("Settings")}
            rounded="full"
            shadow="9"
            bg="white"
            icon={<Feather name="settings" size={30} color="black" />}
          />
        </Center>
      </Flex>
    </View>
  );
};

export default HomeScreen;
