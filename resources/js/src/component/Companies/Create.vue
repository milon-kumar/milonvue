<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-2">
                <div class="card mt-3">
                    <div class="card-header">
                        Add Compani Data
                    </div>
                    <div class="card-body">
                        <div class="">
                            <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
                                <span v-for="error in errors">
                                    {{error}}
                                </span>
<!--                                {{ errors }}-->
                            </div>
                        </div>
                        <form action="" @submit.prevent="saveCompany">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" v-model="form.name"  placeholder="Name">
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Email address</label>
                                <input type="email" class="form-control"  v-model="form.email" placeholder="name@example.com">
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Web address</label>
                                <input type="url" class="form-control" v-model="form.website"  placeholder="https://www.demo.com">
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Address</label>
                                <textarea class="form-control" v-model="form.address" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-dark">Save Data</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import useCompanies from "../../../composables/companies.js"
    import {reactive} from 'vue'

    export default {
        setup(){
            const form = reactive({
                name:'',
                email:'',
                address:'',
                website:'',
            })

            const {errors,storeCompany} = useCompanies();
            const saveCompany = async () => {
                await storeCompany({ ...form })
            }


            return{
                form,
                saveCompany,
                errors
            }
        }
    }
</script>
