import { EXPENSES } from "../data/dummy-data";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses({ navigation }) {
  return <ExpensesOutput expenses={EXPENSES} expensesPeriod="Last 7 Days" />;
}
