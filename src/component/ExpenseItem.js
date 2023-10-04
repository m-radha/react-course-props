import React from 'react';
import '../css/expenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div className='expense-container'>
      <p><b>{props.date.toISOString()}</b></p>
      <h2 className='expense-content'><b>{props.title}</b></h2>
      <h2 className='expense-price'>${props.amount}</h2>
    </div>
  )
}

export default ExpenseItem
