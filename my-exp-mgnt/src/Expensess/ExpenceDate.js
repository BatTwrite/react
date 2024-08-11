import "./ExpenceDate.css";
import Card from "../UI/card";
function ExpenceDate(props){
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const month1 = props.date.getMonth()-1

    const month= monthNames[month1].toLocaleString('ens-us',{month:'long'});
    const day = props.date.getDay().toLocaleString('ens-us',{date:'2-digit'});
    const year = props.date.getFullYear();
    return (
        <div class="expense-date">
         <div class="expense-date__month">{month}</div>
         <div class="expense-date__year">{year}</div>
         <div className='expense-date__day'>{day}</div>           
        </div>
    )
}
export default ExpenceDate;