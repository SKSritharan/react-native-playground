import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Button from "../components/Button";
import Display from "../components/Display";

export default function CalculatorApp() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <View style={styles.container}>
      <Display input={input} result={result} />
      <View style={styles.buttons}>
        <View style={styles.row}>
          <Button
            value="AC"
            handlePress={handlePress}
            buttonType={"operational"}
          />
          <Button
            value="%"
            handlePress={handlePress}
            buttonType={"operational"}
          />
          <Button
            value="DEL"
            handlePress={handlePress}
            buttonType={"operational"}
          />
          <Button value="/" handlePress={handlePress} buttonType={"operator"} />
        </View>
        <View style={styles.row}>
          <Button value="7" handlePress={handlePress} />
          <Button value="8" handlePress={handlePress} />
          <Button value="9" handlePress={handlePress} />
          <Button value="*" handlePress={handlePress} buttonType={"operator"} />
        </View>
        <View style={styles.row}>
          <Button value="4" handlePress={handlePress} />
          <Button value="5" handlePress={handlePress} />
          <Button value="6" handlePress={handlePress} />
          <Button value="-" handlePress={handlePress} buttonType={"operator"} />
        </View>
        <View style={styles.row}>
          <Button value="1" handlePress={handlePress} />
          <Button value="2" handlePress={handlePress} />
          <Button value="3" handlePress={handlePress} />
          <Button value="+" handlePress={handlePress} buttonType={"operator"} />
        </View>
        <View style={styles.row}>
          <Button value="0" handlePress={handlePress} style={{ flex: 2 }} />
          <Button value="." handlePress={handlePress} buttonType={"number"} />
          <Button value="=" handlePress={handlePress} buttonType={"operator"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
