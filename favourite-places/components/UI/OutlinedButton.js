import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../../constants/colors";

export default function OutlinedButton({ onPress, children, icon }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Ionicons
        name={icon}
        size={18}
        color={Colors.primary500}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
  pressed: {
    opacity: 0.75,
  },
});
