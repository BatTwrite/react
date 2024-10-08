const ExpensesFilter = (props)=>{

    const dropDownChangeHandler = (event)=>{
        props.onChangeHandler(event.target.value)
    }
     return (<div>
            <label>Expenses Filter</label>
            <select value={props.selected} onChange={dropDownChangeHandler}>
                <option value = "2021">2021</option>
                <option value = "2022">2022</option>
                <option value = "2023">2023</option>
                <option value = "2024">2024</option>
            </select>
     </div>)
}
export default ExpensesFilter