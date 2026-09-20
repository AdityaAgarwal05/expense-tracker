import { useState, useEffect } from "react";

function ExpenseForm({
  onAddExpense,
  onUpdateExpense,
  editingExpense
}) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setExpenseName(editingExpense.name);
      setAmount(editingExpense.amount);
    }
  }, [editingExpense]);

  function handleExpenseNameChange(event) {
    setExpenseName(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (expenseName.trim() === "") {
      setError("Please enter an expense name.");
      return;
    }

    if (Number(amount) <= 0) {
      setError("Please enter an amount greater than 0.");
      return;
    }

    setError("");

    if (editingExpense) {
      const updatedExpense = {
        id: editingExpense.id,
        name: expenseName.trim(),
        amount: amount
      };

      onUpdateExpense(updatedExpense);
    } else {
      const newExpense = {
        id: Date.now(),
        name: expenseName.trim(),
        amount: amount
      };

      onAddExpense(newExpense);
    }

    setExpenseName("");
    setAmount("");
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="form-fields">
        <input
          className="expense-input"
          type="text"
          value={expenseName}
          placeholder="Enter expense name"
          onChange={handleExpenseNameChange}
        />

        <input
          className="expense-input"
          type="number"
          value={amount}
          placeholder="Enter amount"
          onChange={handleAmountChange}
        />

        <button className="add-button" type="submit">
          {editingExpense ? "Update Expense" : "Add Expense"}
        </button>
      </div>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}
    </form>
  );
}

export default ExpenseForm;