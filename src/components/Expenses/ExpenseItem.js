import React from 'react';

import Card from '../Card/Card.js';
import './Expenses.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
