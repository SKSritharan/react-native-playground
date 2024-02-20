import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Board from "../components/Board";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
