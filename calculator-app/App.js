import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
// import CalculationsScreen from "./Screens/CalculationsScreen";
import CalculatorApp from "./Screens/CalculatorApp";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CalculatorApp />
    </>
  );
}
