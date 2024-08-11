import ExpenseForm from './Expensesform';
import './NewExpenses.css'

const NewExpense = (props) => {

const saveExpensesDataHandler = (enteredExpensesData)=>{

    console.log("new expenses");

    const expenseData = {
        ...enteredExpensesData,
        id: Math.random().toString()
    }
    props.onExpensesAdded(expenseData);
} 


    return (
        <div className='new-expense'>
            <ExpenseForm  onSaveExpenseData = {saveExpensesDataHandler}/>
        </div>
    )
}

export default NewExpense;