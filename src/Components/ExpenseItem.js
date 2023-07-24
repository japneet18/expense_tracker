import React from 'react'
import ExpenseDate from './ExpenseDate'
import Card from './Card'
import './styles/ExpenseItem.css'
const ExpenseItem = ({expense}) => {
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date}/>
      <div className='expense-item__description'><h2>{expense.title}</h2></div>
      <div className='expense-item__price'>$ {expense.amount}</div>
     
    </Card>
  );
}

export default ExpenseItem;
