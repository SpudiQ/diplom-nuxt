<template>
    <div class="container">
        <div style="display: flex; justify-content: space-between; margin: 10px 0;">
            <div style="display: flex;">
                <div class="rim" style="margin-right: 10px;">
                    <input type="text" class="field" style="">
                </div>

                <div class="current__users">
                    <p style="padding-right: 8px;">Current:</p>
                    <p>2/40</p>
                </div>
            </div>
            <ModalWindow label="Add user">
                <template #activator="{ openModal }">
                    <div class="rim">
                        <button class="btn" @click="openModal">Create User</button>
                    </div>
                </template>
                <template v-slot:content></template>
            </ModalWindow>
        </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; padding: 20px 32px; ">
        <UsersListItem v-for="n in 4" />
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

.current__users {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: #fff;
    padding: 0 10px 0 10px;
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