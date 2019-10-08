import Serie from './components/serie/Serie.vue'
import SerieDetail from './components/serie/SerieDetail.vue'
import Home from './components/Home.vue'

export const routes = [
    {path:'/',component:Home},
    {path:'/serie',name:'serie',component:Serie},
    {path:'/detalle/:id',name:'detalle',component:SerieDetail}
]