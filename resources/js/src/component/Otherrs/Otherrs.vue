<template>
    <div class="container">
        <h1>This is my others data</h1>

        {{$store.state.bookList}}

        <input type="text" v-model="myData.firstName">
        <input type="text" v-model="myData.lastName">

        <button class="btn btn-warning" @click="getPost">Show</button>

        {{myData.firstName}}
        {{myData.lastName}}

        <h2>{{OnePlusTwo}}</h2>
            <div class="container">
                <div class="row">
                    <div class="col-md-3" v-for="post in postData">

                        <div class="card">
                            <div class="card-body">
                                <h4>{{post.title}}</h4>
                                <p>{{post.body}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


    </div>
</template>

<script>
    import { ref , computed , onMounted} from 'vue'
    export default {
        setup(){
            console.log('im form setup')

            const firstName = "FName"
            const lastName = "LName"

            const dataOne = ref("1")
            const dataTwo = ref("2")

            const postData = ref([])

            console.log(dataOne.value)

            const OnePlusTwo = computed(()=>{
                return `This plus data is  : ${dataOne.value} + ${dataTwo.value}`
            })

            const myData = ref({
                firstName:"On Mounted Value",
                lastName:""
            })

            const getPost = ()=>{

            }

            onMounted(()=>{
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res=>res.json())
                    .then(data=>{
                        postData.value = data
                })
            })

            return{
                firstName,
                lastName,
                myData,
                OnePlusTwo,
                postData,
                getPost,
            }

        },


    }
</script>
