import React from 'react';
import './App.css';
import {Grid,Card, makeStyles} from "@material-ui/core"

// Components.
import  HeaderComponent from "./components/HeaderComponent"
import BalanceComponent from "./components/BalanceComponent"
import IncomeExpensesComponent from "./components/IncomeExpensesComponent"
import {TransactionListComponent} from "./components/TransactionListComponent"
import {AddTransactionComponent} from "./components/AddTransactionComponent"

// Context.
import { GlobalProvider } from "./context/GlobalState"

const useStyles = makeStyles({
  root: {
    minWidth: 375,
    paddingLeft: 25,
    paddingRight:25
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} lg={12}>
      <Card className={classes.root}> 
      <GlobalProvider>
        {/* <div className="App"> */}
          <HeaderComponent></HeaderComponent>
          <BalanceComponent></BalanceComponent>
          <IncomeExpensesComponent></IncomeExpensesComponent>
          <TransactionListComponent></TransactionListComponent>
          <AddTransactionComponent></AddTransactionComponent>
        {/* </div> */}
      </GlobalProvider>
      </Card>
      </Grid>
    </Grid>
  );
}

export default App;
