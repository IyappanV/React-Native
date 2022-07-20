import React, {useContext} from 'react';
import {Text} from 'react-native';

import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from './Store/Expenses-Context';
import {getDateMinusDays} from './Util/date';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expense.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.Date > date7DaysAgo;
  });
  return (
    <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />
  );
}

export default RecentExpenses;
