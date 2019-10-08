import Serie from './components/serie/Serie.vue'
import Actor from './components/Actor.vue'
import Home from './components/Home.vue'

export const routes = [
    {path:'',component:Home},
    {path:'/serie',component:Serie},
    {path:'/actor',component:Actor}
]