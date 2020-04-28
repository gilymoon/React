import React, { Component } from "react";
import moment from 'moment';
import './clock.scss';

const formatDate = offset => moment().utcOffset(offset).format('LTS');

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: props.location,
            offset: formatDate(props.offset),
        };
        //Do not do this way
        setInterval(() => {
            this.setState({
                offset: formatDate(props.offset) ,
            });
        }, 1000);
    }

    render() {
        return (
        <div className="clock">
                <div className="clock__location">{this.state.location}</div>
                <div className="clock__time">{this.state.offset}</div>
        </div>);
    }
}

export default Clock;
