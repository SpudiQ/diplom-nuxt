<template>
    <form @submit.prevent="signInWithEmail">
        <div class="auth__form__wrapper">
            <input type="text" v-model="email">
            <input type="password" class="mx-2" v-model="password">
            <button type="submit" v-if="!isLoading">Send</button>
            <LoadersCircle v-else />
        </div>
    </form>
</template>

<script setup>
const supabase = useSupabaseClient()
const store = useAuthStore()

const isLoading = ref(false)
const email = ref('')
const password = ref('')

async function signInWithEmail() {
    isLoading.value = true
    supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    .then((res) => {
        console.log(res)
        store.sessionData = res.data.session
        store.ActiveUser = res.data.user
        store.isAuthenticated = true
        navigateTo('/')
    })
    .catch(err => console.error(err))
    .finally(() => isLoading.value = false)
}
</script>

<style></style>