import Expense from "./Expenseitem"

const ExpensesList = (props)=>{
   if(props.items.length === 0){
    return <h2>No Data Found</h2>
   }
   return (
    <ul>
        {
            props.items.map((expenses)=>{
                return <Expense 
                key={expenses.id}
                title={expenses.title}
                amount={expenses.amount} 
                date={expenses.date}></Expense>
            })
        }
    </ul>
   )
}

export default ExpensesList;