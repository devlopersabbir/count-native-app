import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Modal,
  Stack,
} from "native-base";
import { AirbnbRating } from "react-native-ratings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Rate, { AndroidMarket, IConfig } from "react-native-rate";

const ReviewModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const androidPackageName = "com.devlopersabbir.countnativeapp";

  const submitReview = async() => {
    const config:IConfig = {
      GooglePackageName: androidPackageName,
      preferredAndroidMarket: AndroidMarket.Google,
      openAppStoreIfInAppFails:true
    };

    Rate.rate(config, (success:boolean, error:string)=>{
      if(!success) return alert("Fail to send review!")
      console.log(error)
    })
  };

  const checkAppLaunchCount = async () => {
    try {
      const launchCount = parseInt(
        (await AsyncStorage.getItem("appLaunchCount")) || "0",
        10
      );
      const desiredLaunchCount = 3;
      console.log(launchCount);

      if (launchCount >= desiredLaunchCount) {
        await AsyncStorage.setItem("appLaunchCount", "0");
        setShowModal(true);
      } else {
        await AsyncStorage.setItem(
          "appLaunchCount",
          (launchCount + 1).toString()
        );
      }
    } catch (error) {
      console.log("Error checking app launch count:", error);
    }
  };
  useEffect(() => {
    checkAppLaunchCount();
  }, []);
  return (
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <Flex align="center" justify="center">
              <AirbnbRating size={25} defaultRating={5} />
              <HStack space={5} mt={3}>
                <Button
                  px={5}
                  rounded="full"
                  variant="unstyled"
                  bg="green.600"
                  _text={{ color: "white", fontSize: "xl", fontWeight: "bold" }}
                  colorScheme="emerald" onPress={submitReview}
                >
                  Submit
                </Button>
                <Button
                  px={5}
                  variant="unstyled"
                  bg="red.600"
                  rounded="full"
                  _text={{ color: "white", fontSize: "xl", fontWeight: "bold" }}
                  colorScheme="emerald" onPress={()=>setShowModal(false)}
                >
                  Not now
                </Button>
              </HStack>
            </Flex>
          </Modal.Body>
        </Modal.Content>
      </Modal>
  );
};

export default ReviewModal;
