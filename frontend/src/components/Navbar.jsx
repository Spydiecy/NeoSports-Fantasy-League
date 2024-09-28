import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import { getUserData, registerUser } from '../Pages/userManagerABI';

const Navbar = () => {
  const [account, setAccount] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const initEthers = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const signer = await provider.getSigner();
          setSigner(signer);
          const address = await signer.getAddress();
          setAccount(address);
          setIsConnected(true);
          checkUserRegistration(provider, address);
        } catch (error) {
          console.error('Failed to connect to MetaMask:', error);
        }
      } else {
        console.log('Please install MetaMask!');
      }
    };

    initEthers();
  }, []);

  const checkUserRegistration = async (provider, userAddress) => {
    try {
      const userData = await getUserData(provider, userAddress);
      if (!userData || !userData.isRegistered) {
        setShowRegisterPopup(true);
      }
    } catch (error) {
      console.error('Error checking user registration:', error);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        const signer = await provider.getSigner();
        setSigner(signer);
        const address = await signer.getAddress();
        setAccount(address);
        setIsConnected(true);
        checkUserRegistration(provider, address);

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
      console.error('MetaMask not detected');
    }
  };

  const handleRegister = async () => {
    if (signer && username) {
      try {
        console.log('Attempting to register user...');
        console.log('Username:', username);

        const network = await provider.getNetwork();
        console.log('Current network:', network.name, 'Chain ID:', network.chainId);

        const balance = await provider.getBalance(account);
        console.log('Account balance:', ethers.formatEther(balance), 'GAS');

        const success = await registerUser(signer, username);
        if (success) {
          setShowRegisterPopup(false);
          console.log('User registered successfully');
          navigate('/userProfile');
        } else {
          console.error('User registration failed');
          alert('Registration failed. Please try again.');
        }
      } catch (error) {
        console.error('Error in handleRegister:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          code: error.code,
          data: error.data
        });
        alert(`Registration failed: ${error.message}`);
      }
    } else {
      console.error('Signer or username is not available');
      alert('Please connect your wallet and enter a username before registering.');
    }
  };

  const trimAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className='flex sticky gap-[30vw] top-3 gap-x-[40vw] z-50'>
      <div className="left-part">
        <Link to="/home">
        <img className='h-20 pl-4' src="https://fantasy-extreme-assets.s3.us-east-005.backblazeb2.com/Compressed/logo/logo.png" alt="" />
        </Link>
      </div>
      <div className="right-part flex flex-col">
        <ul className='right-list flex flex-row gap-4 m-4 p-2 rounded-2xl border-[0.1vw] border-[#68ed94] bg-[#0C0C19] text-white text-sm justify-center items-center'>
          <Link to="/matches">
            <li className='cursor-pointer hover:text-gGlow transition-all duration-1000'>Matches</li>
          </Link>
          <Link to='/rewardCalculator'>
            <li className='cursor-pointer mr-9 hover:text-gGlow transition-all duration-1000'>Rewards</li>
          </Link>
          <li className='cursor-pointer hover:text-gGlow transition-all duration-1000'>Leagues</li>
          <Link to="/fantasyextremeRules">
            <li className='cursor-pointer hover:text-gGlow transition-all duration-1000'>Gameplay Rules</li>
          </Link>
          <li>
            <button className='border-white border-2 p-[0.2vw] rounded-xl'>JOIN DISCORD</button>
          </li>
          <li>
            {isConnected ? (
              <button 
                onClick={() => navigate('/userProfile')}
                className='border-white bg-white border-2 p-1 rounded-xl text-black px-4'
              >
                {trimAddress(account)}
              </button>
            ) : (
              <button 
                onClick={connectWallet} 
                className='border-white bg-white border-2 p-1 rounded-xl text-black px-4'
              >
                CONNECT
              </button>
            )}
          </li>
        </ul>
      </div>

      {showRegisterPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">Register Username</h2>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            />
            <div className="flex justify-end">
              <button
                onClick={handleRegister}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Register
              </button>
              <button
                onClick={() => setShowRegisterPopup(false)}
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;