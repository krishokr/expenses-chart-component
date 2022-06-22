import React, { useEffect } from 'react';
import './balance.css';
import { useState } from 'react';

import logo from '../images/logo.svg';

export default function Balance(props) {
    const [balance, setbalance] = useState(0);

    useEffect(() => setbalance(props.balance) ,[])

  return (
    <div className='balance-component'>
        <div className='text'>
            <p>My balance</p>
            <h1>${balance}</h1>
        </div>
        
        <img src={logo} alt="balance logo" />
    </div>
  )
}
