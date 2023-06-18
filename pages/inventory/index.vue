<template>
    <div>
        <InventoryList />
    </div>
</template>
<script setup>
definePageMeta({
    middleware: 'auth'
});

useHead({
    title: 'Inventory'
})
</script>
<style></style>