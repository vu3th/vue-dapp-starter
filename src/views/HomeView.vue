<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'

import { MetaMaskConnector, useVueDapp } from '@vue-dapp/core'
import { WalletConnectConnector } from '@vue-dapp/walletconnect'

const connectors = [
  new MetaMaskConnector(),
  new WalletConnectConnector({
    projectId: '3f3c98042b194264687bf59e104c534a',
    chains: [1],
    showQrModal: true,
    qrModalOptions: {
      themeMode: 'dark',
      themeVariables: undefined,
      desktopWallets: undefined,
      walletImages: undefined,
      mobileWallets: undefined,
      enableExplorer: true,
      privacyPolicyUrl: undefined,
      termsOfServiceUrl: undefined
    }
  })
]

const { status, isConnected, address, chainId, error, disconnect, connectWith } = useVueDapp()

function onClickMetaMask() {
  if (!isConnected.value) {
    connectWith(connectors[0])
  }
}

function onClickWalletConnect() {
  if (!isConnected.value) {
    connectWith(connectors[1])
  }
}
</script>

<template>
  <main>
    <div v-if="!isConnected">
      <button :disabled="status !== 'idle'" @click="onClickMetaMask">Connect with MetaMask</button>
      <button :disabled="status !== 'idle'" @click="onClickWalletConnect">
        Connect with WalletConnect
      </button>
    </div>
    <button v-else @click="disconnect">Disconnect</button>

    <div>status: {{ status }}</div>
    <div>isConnected: {{ isConnected }}</div>
    <div>error: {{ error }}</div>

    <div v-if="isConnected">
      <div v-if="chainId !== -1">chainId: {{ chainId }}</div>
      <div>address: {{ address }}</div>
    </div>
  </main>
</template>
