import { useState } from 'react';
import Card from '../UI/card';
import ExpensesFilter from './ExpencesFilter';
import Expense from './Expenseitem';
const Expensesit= (props)=>{
    const [selected,setSelected]=useState('2024')
return(
    <Card className= "expenses">
        <ExpensesFilter selected = {selected}/>
    {props.items.map((expenses)=>{
        return <Expense 
        key={expenses.id}
        title={expenses.title}
        amount={expenses.amount} 
        date={expenses.date}></Expense>
    })}
    </Card>

    
);

}

export default Expensesit;