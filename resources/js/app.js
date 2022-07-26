import './bootstrap';

import {createApp} from 'vue'
import router from './router/router.js'
import App from "./App.vue"

import store from './state/state.js'

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

window.Swal = Swal;



const toast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:2100,
    timerProgressBar:true,
    closeButtonAriaLabel:true
});



window.toast = toast

    // toast.fire({
    //     icon:'success',
    //     title:"Login Success",
    // })


const app =  createApp(App).use(store).use(router).mount('#app')

