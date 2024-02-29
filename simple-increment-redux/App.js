import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-redux";

import { store } from "./App/state/store";
import Counter from "./App/components/Counter";

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
      <StatusBar style="auto" />
    </Provider>
  );
}
