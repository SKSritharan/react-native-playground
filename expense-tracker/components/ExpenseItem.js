import { View, Text, StyleSheet } from "react-native";

export default function ExpenseItem() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Title</Text>
        <Text>Date</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text>Amount</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
});
