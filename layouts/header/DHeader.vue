<template>
    <div class="header">
        <DHeaderLogo />
        <DHeaderNav />
        <DHeaderProfile />
    </div>
</template>
<script setup>
import DHeaderLogo from './DHeaderLogo.vue'
import DHeaderNav from './DHeaderNav.vue'
import DHeaderProfile from './DHeaderProfile.vue'
</script>
<style scoped>
.header {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 32px;
}
</style>