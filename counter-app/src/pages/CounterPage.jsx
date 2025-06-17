import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () =>{

    let counter = 0
    const plus = () =>{
        counter ++
        console.log(counter)
    }

    const minus = () =>{
        counter --
        console.log(counter)
    }
        return (<div>
        <Message msg = "Counter App" msgColor = "blue"/> 
        <Message msg = "Count is " msgColor= "orange" value = {counter}/>
        <div style={{display:"flex", alignItems: "center"}}>
        <Button value = "+" bgColor = "red" fn = {plus} />  
        <Button value = "-" bgColor = "green" fn ={minus }/>
        </div>
    </div>)
}