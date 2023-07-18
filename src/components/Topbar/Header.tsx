import {
  Box,
  Text,
  View,
  Flex,
  Pressable,
  Heading,
  Icon,
  HStack,
} from "native-base";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
import { ICount, ICountSliceState } from "../../utils/interfaces/interface";
import { create_new_count } from "../../redux/slice/countSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const createNewCounter = async () => {
    const createNewList: ICount = {
      uuid: uuid.v4() as string,
      name: "Count",
      count: 0,
    };
    dispatch(create_new_count(createNewList));
  };
  return (
    <SafeAreaView>
      <Flex
        alignItems="center"
        h="full"
        w="full"
        px={3}
        flexDir="row"
        justifyContent="space-between"
      >
        {/* Edit btn */}
        <Box w="20%">
          <Pressable>
            <Text color="white" fontSize="lg">
              Edit
            </Text>
          </Pressable>
        </Box>

        {/* Midlle heading */}

        <Box w="60%">
          <Heading
            fontSize="xl"
            color="white"
            fontWeight="bold"
            textAlign="center"
          >
            Counter List
          </Heading>
        </Box>
        {/* add and filter */}

        <Box display="flex" alignItems="flex-end" w="20%">
          <HStack flexDir="row" space={2}>
            {/* filter button */}
            <Pressable>
              <Icon
                color="white"
                size="xl"
                as={<MaterialIcons name="filter-list" />}
              />
            </Pressable>
            {/* Add new button */}
            <Pressable onPress={createNewCounter}>
              <Icon color="white" size="xl" as={<Ionicons name="md-add" />} />
            </Pressable>
          </HStack>
        </Box>
      </Flex>
    </SafeAreaView>
  );
};

export default Header;
