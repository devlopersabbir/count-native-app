import { Box, Flex, HStack, Heading, Icon, Pressable, Text } from "native-base";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import useCounter from "../../hooks/useCounter";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

interface ICounterProps {
  count: number;
  uuid: string;
  name?: string;
  navigation?: any;
}

const Counter = ({ count, uuid, name, navigation }: ICounterProps) => {
  const { update, setSelectedItem } = useCounter();
  const translateX = useSharedValue(0);

  const penGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {},
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  return (
    <PanGestureHandler onGestureEvent={penGesture}>
      {/* <Animated.View style={[styles.listItem, rStyle]}> */}
      <HStack
        space={2}
        shadow="3"
        w="full"
        h="20"
        px={4}
        borderWidth="1"
        borderColor="gray.300"
      >
        <Pressable
          onPress={() => {
            setSelectedItem({ uuid, count, name });
            navigation.navigate("Counter");
          }}
          display="flex"
          w="70%"
          flexDir="row"
          alignItems="center"
        >
          {/* <Flex> */}
          <Flex align="flex-end" w="30%">
            <Heading color="blue.600" fontSize="4xl">
              {count}
            </Heading>
          </Flex>
          <Box w="70%">
            <Text color="blue.600" pl={2} fontSize="lg">
              {name ?? "Count"}
            </Text>
          </Box>
          {/* </Flex> */}
        </Pressable>

        <Flex w="30%" justify="center" align="center" flexDir="row">
          <Pressable
            onPress={() => update(1, uuid)}
            px={2}
            borderColor="blue.600"
            borderWidth="2"
            borderTopLeftRadius="md"
            borderBottomLeftRadius="md"
          >
            <Icon color="blue.600" size="xl" as={<AntDesign name="minus" />} />
          </Pressable>
          <Pressable
            onPress={() => update(-1, uuid)}
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
      {/* </Animated.View> */}
    </PanGestureHandler>
  );
};

export default Counter;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "red",
  },
});