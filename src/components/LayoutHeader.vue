<script setup lang="ts">
import { useBoard, useEthers, useWallet, displayEther, shortenAddress } from 'vue-dapp'

const { open } = useBoard()
const { address, balance, isActivated } = useEthers()
const { disconnect, wallet } = useWallet()

const navigation: { name: string; href: string }[] = [
	{
		name: 'About',
		href: '/about',
	},
]
</script>

<template>
	<header class="w-full px-4">
		<div class="flex justify-between p-4 px-3">
			<nav class="w-full">
				<div class="flex items-center justify-between">
					<router-link to="/" active-class="text-gray-900" class="text-xl text-gray-600">
						<div class="flex space-x-4 items-center">
							<!-- logo -->
							<img class="h-10 min-w-10" src="../assets/logo.png" alt="logo" />
							<p class="hover:text-gray-900">Vue 3 Dapp Starter</p>
						</div>
					</router-link>

					<div class="flex items-center space-x-10">
						<!-- router -->
						<router-link
							v-for="link in navigation"
							:key="link.name"
							:to="link.href"
							active-class="text-gray-900"
							exact
							class="text-gray-600 hover:text-gray-900"
						>
							{{ link.name }}
						</router-link>

						<div v-if="isActivated" class="flex items-center flex-col">
							<!-- Account -->
							<div class="sm:hidden py-2 px-3 rounded-2xl inline-block bg-gray-100">
								{{ shortenAddress(address) }}
							</div>

							<div class="hidden sm:flex py-1 px-2 items-center rounded-3xl border border-solid">
								<div class="px-1 mr-1">{{ displayEther(balance) }} ETH</div>
								<div class="py-2 px-3 rounded-2xl inline-block bg-gray-100">
									{{ shortenAddress(address) }}
								</div>
							</div>
							<div>
								<button @click="disconnect" class="text-sm border rounded-3xl px-2">Disconnect</button>
							</div>
						</div>

						<button v-else @click="open()" class="btn" :disabled="wallet.status === 'connecting'">
							{{
								wallet.status === 'connecting'
									? 'Connecting...'
									: wallet.status === 'loading'
									? 'Loading...'
									: 'Connect'
							}}
						</button>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>
