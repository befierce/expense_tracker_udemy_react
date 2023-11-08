import { useState } from "react";
import "./ExpenseForm.css"


const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = userState('');
  const [enteredAmount, setEnteredAmount] = userState('');
  const [enteredDate, setEnteredDate] = userState('');

  const titleChangeHandler = (event)=>{
    setEnteredTitle;
  }
  const ammountChangeHandler = (event)=>{
    setEnteredAmount;
  }
  const dateChangeHandler = (event)=>{
    setEnteredDate;
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={ammountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
