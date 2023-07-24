import React,{ useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './ExpenseFilter'
import './styles/Expense.css'

const Expense= ({expenses})=> {
  const [selectedYear,setSelectedYear]=useState('2019');
  const filterChangesHandler=(event)=>{
    setSelectedYear(event.target.value)
  }
    
  return (
    <div>
      <ExpensesFilter selected={selectedYear} filterChangesHandler={filterChangesHandler}></ExpensesFilter>
    <Card className='expenses'>
    {expenses.map((expense)=><ExpenseItem expense={expense}/>)}
  </Card>
  </div>
  );
}

export default Expense;