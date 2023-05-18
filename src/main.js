import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'
import derictives from './derictives'
import store from './store'

const app = createApp(App)

components.forEach((component) => {
    app.component(component.name, component)
})

derictives.forEach((el) => {
    app.directive(el.name, el)
})

app.use(router).use(store).mount('#app')
