import React from 'react';
import { useState } from 'react';
import './bar.css';
import ReactTooltip from 'react-tooltip';

export default function Bar(props) {

    const [amount, setamount] = useState(props.amount);
    const [day, setday] = useState(props.day);
    const [hover, sethover] = useState(false);

    const style = {
        height: amount*2
    }

    // function getColor() {
    //     if (day === 'mon') {
    //         return setcolor('mon'
    //     } else if (day === 'tue') {
    //         return 'tue'
    //     } else if (day === 'wed') {
    //         return 'wed'
    //     } else if (day === 'thu') {
    //         return 'thu'
    //     } else if (day === 'fri') {
    //         return 'fri'
    //     } else if (day === 'sat') {
    //         return 'sat'
    //     } else if (day === 'sun') {
    //         return 'sun'
    //     }
    // }

  return (
    <div className='bar-container'>
        <ReactTooltip />
        <div className={`bar ${day}`} style={style} data-tip={amount}></div>
        <p>{day}</p>
        
    </div>
  )
}
