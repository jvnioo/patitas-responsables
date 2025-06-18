import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Import Bootstrap Vue Next
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import { BootstrapVueNext } from 'bootstrap-vue-next'

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(router)
app.use(BootstrapVueNext)

// Mount app
app.mount('#app') 