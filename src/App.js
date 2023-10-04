import ExpenseItem from "./component/ExpenseItem";

function App() {

  const expense_data = [
    {id:1,title:'car insurance',amount:25.50,date:new Date(25,5,2008)},
    {id:2,title:'tissue paper',amount:50.50,date:new Date(25,5,2008)},
    {id:3,title:'bus insurance',amount:70.50,date:new Date(25,5,2008)},
    {id:4,title:'wooden bowl',amount:80.50,date:new Date(25,5,2008)}
  ]
  return (
    <div>
      <h1>Let's get started!!!</h1>
      <ExpenseItem title={expense_data[0].title} amount={expense_data[0].amount} date={expense_data[0].date}/>
      <ExpenseItem title={expense_data[1].title} amount={expense_data[1].amount} date={expense_data[1].date}/>
      <ExpenseItem title={expense_data[2].title} amount={expense_data[2].amount} date={expense_data[2].date}/>
      <ExpenseItem title={expense_data[3].title} amount={expense_data[3].amount} date={expense_data[3].date}/>
    </div>
  );
}

export default App;
