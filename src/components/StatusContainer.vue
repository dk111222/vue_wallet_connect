<template>
  <div class="hello">
    <h1>Vue.js Dapp</h1>
    <div v-if="state.status">
       <h3>Address: {{state.address}}</h3>
       <h3>ChainId: {{state.chainId}}</h3>
    </div>
    <div v-else>
       <h3>没有连接钱包</h3>
    </div>

    <button @click="connectUserWallet" class="button">Connect Wallet</button>
    <button @click="disconnectUser" class="disconnect__button">Disconnect</button>
  </div>
</template>


<script>
  import connect from '../composables/connect/index';
  export default {
    name: 'StatusContainer',
    setup: () => {
      const { connectWalletConnect, disconnectWallet, state } = connect();
      const connectUserWallet = async () => {
        console.log("-> connectWalletConnect")
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


  