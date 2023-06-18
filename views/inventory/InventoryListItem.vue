<template>
    <div class="item_container">
        <div class="status"></div>
        <div>
            <p>Device: CISCO PS-1</p>
            <p>Hostname: RTR-R</p>
        </div>
        <div class="item__btns">
            <ModalWindow label="Add device">
                <template #activator="{ openModal }">
                    <p @click="openModal">EDIT</p>
                </template>
                <template v-slot:content></template>
            </ModalWindow>
            <ModalWindow label="Add device">
                <template #activator="{ openModal }">
                    <p @click="openModal">DELETE</p>
                </template>
                <template v-slot:content></template>
            </ModalWindow>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.item_container {
    width: 32.6%;
    height: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
    border: 1px solid #FFFFFF;
    border-radius: 24px;

    font-size: 24px;
    color: white;

    margin: 20px 0 0 0;
}

.item_container:nth-child(3n+1) {
    margin: 20px 1% 0 0;
}

.item_container:nth-child(3n+3) {
    margin: 20px 0 0 1%;
}

.item__btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 10px;
    cursor: pointer;
}

.item__btns p{
    margin: 0 10px;
}

.status {
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
}
</style>