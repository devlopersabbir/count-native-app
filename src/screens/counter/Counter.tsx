import { SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
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
import useCounter from "../../hooks/useCounter";

const Counter = ({ navigation }: CounterScreen) => {
  const { update, updateName, unsetSelectedItem, countListState } =
    useCounter();
  const navigations = useNavigation();

  const list = countListState.lists?.find(
    (item) => item.uuid === countListState.selectedItem?.uuid
  );

  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
      animation: "slide_from_right",
    });
  }, []);
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
              <Pressable
                onPress={() => {
                  unsetSelectedItem();
                  navigation.goBack();
                }}
              >
                <Icon
                  size="xl"
                  color="white"
                  as={<MaterialIcons name="arrow-back-ios" />}
                />
              </Pressable>
            </Flex>
            <Flex flexDir="row" align="center" justify="flex-end" w="80%">
              <Input
                onChangeText={(text) => updateName(list?.uuid as string, text)}
                type="text"
                defaultValue={list?.name}
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
            {list?.count}
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
              onPress={() => update(1, list?.uuid as string)}
              w="full"
              h="full"
              color="blue.600"
              icon={<Ionicons name="md-add" size={100} color="blue" />}
            />
          </Pressable>
          <Pressable bg="blue.100" w="48%" h="full">
            <IconButton
              onPress={() => update(-1, list?.uuid as string)}
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
