<template>
    <div class="background">
        <DHeader />
        <slot />
    </div>
</template>
<script setup>
import DHeader from './header/DHeader.vue'

</script>
<style scoped>
    .background {
        height: 100vh;
        width: 100%;
        background: linear-gradient(180deg, #0F1115 0%, #0F1115 34.23%, #262039 100%);
    }
</style>