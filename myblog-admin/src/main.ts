import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import '@/assets/css/base.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'

import ECharts from 'vue-echarts'
import 'echarts'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import router from './router'
import store from './store'

import '@/utils/filter'

export const app = createApp(App)
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})
app.use(ElementPlus)
app.use(mavonEditor)
app.use(store)
const userMenu = window.localStorage.getItem('userMenu')
if (userMenu) {
  store.commit('userModule/saveUserMenuList', JSON.parse(userMenu))
}
app.use(router)
app.component('v-chart', ECharts)
app.mount('#app')
