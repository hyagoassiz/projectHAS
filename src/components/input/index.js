import React from "react";
import "./input.css"

function Input(props){
    return(
        <div>
            <input placeholder={props.name} type={props.type}/>
        </div>
    )
}

export default Input;