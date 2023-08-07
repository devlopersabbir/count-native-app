import {
  Flex,
  View,
  ScrollView,
  Center,
  IconButton,
  Toast,
  useToast,
  Spinner,
} from "native-base";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../../components/Topbar/Header";
import Counter from "../../components/Counter/Counter";
import { HomeScreens } from "../../utils/pages/pageTypes";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { ICount } from "../../utils/interfaces/interface";

import useCounter from "../../hooks/useCounter";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HomeScreen = ({ navigation }: HomeScreens) => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigations = useNavigation();
  const { setAllLists, countListState } = useCounter();

  useLayoutEffect(() => {
    navigations.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    const getListFromStroage = async () => {
      try {
        setLoading(true);
        const res: string = (await AsyncStorage.getItem(
          "count-list"
        )) as string;
        const resData: ICount[] = JSON.parse(res);

        if (resData) {
          setAllLists(resData);
          setLoading(false);
        }
      } catch (error) {
        if (error) {
          setLoading(false);
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
    };
    getListFromStroage();
  }, []);



  return (
    <View flex={10}>
      <Flex color="white" flex={1.5} bg="blue.500">
        <Header />
      </Flex>
      <Flex flex={8}>
        <ScrollView>
          {loading ? (
            <Spinner mt="50%" size="lg" />
          ) : (
            countListState?.lists &&
            countListState?.lists?.map((item: ICount, index: number) => (
              <Counter
                navigation={navigation}
                uuid={item?.uuid}
                name={item?.name}
                count={item?.count}
                key={index}
              />
            ))
          )}
        </ScrollView>
      </Flex>
      <Flex flex={1}>
        <Center w="full" h="full">
          <IconButton
            onPress={() => navigation.navigate("Settings")}
            rounded="full"
            shadow="9"
            bg="white"
            icon={<Feather name="settings" size={30} color="black" />}
          />
        </Center>
      </Flex>
    </View>
  );
};

export default HomeScreen;
