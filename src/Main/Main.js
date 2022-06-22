import React from 'react';
import Balance from '../Balance/Balance';
import './main.css';

import { useState } from 'react';
import Spending from '../Spending/Spending';

export default function Main() {
  const [balance, setbalance] = useState(500);

  
  return (
    <div className='main-container'>
        <Balance balance={balance}/>
        <Spending />
    </div>
  )
}
