import { View, Text, StyleSheet, FlatList } from "react-native";

import { EXPENSES } from "../data/dummy-data";
import ExpenseItem from "../components/ExpenseItem";
import TotalCard from "../components/TotalCard";

export default function AllExpences() {
  const totalAmount = EXPENSES.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  return (
    <View style={styles.rootContainer}>
      <TotalCard title={"Total"} amount={totalAmount} />
      <FlatList
        data={EXPENSES}
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
