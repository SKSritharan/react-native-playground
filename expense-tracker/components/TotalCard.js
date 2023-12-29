import { View, Text, StyleSheet } from "react-native";

export default function TotalCard({ title, amount }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>${amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#29026b",
  },
  amount: {
    color: "#29026b",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
