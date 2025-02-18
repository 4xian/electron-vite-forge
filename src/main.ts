import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './locales/index'
import './permission'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.provide('router', '123')

app.use(createPinia())
app.use(router)
app.use(i18n)
console.log(window.electronAPI)

app.mount('#app')
