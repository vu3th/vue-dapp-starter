import { VueDapp } from 'vue-dapp'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VueDapp)
})
