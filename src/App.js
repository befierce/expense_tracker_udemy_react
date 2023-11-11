// import logo from './logo.svg';
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import "./App.css";

const DUMMNY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMNY_EXPENSES);

  // const addExpenseHandeler = (expense)=>{
  //   setExpenses([expense, ...expenses])
  // }

  const addExpenseHandeler = (expense) => {
    console.log("current expense",expense)
    setExpenses((prevExpenses) => {
      console.log("prevExpenses",prevExpenses)
      
      return ([expense, ...prevExpenses]);
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandeler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
