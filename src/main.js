import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
// import { Notification } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
const app = createApp(App)

app.use(router)

// app.use(Notification)
app.use(ElementPlus)
app.mount('#app')
