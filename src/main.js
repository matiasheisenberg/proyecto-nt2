import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
//Importamos VueRouter
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Tambien importamos el archivo de rutas
import {routes} from './routes'
const router = new VueRouter({
  routes,
  linkActiveClass :'active'
})

new Vue({
  router, //Lo agregamos a la instancia de Vue.
  render: h => h(App),
}).$mount('#app')
