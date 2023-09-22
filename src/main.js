
import { createApp } from 'vue'
// 引入Pinia
import { createPinia } from 'pinia'
// 引入Vue-Router
import router from './router'
// 引入Element PLUS
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入tailwind-CSS
import "tailwindcss/tailwind.css"

import { loadIcon } from './utils/icons'
import App from './App.vue'
import useMenuStore from './stores'
const app = createApp(App)
const pinia = createPinia()

// 统一注册所有 element-ui 图标

loadIcon(app)
app.use(pinia)
app.use(router)

app.use(ElementPlus)

// router.beforeEach((to) => {
//   // ✅ 这将确保正确的商店用于
//   // 当前运行的应用
//   const Menucollapse = useMenuStore()


// })


app.mount('#app')
