import Vue from 'vue'

//Importamos VueRouter
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
//Tambien importamos el archivo de rutas
import {routes} from './routes'
const router = new VueRouter({routes})

new Vue({
  router, //Lo agregamos a la instancia de Vue.
  render: h => h(App),
}).$mount('#app')
