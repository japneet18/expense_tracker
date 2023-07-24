import React from 'react'
import ChartBar from './ChartBar'
import '../styles/Chart.css'
function Chart({expenses}){
    const dataPoints=[
        {label:'Jan', value:0},
        {label:'Feb', value:0},
        {label:'Mar', value:0},
        {label:'Apr', value:0},
        {label:'May', value:0},
        {label:'Jun', value:0},
        {label:'Jul', value:0},
        {label:'Aug', value:0},
        {label:'Sep', value:0},
        {label:'Oct', value:0},
        {label:'Nov', value:0},
        {label:'Dec', value:0}
    ]
    let maxValue=expenses[0].amount
for (const expense of expenses){
    const expenseMonth= expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
if(expense.amount>maxValue)
{maxValue=expense.amount}

}

return <div className='chart'>
    
   {dataPoints.map((data)=> <ChartBar key={data.label} value={data.value} maxValue={maxValue} label={data.label}/>)}
</div>
}
export default Chart