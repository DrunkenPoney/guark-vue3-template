import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import g from 'guark'

const app = createApp(App)
app.config.globalProperties.$g = g
app.use(store)
  .mixin({
    created: () => g.hook('created'),
    mounted: () => g.hook('mounted'),
  })
  .mount('#app')
