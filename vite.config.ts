import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nodeStdlibBrowser from 'node-stdlib-browser'
import inject from '@rollup/plugin-inject'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// https://github.com/niksy/node-stdlib-browser#vite
		{
			...inject({
				global: [require.resolve('node-stdlib-browser/helpers/esbuild/shim'), 'global'],
				process: [require.resolve('node-stdlib-browser/helpers/esbuild/shim'), 'process'],
				Buffer: [require.resolve('node-stdlib-browser/helpers/esbuild/shim'), 'Buffer'],
			}),
			enforce: 'post',
		},
	],
	resolve: {
		alias: { ...nodeStdlibBrowser },
	},
	optimizeDeps: {
		esbuildOptions: {
			target: 'esnext', // Enable Big integer literals
		},
	},
	build: {
		target: 'esnext', // Enable Big integer literals
		commonjsOptions: {
			transformMixedEsModules: true, // Enable @walletconnect/web3-provider which has some code in CommonJS
		},
	},
})
