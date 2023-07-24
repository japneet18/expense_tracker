import React,{ useState } from 'react'
import ExpenseForm from './ExpenseForm'
import '../styles/NewExpense.css'
import '../styles/ExpenseForm.css'
function NewExpenses ({onAddingExpense}){
    const [displayForm,setdisplayForm]= useState(false)
   
   const formDisplayHandler=(value)=>{
    console.log(value)
    setdisplayForm(value)
    }
return <div className='new-expense'>
   {displayForm ?<ExpenseForm onAddingExpense={onAddingExpense} onCancel={formDisplayHandler}/>:
            <button onClick={()=>formDisplayHandler(true)}>Add expense</button>
        }
</div>
}
export default NewExpenses