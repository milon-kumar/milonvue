<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 offset-2">
                <div class="card mt-3">
                    <div class="card-header">
                        Save Tag
                    </div>
                    <div class="card-body">
                        <div class="">
                            <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
                                <div class="alert alert-danger">
                                    {{errors}}
                                </div>
                                <!--                                {{ errors }}-->
                            </div>
                        </div>
                        <form action="" @submit.prevent="saveTag">
                            <div class="mb-3">
                                <label class="form-label">Title</label>
                                <input type="text" class="form-control" v-model="form.title"  placeholder="Name">
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Description</label>
                                <textarea class="form-control" v-model="form.body" rows="3"></textarea>
                            </div>
<!--                            <div class="mb-3">-->
<!--                                <label  class="form-label">image</label>-->
<!--                                <input type="file" class="form-control" v-model="form.image"  placeholder="image">-->
<!--                            </div>-->
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" checked value='published'  type="radio" v-model="form.status" id="flexRadioDefault1">
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Published
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value ='unpublished' id="flexRadioDefault2" v-model="form.status">
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Unpublished
                                    </label>
                                </div>
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
    import tagCompanies from "../../../composables/tagcompanies.js";
    import { reactive } from 'vue'
    export default {
        setup(){
            const {errors,storeTag} = tagCompanies()

            const form = reactive({
                'title':'',
                'body':'',
                'status':[],
            })
            const saveTag = async ()=>{
                await storeTag({...form})
            }
            return{
                form,
                saveTag,
                errors
            }
        },
    }
</script>
