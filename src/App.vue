<script setup lang="ts">
import LayoutHeader from './components/LayoutHeader.vue'
import { MetaMaskConnector, Connector } from '@vue-dapp/core'
import { Board } from '@vue-dapp/vd-board'
import '@vue-dapp/vd-board/dist/style.css'

const isDev = import.meta.env.DEV
const infuraId = isDev ? import.meta.env.VITE_INFURA_KEY : 'ff6a249a74e048f1b413cba715f98d07'

let connectors: Connector[] = [
	new MetaMaskConnector({
		appUrl: 'http://localhost:3000',
	}),
]

const autoConnectErrorHandler = (err: any) => {
	console.error(err)
}

const connectErrorHandler = (err: any) => {
	console.error(err)
}
</script>

<template>
	<layout-header />
	<router-view></router-view>
	<Board
		dark
		:connectors="connectors"
		:autoConnectErrorHandler="autoConnectErrorHandler"
		:connectErrorHandler="connectErrorHandler"
	/>
</template>
