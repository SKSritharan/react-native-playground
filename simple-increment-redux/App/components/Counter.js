import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../state/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementValue = () => {
    dispatch(increment());
  };

  const decrementValue = () => {
    dispatch(decrement());
  };

  const incrementByValue = (value) => {
    dispatch(incrementByAmount(value));
  };

  const decrementByValue = (value) => {
    dispatch(decrementByAmount(value));
  };

  const resetValue = () => {
    dispatch(reset());
  };

  return (
    <View style={styles.counter}>
      <Text style={styles.text}>Counter: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="-" onPress={decrementValue} />
        <Button title="+" onPress={incrementValue} />
        <Button title="+ 50" onPress={() => incrementByValue(50)} />
        <Button title="- 50" onPress={() => decrementByValue(50)} />
        <Button title="reset" onPress={resetValue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
