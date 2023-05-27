import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        loginData: 'working'
    }),
    getters: {},
    actions: {}
})