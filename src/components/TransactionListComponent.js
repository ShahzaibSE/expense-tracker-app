import React, {useContext, useState} from 'react'
import {globalContext} from "../context/GlobalState"
import {Grid, List, makeStyles} from "@material-ui/core"
// Component.
import {TransactionComponent} from "./TransactionComponent"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'relative',
    overflow: 'scroll',
    maxHeight: 250,
  }
}));

export const TransactionListComponent = () => {
  const context = useContext(globalContext)
  const classes = useStyles()
  let transactions = context.transactions
  // Material list generator.
  const [dense, setDense] = useState(true)
  //
    return (
       <Grid container style={{display:"block"}}>
        <Grid item xs={12} lg={12}> 
         <h3>History</h3>
         <List dense={dense} className={`${classes.root}`}>
          {transactions.map(transaction=>(<TransactionComponent transaction={transaction}/>))}
         </List>
        {/* <h3>History</h3>
        <ul className="list">
          {transactions.map(transaction=>(<TransactionComponent transaction={transaction}/>))}
        </ul> */}
        </Grid>
      </Grid>
    )
}
