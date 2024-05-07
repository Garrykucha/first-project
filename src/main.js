
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router.js";
import VIntersection from "@/directives/VIntersection.js";
import directives from "@/directives/index.js";
const app = createApp(App)
/*directives.forEach(directive => app.directive(directive.name, directive))*/
app.use(router)
app.mount('#app')
