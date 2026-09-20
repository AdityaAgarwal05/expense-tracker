import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <div>
      <h2>Expenses</h2>

      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleteExpense={onDeleteExpense}
          onEditExpense={onEditExpense}
        />
      ))}
    </div>
  );
}

export default ExpenseList;