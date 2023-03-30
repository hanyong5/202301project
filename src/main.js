import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import ElementPlus from 'element-plus'

createApp(App).use(router).use(ElementPlus).mount('#app');
