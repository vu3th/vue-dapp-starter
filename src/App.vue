<script setup lang="ts">
import { MetaMaskConnector, WalletConnectConnector, CoinbaseWalletConnector } from 'vue-dapp'

const isDev = import.meta.env.DEV
const infuraId = isDev ? import.meta.env.VITE_INFURA_KEY : 'ff6a249a74e048f1b413cba715f98d07'

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
	<layout-header />
	<router-view></router-view>
	<vd-board :connectors="connectors" dark />
</template>
