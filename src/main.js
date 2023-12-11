import './assets/main.css'
import VMdDateRangePicker from "v-md-date-range-picker";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// import { Notification } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
const app = createApp(App)
app.use(VMdDateRangePicker)
app.use(router)

// app.use(Notification)
app.use(ElementPlus)
app.mount('#app')
