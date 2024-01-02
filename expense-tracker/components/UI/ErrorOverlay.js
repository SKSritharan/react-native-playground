import { View, StyleSheet, Text } from "react-native";

import Button from "./Button";
import { GlobalStyles } from "../../constants/styles";

export default function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>An error occurred</Text>
      <Text style={[styles.message, styles.text]}>{message}</Text>
      <Button onPress={onConfirm} style={styles.closeButton}>
        Okay
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
  },
  closeButton: {
    marginTop: 8,
  },
});
