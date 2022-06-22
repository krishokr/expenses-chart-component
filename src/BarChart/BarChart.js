import React from 'react';
import { useState } from 'react';
import Bar from '../Bar/Bar';
import './barchart.css';

export default function BarChart(props) {

    const [data, setdata] = useState(props.data)

  return (
    <div className='barchart-container'>
      {data.map(obj => <Bar amount={obj.amount} day={obj.day} key={obj.day} data-tip={obj.amount}/>)}
    </div>
  )
}
