import React from "react";
import AppContainer from "./src/components/app-container";
import MainScreen from "./src/screens/main";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <MainScreen />
        </GestureHandlerRootView>
      </AppContainer>
    </Provider>
  );
};

export default App;
