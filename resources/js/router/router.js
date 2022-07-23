import {createRouter,createWebHistory} from  'vue-router'
import Home from "../src/view/Home/Home.vue"
import About from "../src/view/About/About.vue"
import Dashboard from "../src/Backend/Dashbaord/Dashbaord.vue";
import Registration from "../src/view/Auth/Registration.vue"
import Login from "../src/view/Auth/Login.vue"
import NotFound from "../src/view/Errors/NotFound404.vue"
import CompaniesIndex from "../src/component/Companies/Index.vue"
import CompaniesCreate from "../src/component/Companies/Create.vue"
import CompaniesEdit from "../src/component/Companies/Edit.vue"

const routes = [
    {
        path:'/',
        name:"Home",
        component:Home,
        meta:{
            requireAuth:false,
        }
    },
    {
        path:'/about',
        name:"About",
        component:About,
        meta:{
            requireAuth:false,
        }
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
        path: '/companies',
        name: 'companies.index',
        component:CompaniesIndex
    },
    {
        path: '/companies',
        name: 'company.create',
        component:CompaniesCreate
    },
    {
        path: '/companies/:id/edit',
        name: 'company.edit',
        component:CompaniesEdit,
        props: true
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
