import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </>
    // <>
    //   <ExpenseItem
    //     title={props.items[0].title}
    //     amount={props.items[0].amount}
    //     date={props.items[0].date}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.items[0].title}
    //     amount={props.items[0].amount}
    //     date={props.items[0].date}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.items[0].title}
    //     amount={props.items[0].amount}
    //     date={props.items[0].date}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.items[0].title}
    //     amount={props.items[0].amount}
    //     date={props.items[0].date}
    //   ></ExpenseItem>
    // </>
  );
}
export default Expenses;
