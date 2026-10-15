const Button =(props) =>{
    return(
        <button onClick={()=> alert(props.message)}>{props.name}</button>
    );
};
export default Button;