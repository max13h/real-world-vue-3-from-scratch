import './assets/main.css'
import 'nprogress/nprogress.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GStore from './store/index'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.provide('GStore', GStore)

app.mount('#app')
