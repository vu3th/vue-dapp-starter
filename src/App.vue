<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  <p>{{ address }}</p>
  <button @click="open">connect wallet</button>
  <vd-board :connectors="connectors" dark />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import {
  MetaMaskConnector,
  WalletConnectConnector,
  CoinbaseWalletConnector,
  useBoard,
  useEthers,
} from "vue-dapp";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const { open } = useBoard();
    const { address } = useEthers();
    const infuraId = "";
    const connectors = [
      new MetaMaskConnector({
        appUrl: "http://localhost:3000",
      }),
      new WalletConnectConnector({
        qrcode: true,
        rpc: {
          1: `https://mainnet.infura.io/v3/${infuraId}`,
          4: `https://rinkeby.infura.io/v3/${infuraId}`,
        },
      }),
      new CoinbaseWalletConnector({
        appName: "Vue Dapp",
        jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
      }),
    ];
    return {
      address,
      connectors,
      open,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
