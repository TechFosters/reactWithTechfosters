// export const Message = (props) =>{
//     return <h1 style={{color: props.color}}>{props.msg}</h1>
// }

export const Message = ({msg, msgColor}) =>{
    return <h1 style ={{color: msgColor}}> {msg} </h1>
}