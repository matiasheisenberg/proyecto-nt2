import Vue from 'vue'
import BootstrapVue, { BCardBody } from 'bootstrap-vue'
//Importamos VueRouter
import VueRouter from 'vue-router'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueGoogleMaps, {
  load: {
    key: '-',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
 
    //// If you want to set the version, you can do so:
    // v: '3.26',
  },})

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



