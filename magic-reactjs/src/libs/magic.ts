import { EthNetworkConfiguration, Magic } from 'magic-sdk';
import { Networks } from '../utils/networks';

const formattedNetwork = (): EthNetworkConfiguration => {
  const network = localStorage.getItem('network');
  switch (network) {
    case Networks.Optimism:
      return {
        rpcUrl: "https://goerli.optimism.io/" as string,
        chainId: 420,
      };
    case Networks.Polygon:
      return {
        rpcUrl: "https://rpc-mumbai.maticvigil.com/" as string,
        chainId: 80001,
      };
    default:
      return {
        rpcUrl: "https://eth-goerli.g.alchemy.com/v2/3jKhhva6zBqwp_dnwPlF4d0rFZhu2pjD/" as string,
        chainId: 5,
      };
  }
};

export const magic = new Magic("pk_live_3EAC7F93725A4C30" as string, {
  network: formattedNetwork(),
});
