// src/services/web3Service.js

import Web3 from 'web3';

export const getAccountInfo = async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const accounts = await web3.eth.getAccounts();
      const balance = await web3.eth.getBalance(accounts[0]);
      return { account: accounts[0], balance: web3.utils.fromWei(balance, 'ether') };
    } catch (error) {
      console.error("Error connecting to Metamask:", error);
      return null;
    }
  } else {
    alert("Please install MetaMask!");
    return null;
  }
};
