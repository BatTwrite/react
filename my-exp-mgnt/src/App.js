

import './App.css';
import'./Expensess/Expenses.css';
import Expensesit from './Expensess/Expenses';
import NewExpense from './NewExpenses/NewExpenses';
import { useState } from 'react';

const DUMP_EXPENSES = [
  {id:"e1", title: 'Sony TV', amount: 800.49, date: new Date(2021,2,12)},
  {id:"e2", title: 'Car Insurance', amount: 500.49, date: new Date(2022,2,12)},
  {id:"e3", title: 'New Wooden Desk', amount: 400.49, date: new Date(2023,2,12)},
  {id:"e4", title: 'New Bike', amount: 900.49, date: new Date(2024,2,12)}
]


function App() {
  
  const [expenses, setExpenses] = useState(DUMP_EXPENSES);


  const AddExpensesHandler = expense =>{
    console.log("app.js")
    console.log(expense)
   
    setExpenses((PreviousExpenses)=>{
      return [expense, ...PreviousExpenses]
    })

  }
  return (
    <div><h1>Simple learn</h1>
    <h2>Expence Application management </h2>
    <NewExpense onExpensesAdded = {AddExpensesHandler}/>

    <Expensesit items={expenses}/>
    </div>

    
  );
}

export default App;
