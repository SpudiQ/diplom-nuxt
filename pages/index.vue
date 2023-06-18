<template>
  <div class="content">
    <div class="cards">
      <MainCard title="Users Stats" total="Total Users" status="Disable Users" />
      <MainCard title="Inventory Stats" total="Total Machines" status="Active Machines" />
    </div>
    <div class="info">
      <About />
      <Update />
    </div>
  </div>
</template>

<script setup>
import About from '@/views/main/About.vue'
import Update from '@/views/main/Update.vue'
definePageMeta({
  middleware: 'auth'
});
</script>

<style scoped>
.content {
  display: flex;
  padding: 20px 32px;
  height: 85%;
  overflow-y: hidden;
}

.cards {
  display: flex;
  flex-direction: column;
  padding-right: 20px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>