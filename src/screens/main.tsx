import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../utils/types/type";
import Home from "./home/HomeScreen";
import Settings from "./settings/SettingScreen";
import Counter from "./counter/Counter";
import ReviewModal from "../components/modals/ReviewModal";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const MainScreen = () => {
  
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Settings" component={Settings} />
        <RootStack.Screen name="Counter" component={Counter} />
      </RootStack.Navigator>
      <ReviewModal />
    </NavigationContainer>
  );
};

export default MainScreen;
