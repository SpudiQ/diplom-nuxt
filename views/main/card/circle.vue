<template>
    <div class="content">
        <div class="circle"></div>
        <div class="info">
            <div class="slot">
                <div class="small___circle"></div>
                <p class="name">Admin</p>
            </div>
            <div class="slot">
                <div class="small___circle"></div>
                <p class="name">Admin</p>
            </div>
            <div class="slot">
                <div class="small___circle"></div>
                <p class="name">Admin</p>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.content {
    display: flex;
    align-items: center;
}

.circle {
    width: 100px;
    height: 100px;
    background: brown;
    border-radius: 100%;
}

.info {
    display: flex;
    flex-direction: column;
    padding-left: 32px;
    gap: 8px;
}

.slot {
    display: flex;
    align-items: center;
    gap: 8px;
}

.small___circle {
    width: 15px;
    height: 15px;
    background: #FF9635;
    border-radius: 100%;
}

.name {
    font-size: 20px;
}
</style>