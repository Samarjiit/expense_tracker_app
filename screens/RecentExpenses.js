import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { getDateMinusDays } from "../components/ExpensesOutput/util/date"
import { ExpensesContext } from "../store/expenses-context"
import { useContext } from "react"
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7daysAgo = getDateMinusDays(today, 7)

    return expense.date >= date7daysAgo && expense.date <= today
  })
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="last 7 days ago"
      fallbackText="No expenses registered for the last 10 days"
    />
  )
}

export default RecentExpenses
