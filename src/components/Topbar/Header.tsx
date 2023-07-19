import { Box, Text, Flex, Pressable, Heading, Icon, HStack } from "native-base";
import { SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addCountList } from "../../redux/slice/countSlice";

const Header = () => {
  const dispatch = useDispatch();

  const createNewList = () => {
    console.log("created");
    dispatch(addCountList("Count"));
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
            <Pressable onPress={createNewList}>
              <Icon color="white" size="xl" as={<Ionicons name="md-add" />} />
            </Pressable>
          </HStack>
        </Box>
      </Flex>
    </SafeAreaView>
  );
};

export default Header;
