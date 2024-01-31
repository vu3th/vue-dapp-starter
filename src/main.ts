import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

// log version
import pkg from '../package.json'
console.log('@vue-dapp/core version:' + pkg.dependencies['@vue-dapp/core'])
