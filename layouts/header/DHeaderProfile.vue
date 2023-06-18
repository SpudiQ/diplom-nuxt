<template>
    <div class="rim-circle" style="position: absolute; right: 32px;">
        <div class="profile" style="background-color: #0F1115; border-radius: 300px;">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F74%2F67%2FIme3yv.jpg&f=1&nofb=1&ipt=6e3020b0e05102313a2ac0d1a0f8516148cbf10abe91224433f2ce2f86803954&ipo=images" alt="avatar">
            <Logout />
        </div>
    </div>
</template>
<script setup>
import Logout from './Logout.vue'
</script>
<style scoped>
.profile {
    display: flex;
    align-items: center;
}
img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 300px;
}
</style>