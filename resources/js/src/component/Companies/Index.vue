<template>
    <!--    <router-link to="/">Go Back</router-link>-->
    <div class="mt-5">

        <div class="container">
            <router-link :to="{name:'Home'}" class="btn btn-info my-4" >Go To Home</router-link>
            <router-link
                :to="{name:'company.create'}"
                class="btn btn-info my-4 float-end d-inline-block"
                >Add New</router-link>


            <div class="row">
                <div class="col">

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="">
                                    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
                                        {{ errors }}
                                    </div>
                                </div>
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <button @click="ModalHide" class="btn btn-warning">hide</button>
                                    <form action="" @submit.prevent="saveCompany">
                                        <div class="mb-3">
                                            <label class="form-label">Name</label>
                                            <input type="email" class="form-control"  placeholder="name@example.com">
                                        </div>
                                        <div class="mb-3">
                                            <label  class="form-label">Email address</label>
                                            <input type="email" class="form-control"  placeholder="name@example.com">
                                        </div>
                                        <div class="mb-3">
                                            <label  class="form-label">Web Address</label>
                                            <input type="email" class="form-control" placeholder="https://www.....com">
                                        </div>
                                        <div class="mb-3">
                                            <label  class="form-label">Address</label>
                                            <textarea class="form-control" rows="3"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col">

                    <table class="table table-striped">
                        <thead>
                        <tr class="bg-dark text-light">
                            <th scope="col">#SL</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Web Url</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value,index) in companies" :key="value.id">
                                <td>{{value.id}}</td>
                                <td>{{value.name}}</td>
                                <td>{{value.email}}</td>

<!--                                <div v-if="username.length < 8 ">Welcome, {{ username }}</div>-->
<!--                                <div v-else>Welcome, {{ username.substring(0,8)+".." }}</div>-->

                                <td>
                                    <span v-if="value.address.length < 10">{{value.address}}</span>
                                    <span v-else>{{value.address.substring(0,8)+"..."}}</span>
                                </td>
                                <td>{{value.website}}</td>
                                <td>{{value.created_at}}</td>
                                <td>
                                    <button class="btn btn-success">View</button>
                                    <router-link :to="{name:'company.edit',params:{id:value.id}}" class="btn btn-success mx-2">Edit</router-link>
                                    <button @click="deleteCompany(value.id)" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

    import useCompanies from "../../../composables/companies.js"
    import {onMounted} from 'vue'
    export default {
        setup(){
            const { getCompanies , companies ,destroyCompany }  = useCompanies();
            const deleteCompany = async (id) => {

                if (!window.confirm('You sure?')) {
                    return
                }
                toast.fire({
                    icon:"success",
                    title:"Delete Success :)"
                })
                await destroyCompany(id)
                await getCompanies()
            }

            onMounted(getCompanies);

            return{
                companies,
                deleteCompany,
            }
        }
    }
</script>











<style scoped>

    /*.deleteBtn{*/
    /*    display: inline-block;*/
    /*    padding: 10px 18px;*/
    /*    background-color: #a01616;*/
    /*    color: white;*/
    /*    font-weight: bold;*/
    /*    font-family: sans-serif;*/
    /*    margin: 50px 15px;*/
    /*}*/
    /*.btn{*/
    /*    display: inline-block;*/
    /*    padding: 10px 18px;*/
    /*    background-color: #16a085;*/
    /*    color: white;*/
    /*    font-weight: bold;*/
    /*    font-family: sans-serif;*/
    /*    margin: 50px 15px;*/
    /*}*/


    /*.styled-table {*/
    /*    border-collapse: collapse;*/
    /*    margin: 25px auto;*/
    /*    font-size: 0.9em;*/
    /*    font-family: sans-serif;*/
    /*    min-width: 400px;*/
    /*    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);*/
    /*    width: 95%;*/
    /*}*/
    /*.styled-table thead tr {*/
    /*    background-color: #009879;*/
    /*    color: #ffffff;*/
    /*    text-align: left;*/
    /*}*/
    /*.styled-table th,*/
    /*.styled-table td {*/
    /*    padding: 12px 15px;*/
    /*}*/
    /*.styled-table tbody tr {*/
    /*    border-bottom: 1px solid #dddddd;*/
    /*}*/

    /*.styled-table tbody tr:nth-of-type(even) {*/
    /*    background-color: #f3f3f3;*/
    /*}*/

    /*.styled-table tbody tr:last-of-type {*/
    /*    border-bottom: 2px solid #009879;*/
    /*}*/
    /*.styled-table tbody tr.active-row {*/
    /*    font-weight: bold;*/
    /*    color: #009879;*/
    /*}*/
</style>
