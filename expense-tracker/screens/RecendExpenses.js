import { View, StyleSheet, FlatList } from "react-native";

import { EXPENSES } from "../data/dummy-data";
import ExpenseItem from "../components/ExpenseItem";
import TotalCard from "../components/TotalCard";

export default function RecendExpenses() {
  const recentExpenses = EXPENSES.filter((expense) => {
    const currentDate = new Date();
    const expenseDate = new Date(expense.date);
    const timeDifference = currentDate - expenseDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference <= 7;
  });

  const totalAmount = recentExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <View style={styles.rootContainer}>
      <TotalCard title={"Total Recent Expenses"} amount={totalAmount} />
      <FlatList
        data={recentExpenses}
        renderItem={(itemData) => <ExpenseItem expense={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#29026b",
  },
});
