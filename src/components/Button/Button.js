import React from 'react';
import './btn.css';

const Button = (props) => {

    console.log(props);

    const classes = ['btn'];
    if (props.type) classes.push(props.type);
    if (props.outlined || props.outline) classes.push('outlined');
    if (props.faded) classes.push('faded');
    if (props.size) classes.push(props.size);
    if (!props.children) classes.push('icon-only');

    const buttonText = props.children ? <span>{props.children}</span> : '';

    return (
        <button className={classes.join(' ')}>{props.icon || ''}{buttonText}</button>
    );

};

export default Button;
