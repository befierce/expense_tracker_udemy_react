import { useState } from "react";
import "./ExpenseForm.css"


const ExpenseForm = () => {

  using 3 states is okay but its not reliable 
  const [enteredTitle, setEnteredTitle] = userState('');
  const [enteredAmount, setEnteredAmount] = userState('');
  const [enteredDate, setEnteredDate] = userState('');

  // so another approach would be



  const titleChangeHandler = (event)=>{
    setEnteredTitle;
  }
  const ammountChangeHandler = (event)=>{
    setEnteredAmount;
  }
  const dateChangeHandler = (event)=>{
    setEnteredDate;
  }

  //------------------------------------

  //better approach

  // const [userInput,setUserInput] = useState({
  //   enteredTitle: " ",
  //   enteredAmount:" ",
  //   enteredDate:" "
  // })

  // // const titleChangeHandler = (event)=>{
    
  // //   setUserInput({
  // //     ...userInput,
  // //     enteredTitle:event.target.value
  // //   });
  // // }
  // // const ammountChangeHandler = (event)=>{
  // //   setUserInput({
  // //     ...userInput,
  // //     enteredAmount:event.target.value
  // //   });
  // // }
  // // const dateChangeHandler = (event)=>{
  // //   setUserInput({
  // //     ...userInput,
  // //     enteredDate:event.target.value
  // //   });
  // // }
//better aproach then the above
  //-----------------------------------------
//well all above approches willl work but in this approach we are passing a call back
  // const [userInput,setUserInput] = useState({
  //   enteredTitle: " ",
  //   enteredAmount:" ",
  //   enteredDate:" "
  // })

  // const titleChangeHandler = (event)=>{
    
  //   setUserInput((prevState)=>{
  //     return {
  //       ...prevState,
  //       enteredTitle:event.target.value
  //     }
  //   });
  // }
  // const ammountChangeHandler = (event)=>{
  //   setUserInput((prevState)=>{
  //     return {
  //       ...prevState,
  //       enteredAmount:event.target.value
  //     }
  //   });
  // }
  // const dateChangeHandler = (event)=>{
  //   setUserInput((prevState)=>{
  //     return {
  //       ...prevState,
  //       enteredDate:event.target.value
  //     }
  //   });
  // }
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
