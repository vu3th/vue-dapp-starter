import rollupPolyfillNode from 'rollup-plugin-polyfill-node'
import nodeStdlibBrowser from 'node-stdlib-browser'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	nitro: {
		preset: 'vercel-edge',
	},
	vite: {
		resolve: {
			// Enable polyfill node used in development to prevent from vite's browser compatibility warning
			alias: { ...nodeStdlibBrowser },
		},
		optimizeDeps: {
			// Enable polyfill node used in development, refer to https://github.com/sodatea/vite-plugin-node-stdlib-browser/blob/b17f417597c313ecd52c3e420ba8fc33bcbdae20/index.cjs#L17
			esbuildOptions: {
				inject: [require.resolve('node-stdlib-browser/helpers/esbuild/shim')],
			},
		},
		build: {
			rollupOptions: {
				plugins: [
					// Enable rollup polyfills plugin used in production bundling, refer to https://stackoverflow.com/a/72440811/10752354
					rollupPolyfillNode(),
				],
			},
			commonjsOptions: {
				transformMixedEsModules: true, // Enable @walletconnect/web3-provider which has some code in CommonJS
			},
		},
	},
})
