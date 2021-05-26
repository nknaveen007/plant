import axios from 'axios'

const instance=axios.create({
    baseURL:'http://Tata.appwebsite.co.in/api/'
})

export default instance