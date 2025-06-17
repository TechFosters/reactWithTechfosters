export const Button = (obj) =>{
    //console.log(obj)  //props[properties]: "In React, props are immutable objects passed from parent to child components to make components dynamic and reusable."
    return <button onClick= {obj.fn} style = {{color: "#fff", backgroundColor: obj.bgColor, margin: '5px', fontSize: '25px', borderRadius: '5px'}}>{obj.value}</button>
}

