<template>
<!--    <router-link to="/">Go Back</router-link>-->
    <button @click="logout"
        style="padding: 8px 15px;
        background: #55ACEE;
        border:none;
        margin: 30px 50px;
        color: white;
        font-weight: bold;
        cursor: pointer;
    ">Logout</button>
    <table class="styled-table" border>
        <tr>
            <th>sl</th>
            <th>name</th>
            <th>email</th>
            <th>action</th>
        </tr>

        <tr v-for="value in users" >
            <td>{{value.user_name}}</td>
            <td>{{value.email}}</td>
            <td>{{value.created_at}}</td>
            <td>
                <router-link to="" @click="alert('view')">View</router-link>
                <router-link to="" @click="delete(value.id)">View</router-link>
            </td>
        </tr>

    </table>
</template>

<script>
    import {useRouter} from "vue-router"
    export default {
        setup(){
            const router = useRouter()
            const logout =  ()=>{
                localStorage.removeItem('token')
                toast.fire({
                    icon:'success',
                    title:"Logout Success "
                })
                router.push({name:'Home'})

            }
            return{
                logout,
            }
        },

        data(){
            return{
                users:[]
            }
        },
        methods:{
            delete(id){
              alert(id);
            },
            getUsers(){
                axios.get('api/v1/users').then((response)=>{
                    if (response.data.status === true){
                       this.users = response.data.data;
                    }else {
                        console.log(response.data.status);
                    }
                });
            }
        },
        created() {
            this.getUsers();
        }
    }
</script>
<style scoped>
    .styled-table {
        border-collapse: collapse;
        margin: 25px auto;
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 400px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        width: 95%;
    }
    .styled-table thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }
    .styled-table th,
    .styled-table td {
        padding: 12px 15px;
    }
    .styled-table tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    .styled-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }

    .styled-table tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }
    .styled-table tbody tr.active-row {
        font-weight: bold;
        color: #009879;
    }
</style>
