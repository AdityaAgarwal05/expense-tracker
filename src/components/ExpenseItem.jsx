function ExpenseItem({ expense, onDeleteExpense, onEditExpense }) {
  return (
    <div className="expense-item">
    <div className="expense-details">  
      <h3>Expense: {expense.name}</h3>
      <p>Amount: ₹{expense.amount}</p>
    </div>

    <div className="expense-actions">
        <button
          className="edit-button"
          onClick={() => onEditExpense(expense)}
        >
          Edit
        </button>

       <button className="delete-button" 
       onClick={() => onDeleteExpense(expense.id)}
       >
        Delete
      </button>

     </div>  
      <hr />
    </div>
  );
}

export default ExpenseItem;