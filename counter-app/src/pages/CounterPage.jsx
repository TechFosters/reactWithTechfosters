import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () =>{
    let counts = 0;
    return (<div>
        <Message msg = "Counter App" msgColor = "blue"/>
        <Message msg = "Count is " msgColor= "orange"/>
        <div style={{display:"flex", alignItems: "center"}}>
        <Button value = "+" bgColor = "red"/>
        <Button value = "-" bgColor = "green"/>
        </div>
    </div>)
}