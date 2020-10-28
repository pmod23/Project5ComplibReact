import './checkbox.css';

const Checkbox = props => {
    
    return (
        <label className="checkbox">
            <input type="checkbox" defaultChecked={props.checked ? true : false}/>
            {props.label ? <span>{props.label}</span> : ''}
        </label>
    )

}

export default Checkbox;