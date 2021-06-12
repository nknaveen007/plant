import axios from 'axios'

const instance=axios.create({
    baseURL:'http://mop.tataadvancedsystems.com/api'
})


export default instance