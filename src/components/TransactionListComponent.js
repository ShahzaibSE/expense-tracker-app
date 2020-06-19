import React, {useContext} from 'react'
import {globalState, globalContext} from "../context/GlobalState"
import {Grid} from "@material-ui/core"
// Component.
import {TransactionComponent} from "./TransactionComponent"

export const TransactionListComponent = () => {
  const context = useContext(globalContext)
  let transactions = context.transactions
    return (
       <Grid container style={{display:"block"}}>
        <Grid item xs={12} lg={12}> 
        <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction=>(<TransactionComponent transaction={transaction}/>))}
        </ul>
        </Grid>
      </Grid>
    )
}
