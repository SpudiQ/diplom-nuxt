<template>
    <div class="background">
        <slot />
    </div>
</template>
<script setup>

</script>
<style scoped>
.background {
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, #0F1115 0%, #0F1115 34.23%, #262039 100%);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>