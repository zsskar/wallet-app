import { useEffect, useState } from "react";
import { User, createUser, userExists } from "../db/myDB";
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();
  const [selectedAccounts, setSelectedAccounts] = useState([]);

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        // Request access to MetaMask
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setSelectedAccounts(accounts);
      } else {
        console.log("MetaMask not detected");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  useEffect(() => {
    const connectedAccount = window.ethereum.selectedAddress;
    if (connectedAccount) {
      console.log("Connected account:", connectedAccount);
      navigate('/dashboard', { state: { accounts: connectedAccount } });
    }
  });
  useEffect(() => {
    // Subscribe to account changes
    const handleAccountsChanged = (accounts) => {
      setSelectedAccounts(accounts);
      console.log("Selected Accounts changed:", accounts);
      console.log("Exists: ", userExists(accounts));
      if (userExists(accounts)) {
        navigate('/dashboard', { state: { accounts: accounts } });
      }
      else {
        createUser(new User(accounts));
        navigate('/dashboard', { state: { accounts: accounts } });
      }
    };

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    // Cleanup subscription
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    };
  }, [navigate, selectedAccounts]);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
        <p className="text-gray-700 text-center mb-6">Connect with your wallet to create an account.</p>
        <button onClick={connectToMetaMask} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Connect with Wallet
        </button>
      </div>
    </div>
  );
}

export default SignUp;
