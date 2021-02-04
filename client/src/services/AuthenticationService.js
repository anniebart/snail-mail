import Api from './Api.js'

export default {
    register(credentials){
        return Api().post('signup', credentials)
    },
    login(credentials){
        return Api().post('login', credentials)
    },

}