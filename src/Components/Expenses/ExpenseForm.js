import React,{ useState } from 'react'
import '../styles/ExpenseForm.css'
function ExpenseForm({onAddingExpense,onCancel}){
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')
    const titleChangeHandler=(event)=>{
        setTitle(event.target.value)
    }
    const amountChangeHandler=(event)=>{
        setAmount(event.target.value)
    }
    const datePickerHandler=(event)=>{
        setDate(event.target.value)
    }
    const saveExpenseDataHandler=(event)=>{
       
        event.preventDefault()
        const FormData={
            title:title,
            amount:+amount,
            date: new Date(date),
            id:`e${Math.random()}`
        }
        onAddingExpense(FormData)

setTitle('')
setAmount('')
setDate('')
    }
return <form onSubmit={saveExpenseDataHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={title}/> 
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={amount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" step="2024-01-01" onChange={datePickerHandler} value={date}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button onClick={()=>onCancel(false)}>Cancel</button>
            <button type="submit">Add expense</button>
        </div>

    </form>
}
export default ExpenseForm