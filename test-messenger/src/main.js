import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import PrimeVue from 'primevue/config';
import Textarea from 'primevue/textarea';

createApp(App).use(PrimeVue).component('Textarea',Textarea).mount('#app')
