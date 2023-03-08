import { EthereumProvider } from "@walletconnect/ethereum-provider";
// project ID : https://cloud.walletconnect.com/app/project
// web3 provider 是wallet connect 1.0功能，已经过期，改用
export const provider = EthereumProvider.init({
  projectId: "071342fe01dd1b1c36e3942a6237ca19",
  chains:[1,56],
});
