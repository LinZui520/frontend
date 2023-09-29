import { defineStore } from 'pinia'

const useAccountStore = defineStore("account", {
    state: () => ({
        username: '',
        userType: '',
        isLogin: false,
    }),

    getters: {

    },

    actions: {

    }
})



export default useAccountStore