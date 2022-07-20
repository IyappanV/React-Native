import * as React from 'react';
import {createContext, useReducer} from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A Pair of Shoes',
    amount: 45.55,
    date: new Date('2022-01-01'),
  },
  {
    id: 'e2',
    description: 'A Pair of Trousers',
    amount: 85.55,
    date: new Date('2022-02-02'),
  },
  {
    id: 'e3',
    description: 'Some Bananas',
    amount: 5.99,
    date: new Date('2022-03-03'),
  },
  {
    id: 'e4',
    description: 'A Book',
    amount: 15.0,
    date: new Date('2022-04-04'),
  },
  {
    id: 'e5',
    description: 'Another Book',
    amount: 15.0,
    date: new Date('2022-05-05'),
  },
  {
    id: 'e6',
    description: 'A Pair of Shoes',
    amount: 45.55,
    date: new Date('2022-01-01'),
  },
  {
    id: 'e7',
    description: 'A Pair of Trousers',
    amount: 85.55,
    date: new Date('2022-02-02'),
  },
  {
    id: 'e8',
    description: 'Some Bananas',
    amount: 5.99,
    date: new Date('2022-03-03'),
  },
  {
    id: 'e9',
    description: 'A Book',
    amount: 15.0,
    date: new Date('2022-04-04'),
  },
  {
    id: 'e10',
    description: 'Another Book',
    amount: 15.0,
    date: new Date('2022-05-05'),
  },
];

export const ExpensesContext = createContext({
  expense: [],
  addExpense: ({description, amount, date}) => {},
  deleteExpense: id => {},
  updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{...action.payload, id: id}, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id,
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedIndex = {...updatableExpense, ...action.payload.data};
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedIndex;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({children}) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({type: 'ADD', payload: expenseData});
  }

  function deleteExpense(id) {
    dispatch({type: 'DELETE', payload: id});
  }

  function updateExpense(id, expenseData) {
    dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}></ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
