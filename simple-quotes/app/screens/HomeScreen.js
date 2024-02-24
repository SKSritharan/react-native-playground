import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";

export default function HomeScreen() {
  const [quote, setQuote] = useState("Hello, World!");

  function onPressHandler() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data.content));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>"{quote}"</Text>
      <Button onPress={onPressHandler} style={styles.button}>
        Get Quote
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {},
});
