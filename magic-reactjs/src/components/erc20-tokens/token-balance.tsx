import React, { useEffect, useState } from 'react';
// import Loading from '../../images/loading.svg';
// import CardLabel from '../ui/card-label';
import { web3 } from '../../libs/web3';
import { getTestTokenContract } from '../../utils/contracts';

const TokenBalance = () => {
  const [balance, setBalance] = useState('0');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const publicAddress = localStorage.getItem('user');
  const contract = getTestTokenContract();

  const getTestTokenBalance = async () => {
    if (!isRefreshing) {
      const balance = await contract.methods.balanceOf(publicAddress).call();
      setBalance(web3.utils.fromWei(balance));
    }
  };

  useEffect(() => {
    getTestTokenBalance();
  }, []);

  return (
    <div>
      <div className="code">{balance.substring(0, 7)} MTT</div>
    </div>
  );
};

export default TokenBalance;
