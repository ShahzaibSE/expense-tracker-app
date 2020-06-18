import React, {useContext} from 'react'
import {globalContext} from "./../context/GlobalState"

export default function IncomeExpensesComponent() {
  const { transactions } = useContext(globalContext)
  let amounts = transactions.map(transaction => transaction.amount)
  //
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
            <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${expense}</p>
        </div>
      </div>
    )
}
