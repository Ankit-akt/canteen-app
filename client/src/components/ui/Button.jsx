import React from "react";

function Button(props) {
    const buttonClass = `btn btn-${props.color}`;

    return (
        <button className={buttonClass} style={{ width: props.width }}
        
        onClick = {props.onClick
        } disabled ={props.disabled} >
            
            {props.label}
        </button>
    );
}

export default Button;
