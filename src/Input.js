import React, { Component } from 'react';

const Input = (props) => {
    return (
        <div>
            <input onKeyPress={props.onKeyPress}></input>
        </div>
    )
}
 
export default Input;