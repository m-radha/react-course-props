import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing,setisEditing] = useState(false);

  const ExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
  }

  const StartEditing = () => {
    setisEditing(true);
  }

  const StopEditing = () => {
    setisEditing(false);
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={StartEditing}>Add new expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={ExpenseDataHandler} onCancel={StopEditing}/>}
    </div>
  );
};

export default NewExpense;
