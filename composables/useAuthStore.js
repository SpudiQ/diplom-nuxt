import { defineStore } from 'pinia'

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        isAuthenticated: false,
        ActiveUser: {},
        sessionData: {}
    }),
    getters: {},
    actions: {

    }
})