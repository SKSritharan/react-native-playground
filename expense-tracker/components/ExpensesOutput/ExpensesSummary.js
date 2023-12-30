import { Text, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

export default function ExpensesSummary({ expensesPeriod, expenses }) {
  const totalAmount = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{expensesPeriod}</Text>
      <Text style={styles.sum}>${totalAmount.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  period: {
    color: GlobalStyles.colors.primary400,
    padding: 8,
    fontSize: 12,
  },
  sum: {
    color: GlobalStyles.colors.primary400,
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
});
