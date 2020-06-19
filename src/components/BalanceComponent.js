import React, {useContext} from 'react'
import {globalContext} from "./../context/GlobalState"

export default function BalanceComponent() {
    const context = useContext(globalContext)
    let transactions = []
    let total_balance = 0.0
    let amount = 0
    transactions = transactions ? context.transactions : null
    //
    try {
        amount = transactions.map(transaction => transaction.amount)
        if (transactions.length>0) {
            total_balance = amount.reduce((prevAcc, currentAcc) => (prevAcc += currentAcc))
        }
    }
    catch{
        throw Error("Not enough transactions.")
    }
    return (
        <div className="container">
            <h4>Your Balance</h4>
            <h1 id="balance">${total_balance}</h1>
        </div>
    )
}
