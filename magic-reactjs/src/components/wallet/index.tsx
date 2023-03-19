import { useEffect, useState } from 'react';
// import Divider from '../ui/divider';
// import Loading from '../../images/loading.svg';
// import Network from '../network';
// import CardLabel from '../ui/card-label';
// import Card from '../ui/card';
// import CardHeader from '../ui/card-header';
import { magic } from '../../libs/magic';
import { web3 } from '../../libs/web3';
import { Networks } from '../../utils/networks';

interface Props {
  setAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const UserInfo = ({ setAccount } : Props) => {
  const [balance, setBalance] = useState('...');

  const publicAddress = localStorage.getItem('user');
  const tokenSymbol = 'MATIC';

  const getBalance = async () => {
    if (publicAddress) {
      const balance = await web3.eth.getBalance(publicAddress);
      setBalance(web3.utils.fromWei(balance));
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
	<div>
        {balance.substring(0, 7)} {tokenSymbol}
	</div>
  );
};

export default UserInfo;
