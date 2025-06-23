import { useState } from "react";
import Button from "../components/Button";

const Home = () =>{
    let [bgColor, setBgColor] = useState("")
    const colors = ['Red', 'Green', 'Blue', 'Cyan', 'Magenta', 'Yellow', 'Black', 'White']
   
    return(
        <div style={{backgroundColor: bgColor, color: bgColor==="Black"? "white" : "black", height: '100vh', display:"flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
        <h1>Click to Change Color</h1>
        <div style={{position: 'fixed',left:'50%', transform: "translateX(-50%)", bottom: 0, backgroundColor: 'white', display: 'flex', justifyContent: 'center', margin: '5px', border: '2px solid gray', borderRadius: '10px'}}>
        {colors.map((col, index)=>(<Button key = {index} value = {col} fn = {setBgColor}/>))}
        </div>
        </div>
    )
}
export default Home;