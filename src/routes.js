import Serie from './components/serie/Serie.vue'
import SerieDetail from './components/serie/SerieDetail.vue'
import Home from './components/Home.vue'
import Matias from './components/Matias.vue'
import Fede from './components/Fede.vue'
import Ini from './components/Ini.vue'
//import Yeff from './components/Yeff.vue'

export const routes = [
    {path:'/',component:Home},
    {path:'/serie',name:'serie',component:Serie},
    {path:'/detalle/:id',name:'detalle',component:SerieDetail},
    {path:'/matias',component:Matias},
    {path:'/fede',component:Fede},
    {path:'/ini',component:Ini},
    //{path:'/yeff',component:Yeff},
]