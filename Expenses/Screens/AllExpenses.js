import React, {useContext} from 'react';
import {Text} from 'react-native';
import {ExpensesContext} from './Store/Expenses-Context';

import ExpensesOutput from '../Components/ExpensesOutput/ExpensesOutput';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx.expense} expensesPeriod="Total" />;
}

export default AllExpenses;
