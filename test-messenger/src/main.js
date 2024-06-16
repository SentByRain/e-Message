// import './assets/main.css'

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

import RequestPlugin from "./plugins/api";

import PrimeVue from "primevue/config";
import Textarea from "primevue/textarea";

createApp(App)
  .use(createPinia())
  .use(PrimeVue)
  .component("Textarea", Textarea)
  .use(RequestPlugin)
  .mount("#app");
