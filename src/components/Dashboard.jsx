import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "./Header";
import { User, createUser, userExists } from "../db/myDB";
import { toast } from "react-toastify";
import 'react-toastify/ReactToastify.css';
import AccountInfo from "./AccountInfo";


function Dashboard() {

  const navigate = useNavigate();
  const location = useLocation();
  const [connAccount, SetConnAccount] = useState(null);
  const { accounts } = location.state !== null;
  console.log("Received : ", accounts);

  const showSuccess = () => {
    toast.success('one of the accounts changed or deleted.', {
        position: 'top-center',
        autoClose: 2000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        progress: undefined
    });
  }


  useEffect(() => {
    const connectedAccount = window.ethereum.selectedAddress;
    if (connectedAccount) {
      SetConnAccount(connectedAccount);
      console.log("Connected account:", connectedAccount);
    } else {
      console.log("No account connected");
      navigate('/');
    }
  }, [navigate]);


  useEffect(() => {
    // Subscribe to account changes
    const handleAccountsChanged = (accounts) => {
      console.log("Selected Accounts changed:", accounts);
      console.log("Exists: ", userExists(accounts));
      if (accounts.length > 0) {
        if (!userExists(accounts)) {
          createUser(new User(accounts));
          navigate('/dashboard', { state: { accounts: accounts } });
        }
        else {
          SetConnAccount(accounts[0]);
          showSuccess();
        }
      }
      else{
        navigate('/');
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
  }, [navigate]);



  return (
    <>
      <Header account={connAccount} />
      <AccountInfo />
    </>
  )
}

export default Dashboard;
