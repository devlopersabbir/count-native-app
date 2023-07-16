import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamsList } from "../utils/types/type";
import Home from "./home/HomeScreen";
import Settings from "./settings/SettingScreen";

const Stack = createNativeStackNavigator<RootStackParamsList>();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
