import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      process: require.resolve('process'),
      buffer: require.resolve('buffer'),
      util: require.resolve('util'),
    },
  },
})
