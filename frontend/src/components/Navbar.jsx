
import React from 'react'
import { Link } from 'react-router-dom'
import Component from './dropDownleague'
// import discord from "../../src/assets/fantasyextreme.org/media.api-sports.io/i";
import { useState, useEffect } from 'react';
import Web3 from 'web3';


const Navbar = () => {
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        checkConnection(web3Instance);
      } else {
        console.log('Please install MetaMask!');
      }
    };

    initWeb3();
  }, []);

  const checkConnection = async (web3Instance) => {
    try {
      const accounts = await web3Instance.eth.getAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setIsConnected(true);
      }
    } catch (error) {
      console.error('Error checking connection:', error);
    }
  };

  const connectWallet = async () => {
    if (web3) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setIsConnected(true);

        // Switch to NeoX Testnet
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xBA9304' }], // NeoX Testnet Chain ID in hex
          });
        } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xBA9304',
                  chainName: 'NeoX Testnet',
                  nativeCurrency: {
                    name: 'GAS',
                    symbol: 'GAS',
                    decimals: 18
                  },
                  rpcUrls: ['https://neoxt4seed1.ngd.network'],
                  blockExplorerUrls: ['https://xt4scan.ngd.network/']
                }],
              });
            } catch (addError) {
              console.error('Failed to add the NeoX Testnet:', addError);
            }
          }
          console.error('Failed to switch to the NeoX Testnet:', switchError);
        }
      } catch (error) {
        console.error('Failed to connect to MetaMask:', error);
      }
    } else {
      console.error('Web3 not initialized');
    }
  };

  const trimAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (

    <div className='flex absolute gap-[30vw] top-3 gap-x-[40vw]  z-50'>
      <div className="left-part">
        <img className='h-20 pl-4' src="https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/logo/logo.png" alt="" />
      </div>
      <div className="right-part flex flex-col">
        <ul className='right-list flex flex-row  gap-4 m-4 p-2 rounded-2xl border-[0.1vw] border-[#68ed94] bg-[#0C0C19] text-white text-sm justify-center items-center'>
          <Link to="/matches">
            <li className='cursor-pointer hover:text-gGlow transition-all duration-1000'>Matches</li>
          </Link>
          <Link to='/rewardCalculator'>
            <li className='cursor-pointer hover:text-gGlow transition-all duration-1000'>Rewards Calculator</li>
          </Link>
          <li className='cursor-pointer hover:text-gGlow transition-all duration-1000'><Component></Component></li>
          <Link to="/fantasyextremeRules">
            <li className='cursor-pointer hover:text-gGlow transition-all duration-1000'>Gameplay Rules</li>
          </Link>
          <li>
            <button className='border-white border-2 p-[0.2vw] rounded-xl'>JOIN DISCORD</button>
          </li>
          <li>
            <button 
              onClick={connectWallet} 
              className='border-white bg-white border-2 p-1 rounded-xl text-black px-4'
            >
              {isConnected ? trimAddress(account) : 'CONNECT'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;