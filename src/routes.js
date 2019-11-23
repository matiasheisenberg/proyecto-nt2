
import Home from './components/Home.vue'
import Comprador from './components/Comprador.vue'
import Vendedor from './components/Vendedor.vue'
import DetalleComprador from './components/DetalleComprador.vue'
//import Yeff from './components/Yeff.vue'

export const routes = [
    { path: '/', component: Home },
   
    { path: '/comprador', component:Comprador },
    { path: '/vendedor', component:Vendedor },
    { path: '/detallecomprador/:vendedorId', name: 'detallecomprador', component:DetalleComprador }
    
]