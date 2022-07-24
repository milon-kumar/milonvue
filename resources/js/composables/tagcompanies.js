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

    return{
        tags,
        tag,
        errors,
        route,
        getTags,
    }
}
