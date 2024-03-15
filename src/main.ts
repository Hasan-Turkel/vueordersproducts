import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'

import App from './App.vue'
import router from './router'

import { Modal, Spin } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig)

app.use(Modal)
app.use(Spin)

app.use(Vue3Toastify, {
  autoClose: 2000
} as ToastContainerOptions)

app.mount('#app')
