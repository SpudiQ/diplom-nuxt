<template>
    <div class="card">
        <h1 class="title">{{ title }}</h1>
        <div class="sub__title">
            <h2>{{ total }}</h2>
            <h2>434</h2>
        </div>
        <Circle />
        <div class="sub__title">
            <h2>{{ status }}</h2>
            <h2>434</h2>
        </div>
        <ButtonManage />
    </div>
</template>
<script setup>
import ButtonManage from './card/button.vue'
import Circle from './card/circle.vue'
const props = defineProps({
    title: String,
    total: String,
    status: String,
})
</script>
<style scoped>
* {
    color: #fff;
}

.card {
    width: 360px;
    height: 380px;
    margin-bottom: 20px;
    padding: 10px 30px;
    border: 1px solid #fff;
    border-radius: 50px;
    background: transparent;
}

.title {
    text-align: center;
    font-size: 32px;
    padding: 10px 0;
}

.sub__title {
    display: flex;
    gap: 10px;
    padding: 20px 0;
}

h2 {
    font-size: 24px;
    font-weight: 500;
}
</style>