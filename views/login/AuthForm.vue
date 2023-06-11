<template>
    <form @submit.prevent="signInWithEmail" class="auth__form">
        <h1 class="title">UManage</h1>
        <div class="auth__form__wrapper">
            <div style="border-radius: 24px; background: linear-gradient(180deg, rgba(111, 90, 255, 0.8) 0%, rgba(151, 71, 255, 0.8) 43.31%, rgba(255, 55, 151, 0.8) 100%); padding: 1px;">
                <input type="text" v-model="email" class="field">
            </div>
            <div style="border-radius: 24px; background: linear-gradient(180deg, rgba(111, 90, 255, 0.8) 0%, rgba(151, 71, 255, 0.8) 43.31%, rgba(255, 55, 151, 0.8) 100%); padding: 1px;">
                <input type="password" class="field" v-model="password">
            </div>
            <button type="submit" v-if="!isLoading" class="btn__login">Войти</button>
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
            store.sessionData = res.data.session
            store.ActiveUser = res.data.user
            store.isAuthenticated = true
            navigateTo('/')
        })
        .catch(err => console.error(err))
        .finally(() => isLoading.value = false)
}
</script>

<style scoped>
.auth__form {
    padding: 60px 80px;

    background: rgba(23, 23, 23, 0.3);
    border: 2px solid #2A2B33;
    border-radius: 24px;
    transform: matrix(1, 0, 0.01, 1, 0, 0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    font-size: 48px;
    font-weight: 600;
    background: linear-gradient(180deg, rgba(111, 90, 255, 0.8) 0%, rgba(151, 71, 255, 0.8) 49.86%, rgba(255, 55, 151, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 40px;

}

.auth__form__wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.field {
    width: 500px;
    height: 45px;
    outline: none;
    background: #F0F0F0;
    border-radius: 24px;
    padding: 15px;
    border: none;
    font-size: 24px;
}

.btn__login {
    background: linear-gradient(180deg, rgba(111, 90, 255, 0.8) 0%, rgba(151, 71, 255, 0.8) 43.31%, rgba(255, 55, 151, 0.8) 100%);
    border: none;
    border-radius: 25px;
    width: 150px;
    padding: 12px 0;
    color: #F0F0F0;
    font-size: 28px;
    font-weight: 400;
    margin: 0 auto;
}
</style>