import { Box, Text, Flex, Pressable, Heading, Icon, HStack } from "native-base";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import useCounter from "../../hooks/useCounter";
import uuid from "react-native-uuid";

const Header = () => {
  const { addNewList } = useCounter();
const filterList = () => {};
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
      {/* <Box w="20%">
          <Pressable>
            <Text color="white" fontSize="lg">
              Edit
            </Text>
          </Pressable>
        </Box> */}

      {/* Midlle heading */}

      <Box>
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
          <Pressable onPress={filterList}>
            <Icon
              color="white"
              size="xl"
              as={<MaterialIcons name="filter-list" />}
            />
          </Pressable>
          {/* Add new button */}
          <Pressable
            onPress={() =>
              addNewList({
                uuid: uuid.v4() as string,
                count: 0,
                name: "Count",
              })
            }
          >
            <Icon color="white" size="xl" as={<Ionicons name="md-add" />} />
          </Pressable>
        </HStack>
      </Box>
    </Flex>
  </SafeAreaView>
);
};

export default Header;
