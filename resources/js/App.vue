<template>
    <navbar></navbar>
    <router-view></router-view>
</template>
<script>
    import Navbar from "./src/layout/Navbar.vue"
    export default {
        components:{
            Navbar,
        }
    }
</script>
