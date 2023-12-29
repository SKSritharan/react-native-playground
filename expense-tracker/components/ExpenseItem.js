import { View, Text, StyleSheet } from "react-native";

const ExpenseItem = ({ expense }) => {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.date}>Date: {expense.date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 6,
    backgroundColor: "#4402b5",
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  amount: {
    color: "#29026b",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  amountContainer: {
    backgroundColor: "white",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    color: "#ccc",
  },
});

export default ExpenseItem;
