import React from 'react';
import './number-input.css';


export default class NumberInput extends React.Component {

    constructor(props) {

        super(props);

        this.state = { value: 0 }

    }

    tickUp() {
        console.log('tick up');
        //this.setState({ value: this.state.value + 1 })
    }

    tickDown() {
        console.log('tick down');
        //this.setState({ value: this.state.value - 1 })
    }

    render() {

        return (
            <div className="number-input">
                <span onClick={this.tickDown}>-</span>
                <input type="number" defaultValue={this.state.value} />
                <span onClick={this.tickUp}>+</span>
            </div>
        )

    }

}