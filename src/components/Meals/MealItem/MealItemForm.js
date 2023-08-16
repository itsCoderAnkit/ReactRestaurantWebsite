import { useState } from "react"
import Input from "../../UI/Input"
import classes from './MealItemForm.module.css'

const MealItemForm = () =>{

    const [currentAmount,setCurrentAmount] = useState(1)

    const addProduct = (e) =>{
        e.preventDefault()
        // setCurrentAmount(currentAmount + 1)
        console.log(currentAmount)
    }

    const newInput = (e) =>{
        console.log(e.target.value)
        setCurrentAmount(e.target.value)
    }

return (
    <form className={classes.form} onSubmit = {addProduct}>
        <Input label='Amount' input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1',
            value:currentAmount
        }} onChange={newInput}></Input>
        <button > +Add</button>
    </form>
)
}

export default MealItemForm