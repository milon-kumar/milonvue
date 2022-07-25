import {ref} from 'vue'
import { useRouter } from 'vue-router'
import axios from "axios";

export default function tagCompanies(){

    const tags = ref([])
    const tag = ref([])

    const errors = ref('')
    const route = useRouter()

    const getTags = async () => {
        await axios.get('/api/v1/tags').then(response=>{
            tags.value = response.data.data
        });
    }

    const storeTag = async (data)=>{

        console.log(data);
        errors.value=''
        try {
            await axios.post('/api/v1/tags',data).then(response=>{
                toast.fire({
                    icon:"success",
                    title:"Tag Saved :)"
                })
            })
        }catch (e) {
            if (e.response.status === 422){
                for (const key in e.response.data.errors){
                    toast.fire({
                        icon:"error",
                        title:"Created Faild :("
                    })
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    return{
        tags,
        tag,
        errors,
        route,
        getTags,
        storeTag,
    }
}
