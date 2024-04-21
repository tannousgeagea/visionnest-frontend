import React from 'react';
import './button.css'

const Button = (props) => {
    return (
        <div className='button-36'>
            <span className='button-text'>
            <img src={props.icon} alt="Button icon" className="button-icon"/>
                {props.text}
            </span>
        </div>
    )
}

export default Button