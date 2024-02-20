import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Square({ value, onPress }) {
  return (
    <TouchableOpacity style={styles.square} onPress={onPress}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
