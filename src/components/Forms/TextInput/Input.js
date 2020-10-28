import React from 'react';
import './text-input.css';

const TextInput = props => {

    // Declare Variables
    let size, placeholder = '', label = '';


    // Determine Size
    if (props.size === 'medium') size = 'md';
    else if (props.size === 'large') size = 'lg';


    // Determine Placeholder
    if (props.placeholder) placeholder = props.placeholder;
    else if (props.label) placeholder = props.label;

    
    // Determine Label
    if (props.label) label = <label>{props.label}</label>;
    

    return (
        <div className="text-input">
            {label}
            <input type="text" className={size} placeholder={placeholder} />
        </div>
    )
}

export default TextInput;