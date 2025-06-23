const Button = ({ value, fn }) =>{
    //console.log({value})
    console.log('Rendering Button', value)
    return(
        
    <button style = {{backgroundColor: value , color: value==='Black'?'white': 'black', border: '2px solid black',borderRadius: '15px', padding: '10px', margin: '5px'}} onClick={()=>{console.log("Clicked Button", value); fn(value)}
    
    }>{value}</button>

    )
}
export default Button;