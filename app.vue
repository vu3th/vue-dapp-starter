<template>
  <div>
    <h1>Nuxt3 Vue-Dapp Starter</h1>

    <p>Address: {{address}}</p>
    <p>Chain: {{chainId}}</p>

    <button @click="open">Connect</button>

    <vd-board :connectors="connectors" />
  </div>
</template>

<script>
import { MetaMaskConnector, WalletConnectConnector, CoinbaseWalletConnector, SafeConnector, useBoard, useEthers } from 'vue-dapp';

export default {
  setup() {
    const { open } = useBoard();
    const { address, chainId, signer } = useEthers();

    const connectors = [
      new MetaMaskConnector({
        appUrl: "http://localhost:3000/",
      }),
      new WalletConnectConnector({
        qrcode: true,
        rpc: {
          10: "https://1rpc.io/op",
          42161: "https://arb1.arbitrum.io/rpc", //`https://arb-mainnet.g.alchemy.com/v2/${config.alchemyArbitrumKey}`,
        },
      }),
      new CoinbaseWalletConnector({
        appName: "Nuxt3 Vue Dapp Starter",
        jsonRpcUrl: "https://1rpc.io/op",
      }),
      new SafeConnector()
    ]

    return { address, chainId, connectors, open, signer }
  },
}
</script>