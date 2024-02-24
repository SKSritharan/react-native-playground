import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getRandomQuote } from "../services/apiService";
import Button from "../components/Button";

export default function HomeScreen() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    onPressHandler();
  }, []);

  async function onPressHandler() {
    try {
      const data = await getRandomQuote();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>"{quote.content}"</Text>
        <Text style={styles.text}>- {quote.author}</Text>
      </View>
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
    justifyContent: "space-around",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {},
});
