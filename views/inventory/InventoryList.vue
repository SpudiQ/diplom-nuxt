<template>
    <div class="container">
        <div style="display: flex; margin: 10px 0;">
            <div class="rim" style="margin-right: 10px;">
                <input type="text" class="field" style="">
            </div>
            <ModalWindow label="Add device">
                <template #activator="{ openModal }">
                    <div class="rim">
                        <button class="btn" @click="openModal">Add device</button>
                    </div>
                </template>
                <template v-slot:content></template>
            </ModalWindow>
        </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; padding: 20px 32px; ">
        <InventoryListItem v-for="n in 4" />
    </div>
</template>

<script setup>

</script>

<style scoped>
.container {
    padding: 20px 32px;
}

.rim {
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(111, 90, 255, 0.8) 0%, rgba(151, 71, 255, 0.8) 43.31%, rgba(255, 55, 151, 0.8) 100%);
    padding: 1px;
}

.field {
    width: 800px;
    height: 42px;
    outline: none;
    background: #0F1115;
    border-radius: 24px;
    padding: 15px;
    border: none;
    font-size: 24px;
}

.field:focus {
    outline: none;
    background: white;
}

.btn {
    border-radius: 50px;
    height: 42px;
    padding: 10px;
    background: #0F1115;
    color: white;
    border: none;
    cursor: pointer;
}
</style>