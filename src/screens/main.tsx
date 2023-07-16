import { Flex, View, ScrollView, Text } from "native-base";
import React, { useEffect } from "react";
import Header from "../components/Topbar/Header";
import Footer from "../components/Bottom/Footer";
import Counter from "../components/Counter/Counter";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainScreen = () => {
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

  const rightSwipe = () => {
    return (
      <View>
        <Text>Hello world</Text>
      </View>
    );
  };
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
        <Footer />
      </Flex>
    </View>
  );
};

export default MainScreen;
