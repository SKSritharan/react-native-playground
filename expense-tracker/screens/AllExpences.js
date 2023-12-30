import { EXPENSES } from "../data/dummy-data";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function AllExpences() {
  return <ExpensesOutput expenses={EXPENSES} expensesPeriod="Total" />;
}
