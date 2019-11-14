import Serie from './components/serie/Serie.vue'
import SerieDetail from './components/serie/SerieDetail.vue'
import Home from './components/Home.vue'
import Comprador from './components/Comprador.vue'
import Vendedor from './components/Vendedor.vue'
import Confirmacion from './components/Confirmacion.vue'
import DetalleComprador from './components/DetalleComprador.vue'
//import Yeff from './components/Yeff.vue'

export const routes = [
    {path:'/',component:Home},
    {path:'/serie',name:'serie',component:Serie},
    {path:'/detalle/:id',name:'detalle',component:SerieDetail},
    {path:'/comprador',component:Comprador},
    {path:'/vendedor',component:Vendedor},
    {path:'/confirmacion',component:Confirmacion},
    {path:'/detallecomprador',component:DetalleComprador}
    
]