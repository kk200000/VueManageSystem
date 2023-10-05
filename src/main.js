// 引入vue APP
import { createApp } from 'vue'


// 引入tailwind-CSS
import "tailwindcss/tailwind.css"

// 引入Element PLUS
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 统一注册所有 element-ui 图标
import { loadIcon } from './utils/icons'

// 引入Pinia
import { createPinia } from 'pinia'



// 引入Vue-Router
import router from './router'
import App from './App.vue'
const app = createApp(App)
const pinia = createPinia()

loadIcon(app)
app.use(ElementPlus)
app.use(pinia)
app.use(router)


app.mount('#app')
