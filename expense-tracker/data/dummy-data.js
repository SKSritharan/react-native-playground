import Expense from "../models/expense";

export const DUMMY_EXPENSES = [
  new Expense("1", "Groceries", 50.0, new Date("2023-01-01")),
  new Expense("2", "Dinner", 30.0, new Date("2023-01-02")),
  new Expense("3", "Gas", 20.0, new Date("2023-01-03")),
  new Expense("4", "Entertainment", 40.0, new Date()),
];
