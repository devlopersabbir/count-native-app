import { Box, Center, Flex, Text, View, ScrollView } from "native-base";
import React from "react";
import Header from "../components/Topbar/Header";
import Footer from "../components/Bottom/Footer";
import Counter from "../components/Counter/Counter";

const MainScreen = () => {
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
