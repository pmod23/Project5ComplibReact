import './dropdown.css';

const Dropdown = props => {


    console.log(props)

    const label = props.label ? <option value="">{props.label}</option> : '';

    const classes = ['dropdown'];

    if (props.size === 'medium') classes.push('wide');
    if (props.size === 'large') classes.push('wide tall');
    if (props.filled) classes.push('filled');

    return (
        <select className={classes.join(' ')}>
            {label}
            {props.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
    )

}

export default Dropdown;