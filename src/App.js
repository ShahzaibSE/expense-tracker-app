import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core"

// Components.
import  HeaderComponent from "./components/HeaderComponent"
import BalanceComponent from "./components/BalanceComponent"
import IncomeExpensesComponent from "./components/IncomeExpensesComponent"
import {TransactionListComponent} from "./components/TransactionListComponent"
import {AddTransactionComponent} from "./components/AddTransactionComponent"

// Context.
import { GlobalProvider } from "./context/GlobalState"

function App() {
  return (
    <Grid container>
      <Grid xs="12">
      <GlobalProvider>
        {/* <div className="App"> */}
          <HeaderComponent></HeaderComponent>
          <BalanceComponent></BalanceComponent>
          <IncomeExpensesComponent></IncomeExpensesComponent>
          <TransactionListComponent></TransactionListComponent>
          <AddTransactionComponent></AddTransactionComponent>
        {/* </div> */}
      </GlobalProvider>
      </Grid>
    </Grid>
  );
}

export default App;
