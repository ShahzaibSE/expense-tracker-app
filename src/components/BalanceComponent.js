import React, {useContext} from 'react'
import {globalContext} from "./../context/GlobalState"

export default function BalanceComponent() {
    const context = useContext(globalContext)
    const transactions = context.transactions
    let total_balance = 0.0
    //
    let amount = transactions.map(transaction => transaction.amount)
    total_balance = amount.reduce((prevAcc, currentAcc) => (prevAcc += currentAcc))
    return (
        <div className="container">
            <h4>Your Balance</h4>
            <h1 id="balance">${total_balance}</h1>
        </div>
    )
}
