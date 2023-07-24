import "../styles/ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {date.toLocaleString("en-us", { month: "long" })}
      </div>
      <div className="expense-date__year">{date.getFullYear()}</div>
      <div className="expense-date__day">
        {date.toLocaleString("en-us", { day: "2-digit" })}
      </div>
    </div>
  );
};

export default ExpenseDate;
