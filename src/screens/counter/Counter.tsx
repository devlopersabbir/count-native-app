import { SafeAreaView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  Pressable,
  Heading,
  IconButton,
} from "native-base";
import { CounterScreen } from "../../utils/pages/pageTypes";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { updateCount } from "../../redux/slice/countSlice";
import { ICount } from "../../utils/interfaces/interface";

const Counter = ({ navigation, route }: CounterScreen) => {
  const navigations = useNavigation();
  const dispatch = useDispatch();
  // const { lists } = useSelector(({ countReducer }: any) => countReducer);
  const { uuid, count, name }: any = route.params;
  const [names, setNames] = useState<string>(name || "");
  const [counts, setCounts] = useState<number>(0);

  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
      animation: "slide_from_right",
    });
  }, []);

  const increment = () => {
    console.log("fuck add");
    // setCounts(counts + 1);
  };
  const decrement = () => {
    console.log("fuck minus");
    // setCounts(counts - 1);
  };
  // useEffect(() => {

  // }, [counts]);
  return (
    <Flex flex={5}>
      <Flex flex={0.7} bg="blue.500" color="white" shadow="4">
        <SafeAreaView>
          <HStack
            px={3}
            alignItems="center"
            justifyContent="space-between"
            h="full"
            w="full"
          >
            <Flex w="20%">
              <Pressable onPress={() => navigation.goBack()}>
                <Icon
                  size="xl"
                  color="white"
                  as={<MaterialIcons name="arrow-back-ios" />}
                />
              </Pressable>
            </Flex>
            <Flex flexDir="row" align="center" justify="flex-end" w="80%">
              <Input
                type="text"
                defaultValue={names}
                fontSize="lg"
                fontWeight="semibold"
                bgColor="white"
                rounded="md"
                w="56"
                borderColor="none"
                borderWidth="0"
                color="blue.400"
              />
              <Text ml={3} fontSize="lg" color="white">
                Details
              </Text>
            </Flex>
          </HStack>
        </SafeAreaView>
      </Flex>
      <Flex flex={4} bg="white">
        <Flex flex={3} w="full" h="full" justify="center">
          <Heading
            fontSize="8xl"
            textAlign="center"
            color="blue.500"
            fontWeight="bold"
          >
            {counts}
          </Heading>
        </Flex>
        <HStack
          justifyContent="space-between"
          alignItems="center"
          flex={1.3}
          px={3}
          pb={3}
          flexDir="row"
          w="full"
          h="full"
        >
          <Pressable bg="blue.100" w="48%" h="full">
            <IconButton
              w="full"
              h="full"
              color="blue.600"
              icon={<Ionicons name="md-add" size={100} color="blue" />}
            />
          </Pressable>
          <Pressable bg="blue.100" w="48%" h="full">
            <IconButton
              w="full"
              h="full"
              color="blue.600"
              icon={<AntDesign name="minus" size={100} color="blue" />}
            />
          </Pressable>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Counter;
