import React from 'react';
import './spending.css';

import { useState, useEffect } from 'react';
import data from '../files/data.json';
import BarChart from '../BarChart/BarChart';


export default function Spending(props) {
    const [total, settotal] = useState(0);
    const [lastMonthComparison, setlastMonthComparison] = useState(2.5);
    const [plusMinus, setplusMinus] = useState('+');

    function getTotal() {
        let t = 0;

        data.forEach(obj => t+= obj.amount);

        return settotal(t);
    }

    useEffect(() => getTotal(),[])

  return (
    <div className='spending-container'>
        <div className='top-container'>
            <h1>Spending - Last 7 Days</h1>
            <BarChart data={data} />
        </div>
        <div className='bottom-container'>
            <div className='month-total'>
                <p>Total this month</p>
                <h1>${total}</h1>
            </div>
            <div className='last-month'>
                <p className='percentage'>{plusMinus}{lastMonthComparison}%</p>
                <p>from last month</p>
            </div>

        </div>
    </div>
  )
}
