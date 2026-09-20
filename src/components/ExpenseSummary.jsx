function ExpenseSummary({ monthlyBudget, totalExpenses }) {
  return (
    <section>
      <h2>Expense Summary</h2>

      <p>Monthly Budget: ₹{monthlyBudget}</p>

      <p>Total Expenses: ₹{totalExpenses}</p>

      <p>Remaining Budget: ₹{monthlyBudget - totalExpenses}</p>
    </section>
  );
}

export default ExpenseSummary;