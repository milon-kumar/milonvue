import {createRouter,createWebHistory} from  'vue-router'
import Home from "../src/view/Home/Home.vue"
import About from "../src/view/About/About.vue"
import Dashboard from "../src/Backend/Dashbaord/Dashbaord.vue";
import Registration from "../src/view/Auth/Registration.vue"
import Login from "../src/view/Auth/Login.vue"
import NotFound from "../src/view/Errors/NotFound404.vue"


const routes = [
    {
        path:'/',
        name:"Home",
        component:Home
    },
    {
        path:'/about',
        name:"About",
        component:About
    },
    {
        path:'/registration',
        name:"Registration",
        component:Registration,
        meta:{
            requireAuth:false,
        }
    },
    {
        path:'/login',
        name:"Login",
        component:Login,
        meta:{
            requireAuth:false,
        }
    },
    {
        path:'/backend',
        name:"Dashboard",
        component:Dashboard,
        meta:{
            requireAuth:true,
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
});

router.beforeEach((to , from) =>{
    if (to.meta.requireAuth && !localStorage.getItem('token')){
        return{
            name:"Login"
        }
    }
    if (to.meta.requireAuth == false && localStorage.getItem('token')){
        return{
            name:"Dashboard"
        }
    }

})

export default router;
