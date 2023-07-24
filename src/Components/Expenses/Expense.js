import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import ExpensesFilter from "./ExpenseFilter";
import "../styles/Expense.css";
import Chart from "../Chart/Chart";

const Expense = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  const filterChangesHandler = (event) => {
    setSelectedYear(event.target.value);
  };
  const filteredExpenseData = expenses.filter((expense) => {
    const Expenseyear = `${expense.date.getFullYear()}`;
    return Expenseyear === selectedYear;
  });

  return (
    <div>
      {filteredExpenseData.length > 0 && (
        <Chart expenses={filteredExpenseData} />
      )}
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          filterChangesHandler={filterChangesHandler}
        ></ExpensesFilter>
        <ul className="expenses-list">
          {filteredExpenseData.length > 0 ? (
            filteredExpenseData.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))
          ) : (
            <h2 className="expenses-list__fallback">No expenses found</h2>
          )}
        </ul>
      </Card>
    </div>
  );
};

export default Expense;
