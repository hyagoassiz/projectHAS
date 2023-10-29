import React from "react";
import "./button.css"

function Button(props){
    return(
        <div>
            <button>{props.name}</button>
        </div>
    )
}

export default Button;