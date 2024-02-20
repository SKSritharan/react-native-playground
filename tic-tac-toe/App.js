import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import GameScreen from "./app/screens/GameScreen";
import GameOverScreen from "./app/screens/GameOverScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="GameScreen"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="GameOverScreen" component={GameOverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
