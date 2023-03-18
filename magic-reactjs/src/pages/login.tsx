import React, { useState } from 'react';
// import AppHeader from '../components/app-header';
// import Links from '../components/links';
// import Network from '../components/network';
// import ConnectButton from '../components/ui/connect-button';
// import Spacer from '../components/ui/spacer';
// import LoginPageBackground from '../images/login.svg';
import { magic } from '../libs/magic';

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login = ({ setAccount }: Props) => {
  const [disabled, setDisabled] = useState(false);

  const connect = async () => {
    try {
      setDisabled(true);
      const accounts = await magic.wallet.connectWithUI();
      setDisabled(false);
      console.log('Logged in user:', accounts[0]);
      localStorage.setItem('user', accounts[0]);
      setAccount(accounts[0]);
    } catch (error) {
      setDisabled(false);
      console.error(error);
    }
  };

  return (
	<div>
		<button onClick={connect} disabled={disabled}> Login </button>
    </div>
  );
};

export default Login;
