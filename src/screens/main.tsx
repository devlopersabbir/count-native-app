import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../utils/types/type";
import Home from "./home/HomeScreen";
import Settings from "./settings/SettingScreen";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
