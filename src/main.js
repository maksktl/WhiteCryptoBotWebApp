import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
window.Telegram.WebApp

const app = createApp(App)
app.use(Antd) // same as Vue.use in Vue 2.X
app.mount('#app')