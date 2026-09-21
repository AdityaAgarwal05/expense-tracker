import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from "./components/Header";
import ExpenseSummary from "./components/ExpenseSummary";
import WelcomeMessage from "./components/WelcomeMessage";
import BudgetStatus from "./components/BudgetStatus";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  const totalExpenses = expenses.reduce(
  (total, expense) => total + Number(expense.amount),
  0
  );

  function handleAddExpense(newExpense) {
    setExpenses([
      ...expenses,
      newExpense
    ]);
  }

  function handleDeleteExpense(expenseId) {
  setExpenses(
    expenses.filter((expense) => expense.id !== expenseId)
  );
  }

 function handleEditExpense(expense) {
  setEditingExpense(expense);
 } 


 function handleUpdateExpense(updatedExpense) {
  setExpenses(
    expenses.map((expense) =>
      expense.id === updatedExpense.id
        ? updatedExpense
        : expense
    )
  );
   setEditingExpense(null);
  }

return (
  <main className="app">
    <div className="expense-tracker">
      <h1>My Personal Expense Tracker</h1>

      <ExpenseForm
       onAddExpense={handleAddExpense}
       onUpdateExpense={handleUpdateExpense}
       editingExpense={editingExpense}
      />

      {expenses.length === 0 ? (
        <p className="empty-message">
          No expenses added yet. Add your first expense above, Thanks.
        </p>
      ) : (
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
          onEditExpense={handleEditExpense}
        />
      )}

      <h2 className="total-expenses">
        Total Expenses: ₹{totalExpenses}
      </h2>
    </div>
  </main>
);
}

export default App;