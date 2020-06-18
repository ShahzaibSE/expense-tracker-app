import React, {useContext} from 'react'
import {globalContext} from "../context/GlobalState"

export const TransactionComponent = ({transaction}) => {
    let sign = transaction.amount > 0 ? "+" : "-"
    const {deleteTransaction} = useContext(globalContext)
    return (
        <li className={transaction.amount < 0 ? 'minus': 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}
                           </span><button className="delete-btn" onClick={()=>deleteTransaction(transaction.id)}>
                               x</button>
      </li>
    )
}
