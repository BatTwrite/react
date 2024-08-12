import { useState } from 'react';
import Card from '../UI/card';
import ExpensesFilter from './ExpencesFilter';
import ExpensesList from './ExpensesList';
const Expensesit= (props)=>{
    const [filterdYear,setSelected]=useState('2024')
    const filterChangeHandler = (selectedYear)=>{
     setSelected(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense=>{
        return expense.date.getFullYear().toString() === filterdYear;
    })

return(
    <Card className= "expenses">
        <ExpensesFilter selected = {filterdYear} onChangeHandler ={filterChangeHandler}/>
    <ExpensesList items = {filteredExpenses}/>
    </Card>

    
);

}

export default Expensesit;