    import {ref} from 'vue'
    import axios from 'axios'
    import {useRouter} from 'vue-router'


    export  default function useCompanies() {
        const  company = ref([])
        const  companies  = ref([])

        const errors = ref('')
        const router = useRouter()

        const getCompanies = async ()=>{
            let response = await axios.get('/api/companies')
            companies.value = response.data.data
        }

        const getCompany = async (id) => {
            let response = await axios.get(`/api/companies/${id}`)
            company.value = response.data.data
        }

        const storeCompany = async (data) => {
            errors.value = ''

            try {
                await axios.post('/api/companies', data)
                toast.fire({
                    icon:"success",
                    title:"Created Success :)"
                })
                await router.push({ name: 'companies.index' })
            } catch (e) {
                if (e.response.status === 422) {
                    for (const key in e.response.data.errors) {
                        toast.fire({
                            icon:"error",
                            title:"Created Faild :("
                        })
                        errors.value += e.response.data.errors[key][0] + ' ';
                    }
                }
            }
        }

        const updateCompany = async (id) => {
            errors.value = ''
            try {
                await axios.patch(`/api/companies/${id}`, company.value)
                toast.fire({
                    icon:"success",
                    title:"Updated Success :)"
                })
                await router.push({ name: 'companies.index' })
            } catch (e) {
                if (e.response.status === 422) {
                    toast.fire({
                        icon:"error",
                        title:"Created Faild :("
                    })
                    for (const key in e.response.data.errors) {
                        errors.value += e.response.data.errors[key][0] + ' ';
                    }
                }
            }
        }

        const destroyCompany = async (id) => {
            await axios.delete(`/api/companies/${id}`)
        }

        return {
            errors,
            company,
            companies,
            getCompany,
            getCompanies,
            storeCompany,
            updateCompany,
            destroyCompany
        }
    }

// export default useCompanies();
