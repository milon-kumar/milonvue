<template>
    <h1>This  blog index</h1>
    <router-link :to="{name: 'blog.create'}">Create</router-link>
    <router-link :to="{name:'blog.edit',params:{ id:1 }}">Edit</router-link>
</template>
