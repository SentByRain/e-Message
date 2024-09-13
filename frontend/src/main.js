import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";

import RequestPlugin from "./plugins/api";
import PrimeVue from "primevue/config";

import Aura from "@primevue/themes/aura";

import "primevue/resources/themes/md-light-deeppurple/theme.css";

import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import ScrollPanel from "primevue/scrollpanel";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch"; // this is primeVue V3

createApp(App)
  .use(createPinia())
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: "p",
        darkModeSelector: "system",
        cssLayer: {
          name: "primevue",
          order: "tailwind-base, primevue, tailwind-utilities",
        },
      },
    },
  })
  .component("Textarea", Textarea)
  .component("IconField", IconField)
  .component("InputIcon", InputIcon)
  .component("InputText", InputText)
  .component("ScrollPanel", ScrollPanel)
  .component("Dialog", Dialog)
  .component("Button", Button)
  .component("InputSwitch", InputSwitch)
  .use(RequestPlugin)
  .mount("#app");
