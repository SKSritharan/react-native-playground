import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function Button({ value, style, handlePress, buttonType }) {
  const getBackgroundColor = () => {
    switch (buttonType) {
      case "number":
        return GlobalStyles.colors.primary;
      case "operator":
        return GlobalStyles.colors.secondary;
      case "operational":
        return GlobalStyles.colors.accent;
      case "flexed":
        return GlobalStyles.colors.accent;
      default:
        return GlobalStyles.colors.primary;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        {
          backgroundColor: getBackgroundColor(),
        },
      ]}
      onPress={() => handlePress(value)}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: "23%",
    minHeight: 60,
    margin: 2,
    borderRadius: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 36,
  },
  operatorButton: {
    backgroundColor: GlobalStyles.colors.secondary,
  },
  flexedButton: {
    backgroundColor: GlobalStyles.colors.primary,
  },
  operationalButton: {
    backgroundColor: GlobalStyles.colors.accent,
  },
  numberButton: {
    backgroundColor: GlobalStyles.colors.primary,
  },
});
