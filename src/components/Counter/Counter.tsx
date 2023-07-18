import { Box, Flex, HStack, Heading, Icon, Pressable, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ICount } from "../../utils/interfaces/interface";

const Counter = ({ count, uuid, name }: ICount) => {
  const [countTitle, setCountTitle] = useState<string | null>(name || "Count");
  const [countValue, setCountValue] = useState<number>(count || 0);

  const increment = () => {
    setCountValue(countValue + 1);
  };
  const decrement = () => {
    setCountValue(countValue - 1);
  };
  useEffect(() => {}, [countValue]);
  return (
    <HStack
      space={2}
      shadow="3"
      w="full"
      h="20"
      px={4}
      borderWidth="1"
      borderColor="gray.300"
    >
      <Flex w="70%" flexDir="row" align="center">
        <Flex align="flex-end" w="30%">
          <Heading color="blue.600" fontSize="4xl">
            {countValue}
          </Heading>
        </Flex>
        <Box w="70%">
          <Text color="blue.600" pl={2} fontSize="lg">
            {countTitle ?? "Count"}
          </Text>
        </Box>
      </Flex>
      <Flex w="30%" justify="center" align="center" flexDir="row">
        <Pressable
          onPress={decrement}
          px={2}
          borderColor="blue.600"
          borderWidth="2"
          borderTopLeftRadius="md"
          borderBottomLeftRadius="md"
        >
          <Icon color="blue.600" size="xl" as={<AntDesign name="minus" />} />
        </Pressable>
        <Pressable
          onPress={increment}
          px={2}
          borderTopRightRadius="md"
          borderBottomRightRadius="md"
          borderColor="blue.600"
          borderRightWidth="2"
          borderTopWidth="2"
          borderBottomWidth="2"
        >
          <Icon color="blue.600" size="xl" as={<Ionicons name="md-add" />} />
        </Pressable>
      </Flex>
    </HStack>
  );
};

export default Counter;
