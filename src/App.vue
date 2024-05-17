<script lang="ts" setup>
import { BrowserWalletConnector, useVueDapp } from '@vue-dapp/core'
import { VueDappModal, useVueDappModal } from '@vue-dapp/modal'
import '@vue-dapp/modal/dist/style.css'

import { CoinbaseWalletConnector } from '@vue-dapp/coinbase'

const { addConnectors, isConnected, wallet, disconnect } = useVueDapp()

addConnectors([
	new BrowserWalletConnector(),
	new CoinbaseWalletConnector({
		appName: 'Vue Dapp',
		jsonRpcUrl: 'https://ethereum-rpc.publicnode.com',
	}),
])

function onClickConnectButton() {
	if (isConnected.value) disconnect()
	else useVueDappModal().open()
}
</script>

<template>
	<button @click="onClickConnectButton">{{ isConnected ? 'Disconnect' : 'Connect' }}</button>

	<div>status: {{ wallet.status }}</div>
	<div>isConnected: {{ isConnected }}</div>
	<div>error: {{ wallet.error }}</div>

	<div v-if="isConnected">
		<div>chainId: {{ wallet.chainId }}</div>
		<div>address: {{ wallet.address }}</div>
	</div>

	<VueDappModal dark auto-connect />
</template>

<style></style>
