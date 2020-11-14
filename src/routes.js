import Home from './components/Home.vue'
import All from './components/AllGrants.vue'
import HereMap from './components/HereMap.vue'
import ForYou from './components/ForYou.vue'
export default[
    {path:'/',component:Home},
    {path:'/forYou',component:ForYou},
    {path:'/all',component:All},
    {path:'/contactus',component:HereMap}
]