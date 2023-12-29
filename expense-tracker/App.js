import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AllExpences from "./screens/AllExpences";
import RecendExpenses from "./screens/RecendExpenses";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#4402b5" },
            headerTintColor: "white",
            tabBarStyle: { backgroundColor: "#4402b5" },
            tabBarActiveTintColor: "white",
          }}
        >
          <Tab.Screen
            name="RecendExpenses"
            component={RecendExpenses}
            options={{
              title: "Recent Expenses",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="hourglass" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="AllExpences"
            component={AllExpences}
            options={{
              title: "All Expenses",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="calendar" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
