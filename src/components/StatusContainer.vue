<template>
    <div class="Hi">
      <h1>Vue.js Dapp</h1>
      <div >
         <button class="button">Connected</button>
         <button class="disconnect__button">Disconnect</button>
      </div>
  
      <button class="button"> Connect Wallet</button>
    </div>
</template>

<script>
import connect from '../composables/connect/index';
export default {
  name: 'StatusContainer',
  setup: () => {
    const { connectWalletConnect, disconnectWallet, state } = connect();
    const connectUserWallet = async () => {
      await connectWalletConnect();
    };

    const disconnectUser = async() => {
      await disconnectWallet()
    }
    return {
      connectUserWallet,
      disconnectUser,
      state
    }
  }
}
</script>


  