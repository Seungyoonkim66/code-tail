import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import router from './router';
import { createPinia } from 'pinia';

import './style.scss';
import 'element-plus/dist/index.css';

const pinia = createPinia();

const app = createApp(App);


app
  .use(ElementPlus, {})
  .use(router)
  .use(pinia)
  .mount('#app');
