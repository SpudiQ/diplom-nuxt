export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    const store = useAuthStore()

    if (store.isAuthenticated === false) {
        return navigateTo('/login')
    }
})