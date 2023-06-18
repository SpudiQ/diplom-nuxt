<template>
    <div class="button">
        <button class="btn">Manage</button>
    </div>
</template>
<script setup>
</script>
<style>
    .button {
        display: flex;
        justify-content: center;
    }
    .btn {
        font-size: 20px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 300px;
        padding: 4px 28px;
        background-color: transparent;
        transition: 0.3s all;
    }

    .btn:hover {
        transform: scale(1.1);
    }
</style>