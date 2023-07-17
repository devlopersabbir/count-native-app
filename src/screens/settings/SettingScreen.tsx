import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Pressable,
  ScrollView,
  Switch,
  Text,
  VStack,
  View,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { SettingScreens } from "../../utils/pages/pageTypes";

const Settings = ({ navigation }: SettingScreens) => {
  const navigations = useNavigation();
  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
      animation: "fade_from_bottom",
    });
  }, []);
  return (
    <View flex={12}>
      <Box flex={1.5} bg="blue.500" px={3}>
        <SafeAreaView>
          <Flex
            h="full"
            w="full"
            alignItems="center"
            justifyContent="center"
            flexDir="row"
            position="relative"
          >
            <Heading
              fontSize="xl"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              Settings
            </Heading>
            <Pressable
              onPress={() => navigation.goBack()}
              position="absolute"
              right={0}
            >
              <Text color="white" fontSize="lg">
                Done
              </Text>
            </Pressable>
          </Flex>
        </SafeAreaView>
      </Box>
      <Flex flex={11} safeAreaBottom>
        <ScrollView>
          <VStack px={3} my={3}>
            {/* Orientation lock */}
            <HStack
              py={3}
              borderBottomWidth="1"
              borderBottomColor="gray.200"
              justifyContent="space-between"
            >
              <Text fontSize="lg" fontWeight="normal">
                Orientation Lock
              </Text>
              <Switch size="md" colorScheme="amber" />
            </HStack>
            {/* Haptics */}
            <HStack
              py={3}
              borderBottomWidth="1"
              borderBottomColor="gray.200"
              justifyContent="space-between"
            >
              <Text fontSize="lg" fontWeight="normal">
                Haptics
              </Text>
              <Switch size="md" colorScheme="amber" />
            </HStack>
            {/* Click sounds */}
            <HStack
              py={3}
              borderBottomWidth="1"
              borderBottomColor="gray.200"
              justifyContent="space-between"
            >
              <Text fontSize="lg" fontWeight="normal">
                Click Sounds
              </Text>
              <Switch size="md" colorScheme="amber" />
            </HStack>
            {/* Default Sound */}
            <Pressable>
              <HStack
                py={3}
                borderBottomWidth="1"
                borderBottomColor="gray.200"
                justifyContent="space-between"
              >
                <Text fontSize="lg" fontWeight="normal">
                  Default Sounds
                </Text>
                <Icon
                  size="lg"
                  color="gray.400"
                  as={<MaterialIcons name="arrow-forward-ios" />}
                />
              </HStack>
            </Pressable>
            {/* Read Out Numbers */}
            <HStack
              py={3}
              borderBottomWidth="1"
              borderBottomColor="gray.200"
              justifyContent="space-between"
            >
              <Text fontSize="lg" fontWeight="normal">
                Read Out Numbers
              </Text>
              <Switch size="md" colorScheme="amber" />
            </HStack>
            {/* Default Counter Style */}
            <Pressable>
              <HStack
                py={3}
                borderBottomWidth="1"
                borderBottomColor="gray.200"
                justifyContent="space-between"
              >
                <Text fontSize="lg" fontWeight="normal">
                  Default Counter Style
                </Text>
                <Text fontSize="lg" fontWeight="normal" color="blue.400">
                  Clasic
                </Text>
                <Icon
                  size="lg"
                  color="gray.400"
                  as={<MaterialIcons name="arrow-forward-ios" />}
                />
              </HStack>
            </Pressable>
            {/* Screen Always On */}
            <HStack
              py={3}
              borderBottomWidth="1"
              borderBottomColor="gray.200"
              justifyContent="space-between"
            >
              <Text fontSize="lg" fontWeight="normal">
                Screen Always On
              </Text>
              <Switch size="md" colorScheme="amber" />
            </HStack>
            {/* Upgrade: Ad free */}
            <Pressable>
              <HStack
                py={3}
                borderBottomWidth="1"
                borderBottomColor="gray.200"
                justifyContent="space-between"
              >
                <Text fontSize="lg" fontWeight="normal">
                  Upgrade: Ad free
                </Text>
                <Icon
                  size="lg"
                  color="gray.400"
                  as={<MaterialIcons name="arrow-forward-ios" />}
                />
              </HStack>
            </Pressable>
            {/* Supports */}
            <Pressable>
              <HStack
                py={3}
                borderBottomWidth="1"
                borderBottomColor="gray.200"
                justifyContent="space-between"
              >
                <Text fontSize="lg" fontWeight="normal">
                  Supports
                </Text>
                <Icon
                  size="lg"
                  color="gray.400"
                  as={<MaterialIcons name="arrow-forward-ios" />}
                />
              </HStack>
            </Pressable>
            {/* privacy */}
            <Pressable>
              <HStack
                py={3}
                borderBottomWidth="1"
                borderBottomColor="gray.200"
                justifyContent="space-between"
              >
                <Text fontSize="lg" fontWeight="normal">
                  Privacy Policy
                </Text>
                <Icon
                  size="lg"
                  color="gray.400"
                  as={<MaterialIcons name="arrow-forward-ios" />}
                />
              </HStack>
            </Pressable>
          </VStack>
        </ScrollView>
      </Flex>
    </View>
  );
};

export default Settings;
