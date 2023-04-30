import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import router from './router';
import { createPinia } from 'pinia';

import './style.css';
import 'element-plus/dist/index.css';

const pinia = createPinia();

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app
  .use(ElementPlus, {})
  .use(router)
  .use(pinia)
  .mount('#app');
