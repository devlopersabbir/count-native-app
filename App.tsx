import React from "react";
import AppContainer from "./src/components/app-container";
import MainScreen from "./src/screens/main";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <MainScreen />
      </AppContainer>
    </Provider>
  );
};

export default App;
