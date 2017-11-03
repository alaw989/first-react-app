import React, { Component } from 'react';
import "./Button.css";

const Button = (props) => {
    return ( 
        <div className="Button">
        <button onClick={props.onClick}> {props.text} </button>
        </div>
    )
}
 
export default Button;