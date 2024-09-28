import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { getUserData } from './userManagerABI';

const User = () => {
  const [provider, setProvider] = useState(null);
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initEthers = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(provider);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          setUserId(address);
        } catch (error) {
          setError("Failed to connect to MetaMask");
        }
      } else {
        setError("Please install MetaMask");
      }
    };

    initEthers();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (provider && userId) {
        setIsLoading(true);
        try {
          const data = await getUserData(provider, userId);
          if (data) {
            setUserData(data);
          } else {
            setError("User not registered");
          }
        } catch (error) {
          setError("Error fetching user data");
        }
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [provider, userId]);

  if (isLoading) return <div className="text-white text-center mt-20">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-20">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-black text-white p-8 h-[240vh] bg-black pt-44">
      <div className="mx-5 mb-20 bg-gray-800 border border-gray-700 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">User Profile</h1>
        {userData ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">User Address</h2>
                <p className="text-gray-400">{userData.walletAddress}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Username</h2>
                <p className="text-gray-400">{userData.username}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <StatCard title="Total Participated Contests" value={userData.participatedLeagues.length} />
              <StatCard title="Total Contest Wins" value={userData.wonLeagues.length} />
              <StatCard title="Total Rewards" value={`${userData.totalRewards} GAS`} />
              <StatCard title="Registration Status" value={userData.isRegistered ? "Registered" : "Not Registered"} />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">User not registered</p>
          </div>
        )}
      </div>

      <div className="mb-28 bg-gradient-to-b bg-black w-full to-black p-6">
        <div className="bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">
                <span className="text-white">My</span>
                <span className="text-green-500">Teams</span>
              </h1>
              <div className="flex space-x-4">
                <div className="relative">
                  <select className="appearance-none bg-gray-700 text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <button className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
                  CREATE
                </button>
              </div>
            </div>
            <div className="bg-gray-700 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-5 gap-4 p-4 text-gray-300 font-semibold border-b border-gray-600">
                <div>MATCHES</div>
                <div>CREATED TEAMS</div>
                <div>JOINED TEAMS</div>
                <div>DATE</div>
                <div>ACTION</div>
              </div>
              <div className="p-8 text-center text-gray-400">
                No Teams Found
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">
                <span className="text-white">Transaction</span>
                <span className="text-green-500">History</span>
              </h1>
              <div className="flex space-x-4">
                <div className="relative">
                  <select className="appearance-none bg-black text-white px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>All</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <button className="bg-white text-black font-bold px-6 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
                  CREATE
                </button>
              </div>
            </div>
            <div className="bg-gray-700 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-5 gap-4 p-4 text-gray-300 font-semibold border-b border-gray-600">
                <div>TITLE</div>
                <div>AMOUNT</div>
                <div>TIME</div>
                <div>DATE</div>
                <div>TIME</div>
              </div>
              <div className="p-8 text-center text-gray-400">
                No Transactions Found
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-700 border border-gray-600 rounded-lg p-4">
      <h3 className="text-sm font-medium text-gray-400 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-green-600">{value}</p>
    </div>
  );
}

export default User;