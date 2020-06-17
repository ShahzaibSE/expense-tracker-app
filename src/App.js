import React from 'react';
import './App.css';

// Components.
import  HeaderComponent from "./components/HeaderComponent"
import BalanceComponent from "./components/BalanceComponent"
import IncomeExpensesComponent from "./components/IncomeExpensesComponent"
import {TransactionComponent} from "./components/TransactionComponent"
import {AddTransactionComponent} from "./components/AddTransactionComponent"

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <BalanceComponent></BalanceComponent>
      <IncomeExpensesComponent></IncomeExpensesComponent>
      <TransactionComponent></TransactionComponent>
      <AddTransactionComponent></AddTransactionComponent>
    </div>
  );
}

export default App;
