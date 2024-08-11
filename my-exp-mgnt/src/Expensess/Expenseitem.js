import Card from '../UI/card';
import ExpenceDate from './ExpenceDate';
import './Expenseitem.css';

function Expense(props){
    
    return (
        <Card className="expense-item">
            <ExpenceDate date={props.date}></ExpenceDate>
            <div class="expense-item_description">
              <h2>{props.title}</h2>
              <div class= "expense-item_price">{props.amount}</div>
            </div>
        </Card>
    )
}
export default Expense;