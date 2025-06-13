import { Button } from "../components/Button"
import { Message } from "../components/Message"

export const CounterPage = () =>{
    return (<div>
        <Message/>
        <div style={{display:"flex", alignItems: "center"}}>
        <Button value = "+" bgColor = "red"/>
        <Button value = "-" bgColor = "green"/>
        </div>
    </div>)
}