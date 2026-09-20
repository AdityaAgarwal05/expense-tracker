function BudgetStatus({ monthlyBudget, totalExpenses }) {
  return (
    <section>
      <h2>Budget Status</h2>

      <p>Budget: ₹{monthlyBudget}</p>

      <p>Expenses: ₹{totalExpenses}</p>

      <p>Remaining: ₹{monthlyBudget - totalExpenses}</p>
    </section>
  );
}

export default BudgetStatus;