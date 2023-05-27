<template>
    <div style="color: white">
        login
        {{ store.loginData }}
    </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const store = useAuthStore()
</script>

<style scoped>
    
</style>