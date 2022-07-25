<template>
    <div class="container py-5 my-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        Tags Table
                        <router-link class="btn btn-primary btn-sm" :to="{name: 'tag.create'}">Create</router-link>
                    </div>

                    <div class="card-body">
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>SL</th>
                                    <th>Title</th>
                                    <th>Tag Description</th>
                                    <th>Image</th>
                                    <th>status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(tag,index ) in tags" :key="index">
                                    <td>{{index+1}}</td>
                                    <td>{{tag.title}}</td>
                                    <td>{{tag.body}}</td>
                                    <td>{{}}</td>
                                    <td>
                                        <span v-if="tag.status === 1" class="badge bg-success">Published</span>
                                        <span v-else class="badge bg-danger">Unpublished</span>
                                    </td>
                                    <td>
                                        <router-link to="" class="btn btn-primary btn-sm mx-2">
                                            view
                                        </router-link>
                                        <router-link :to="{name:'tag.edit',params: {id:tag.id}}" class="btn btn-primary btn-sm mx-2">Edit</router-link>
                                        <router-link to="" class="btn btn-danger btn-sm mx-2">Delete</router-link>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    import tagCompanies from "../../../composables/tagcompanies.js"
    import {onMounted} from 'vue'

    export default {

        setup(){

            const {tags,getTags} = tagCompanies()

            onMounted(getTags())

            return{
                tags,
            }
        }
    }
</script>
