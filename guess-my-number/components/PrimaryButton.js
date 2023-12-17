import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <View style={styles.primaryButton}>
      <Text style={styles.primaryButtonText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#72063c",
  },
  primaryButtonText: {
    color: "white",
    textAlign: "center",
  },
});
