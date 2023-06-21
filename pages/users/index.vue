<template>
    <div>
      <UsersList />
    </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
});

useHead({
  title: 'Users'
})
</script>
<style>
    
</style>