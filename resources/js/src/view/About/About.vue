<template>
    <h1>This is my about</h1>

    <router-link class="btn" to="/">Go Back To Home</router-link>
    <router-link class="btn" :to="{name:'companies.index'}">All Companies Data</router-link>
    <router-link class="btn" to="/">Go Back To Home</router-link>


</template>


<style scoped>

    .btn{
        display: inline-block;
        padding: 10px 18px;
        background-color: #16a085;
        color: white;
        font-weight: bold;
        font-family: sans-serif;
        margin: 50px 15px;
    }
</style>
