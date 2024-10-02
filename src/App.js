// src/App.js

import React, { useState, useEffect } from 'react';
import BeneficiaryDashboard from './components/BeneficiaryDashboard';
import { getAccountInfo } from './services/web3Service';

function App() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');

  useEffect(() => {
    async function loadBlockchainData() {
      const data = await getAccountInfo();
      if (data) {
        setAccount(data.account);
        setBalance(data.balance);
      }
    }
    loadBlockchainData();
  }, []);

  return (
    <div className="App">
      <BeneficiaryDashboard />
      <div className="text-center mt-8">
        <h2 className="text-xl font-bold">Wallet Information</h2>
        <p>Account: {account}</p>
        <p>Balance: {balance} ETH</p>
      </div>
    </div>
  );
}

export default App;
