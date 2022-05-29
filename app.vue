<script setup>
import { MetaMaskConnector, WalletConnectConnector, CoinbaseWalletConnector, useBoard, useEthers } from 'vue-dapp'

const { open } = useBoard()
const { address } = useEthers()
const infuraId = ''
const connectors = [
  new MetaMaskConnector({
    appUrl: 'http://localhost:3000',
  }),
  new WalletConnectConnector({
    qrcode: true,
    rpc: {
      1: `https://mainnet.infura.io/v3/${infuraId}`,
      4: `https://rinkeby.infura.io/v3/${infuraId}`,
    },
  }),
  new CoinbaseWalletConnector({
    appName: 'Vue Dapp',
    jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`,
  }),
]
</script>

<template>
  <div>
    <button @click="open">Connect Wallet</button>
    <vd-board :connectors="connectors" dark />
    {{ address }}
  </div>
</template>
