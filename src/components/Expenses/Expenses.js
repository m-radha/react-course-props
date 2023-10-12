import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');
  const [Infotext,setInfoText] = useState('2019,2021 & 2022');

  

  const HandleFilterHandler = selectedYear => {
    setFilteredYear(selectedYear);
    if(selectedYear === '2019'){
      setInfoText('2020,2021 & 2022')
    }
    else if(selectedYear === '2020'){
      setInfoText('2019,2021 & 2022')
    }
    else if(selectedYear === '2021'){
      setInfoText('2019,2020 & 2022')
    }
    else{
      setInfoText('2019,2020 & 2021')
    }
  }

  const FilteredExpenses = props.items.filter ((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  
  
  

  return (
    <Card className="expenses">
      <ExpenseFilter onSelectedYr={HandleFilterHandler}/>
      <p style={{color:'white'}}>This yrs {Infotext} text was hidden.</p>
      <ExpenseChart expenses={FilteredExpenses}/>
      <ExpensesList expenseList={FilteredExpenses}/>
      {/* {FilteredExpenses.length === 0 ? (<p>expense not found!!!</p>):(
        FilteredExpenses.map((expense)=>(
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
          ))
      )} */}
    </Card>
  );
}

export default Expenses;
