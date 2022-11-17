import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../Card/Card';
import './Expenses.css';

// TODO: refactor to use iteration/any kind related
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('All');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  let filteredExpenses = []
  if (filteredYear !== 'All') {
    filteredExpenses = props.items.filter((expense) => (
      expense.date.getFullYear().toString() === filteredYear));
  } else {
    filteredExpenses = props.items
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {(filteredExpenses.length === 0) ?
        <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        : filteredExpenses.map((elem) => (
          <ExpenseItem
            key={elem.id}
            title={elem.title}
            amount={elem.amount}
            date={elem.date}
          />))}
    </Card>
  );
}

export default Expenses;
