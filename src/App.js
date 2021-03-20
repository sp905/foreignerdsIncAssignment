import React from "react";
import { StatusBar, View } from "react-native";
import AppNavigator from "./navigation/RootNavigator";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
      <Provider store={store}>
        <StatusBar translucent barStyle="dark-content" backgroundColor="#f8f8f8" />
        <View style={{ height: StatusBar.currentHeight }} />
        <AppNavigator />
      </Provider>
  );
};
export default App;
