import { useState } from "react"
import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () =>{
let [counter, setCounter]  = useState(0) //creating the state
    //let counter = 0
    const plus = () =>{
        //counter ++
        setCounter(counter = counter + 1) // updating the state
        console.log(counter)
    }

    const minus = () =>{
        //counter --
        setCounter(counter = counter - 1) //updating the state
        console.log(counter)
    }

    const reset = () =>{
        setCounter(0)
    }
        return (<div>
        <Message msg = "Counter App" msgColor = "blue"/> 
        <Message msg = "Count is " msgColor= "orange" value = {counter}/>
        <div style={{display:"flex", alignItems: "center"}}>
        <Button value = "+" bgColor = "red" fn = {plus} />  
        <Button value = "-" bgColor = "green" fn ={minus }/>
        <Button value = "Reset" bgColor= "gray" fn ={reset} />
        </div>
    </div>)
}