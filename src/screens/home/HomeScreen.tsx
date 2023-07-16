import { Flex, View, ScrollView, Text } from "native-base";
import React, { useEffect } from "react";
import Header from "../../components/Topbar/Header";
import Footer from "../../components/Bottom/Footer";
import Counter from "../../components/Counter/Counter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeScreen } from "../../utils/pages/pageTypes";

const HomeScreen: React.FC<HomeScreen> = ({ navigation }) => {
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
      <Text>Hello world</Text>
      {/* <Flex color="white" flex={1.5} bg="blue.500">
        <Header />
      </Flex>
      <Flex flex={8}>
        <ScrollView>
          <Counter />
        </ScrollView>
      </Flex>
      <Flex flex={1}>
        <Footer />
      </Flex> */}
    </View>
  );
};

export default HomeScreen;
