import React, {useContext} from 'react'
import {globalState, globalContext} from "../context/GlobalState"
// Component.
import {TransactionComponent} from "./TransactionComponent"

export const TransactionListComponent = () => {
  const context = useContext(globalContext)
  let transactions = context.transactions
    return (
       <div> 
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction=>(<TransactionComponent transaction={transaction}/>))}
        </ul>
      </div>
    )
}
