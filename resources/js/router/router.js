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
import BlogIndex from "../src/component/Blog/Index.vue"
import BlogEdit from "../src/component/Blog/Edit.vue"
import BlogCreate from "../src/component/Blog/Create.vue"
import TagIndex from "../src/component/Tag/Index.vue"
import TagCreate from "../src/component/Tag/Create.vue"
import TagEdit from "../src/component/Tag/Edit.vue"
import Otherrs from "../src/component/Otherrs/Otherrs.vue"



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
        component:CompaniesIndex,
        meta:{
            requireAuth:true,
        }
    },
    {
        path: '/companies',
        name: 'company.create',
        component:CompaniesCreate,
        meta:{
            requireAuth:true,
        }
    },
    {
        path: '/companies/:id/edit',
        name: 'company.edit',
        component:CompaniesEdit,
        props: true
    },

    // Backend Route Here

    {
        path: "/blogs",
        name: "blog.index",
        component: BlogIndex,
        meta: {
            requireAuth: true
        }
    },{
        path: "/blogs",
        name: "blog.create",
        component: BlogCreate,
        meta: {
            requireAuth: true
        }
    },
    {
        path: "/blog/:id/edit",
        name: "blog.edit",
        component: BlogEdit,
        meta: {
            requireAuth: true,
        }
    },


    // Tag Router
    {
        path: "/tags",
        name: "tag.index",
        component: TagIndex,
        meta: {
            requireAuth: true
        }
    },{
        path: "/tags",
        name: "tag.create",
        component: TagCreate,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/tag/:id/edit',
        name: 'tag.edit',
        component:TagEdit,
        props: true,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/others',
        name: 'otherText',
        component:Otherrs,
        meta: {
            requireAuth: true
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
