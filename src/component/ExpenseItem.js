import React from 'react';
import '../css/expenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

  return(
    <div className="expense-container">
      <ExpenseDate date={props.date}/>
    <h2 className="expense-content">
      <b>{props.title}</b>
    </h2>
    <h2 className="expense-price">${props.amount}</h2>
  </div>
  )
}

export default ExpenseItem
