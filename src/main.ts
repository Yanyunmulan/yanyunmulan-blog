import { createApp } from 'vue'
// import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ThemeSwitch from './components/ThemeSwitch/index.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'





const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$ImgPrefix = 'https://zhupj-server.vercel.app/'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.component('theme-switch', ThemeSwitch);


app.use(ElementPlus)
app.use(pinia)
app.use(router)




app.mount('#app')