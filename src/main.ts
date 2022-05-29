import { createApp } from "vue";
import App from "./App.vue";
import { VueDapp } from "vue-dapp";

const app = createApp(App);

app.use(VueDapp);

app.mount("#app");
