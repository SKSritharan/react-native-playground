import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function Display({ input, result }) {
  return (
    <View style={styles.display}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 10,
    backgroundColor: GlobalStyles.colors.background,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  input: {
    color: "white",
    fontSize: 72,
  },
  result: {
    color: GlobalStyles.colors.accent,
    fontSize: 36,
  },
});
