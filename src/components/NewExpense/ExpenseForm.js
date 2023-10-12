import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [EnteredTitle, setEnteredTitle] = useState("");
  const [EnteredAmount, setEnteredAmount] = useState("");
  const [EnteredDate, setEnteredDate] = useState("");

  const HanadleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const HanadleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const HanadleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };


  // const HandleInputChange = (identifier,value) => {
  //      if(identifier === 'title'){
  //       setEnteredTitle(value);
  //      }else if(identifier === 'amount'){
  //       setEnteredAmount(value);
  //      }else{
  //       setEnteredDate(value);
  //      }
  // }

  const HandleSubmit = (event) =>{
    event.preventDefault();

    const expenseData = {
      title:EnteredTitle,
      amount:EnteredAmount,
      date:new Date(EnteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('')
  }


  return (
    <form onSubmit={HandleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={EnteredTitle} onChange={HanadleTitleChange}/>
          {/* <input type="text" onChange={(event)=>HandleInputChange('title',event.target.value)}/>  */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01"  value={EnteredAmount} onChange={HanadleAmountChange}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={HanadleDateChange}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
