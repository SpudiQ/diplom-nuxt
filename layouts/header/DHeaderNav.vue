<template>
    <div class="rim-circle">
        <nav class="nav__bar">
            <router-link to="/dashboard" class="nav__item">Dashboard</router-link>
            <router-link to="/users" class="nav__item">Users</router-link>
            <router-link to="/inventory" class="nav__item">Inventory</router-link>
        </nav>
    </div>
</template>
<script setup>
</script>
<style scoped>
.nav__bar {
    border-radius: 300px;
    padding: 24px 0;
    background: #0F1115;
}

.nav__item {
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    margin: 0 20px;
}

.router-link-active {
    padding: 24px 20px;
    margin: 0 !important;
    background: linear-gradient(180deg, rgba(111, 90, 255, 0.8) 0%, rgba(151, 71, 255, 0.8) 49.86%, rgba(255, 55, 151, 0.8) 100%);
    border-radius: 300px;
}
</style>