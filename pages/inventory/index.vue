<template>
    <InventoryList />
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
});

useHead({
  title: 'Inventory'
})
</script>
<style>
    
</style>