<template>
    <div class="item_container">
        <div style="display: flex; align-items: center;">
            <div class="status"></div>
            <UsersLogo style="display: flex; align-items: center; padding-right: 5px;" />
            <div class="info">
                <p>FirstName</p>
                <p>LastName</p>
                <p>Patronymic</p>
                <p style="padding: 0 8px 0 0;">Login:</p>
                <p> Admin</p>
                <p style="padding: 0 8px 0 0;">Role:</p>
                <p>Admin</p>
                <p style="padding: 0 8px 0 0;">Computer_Name:</p>
                <p>PC-1</p>
            </div>
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
    width: 100%;
    height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border: 1px solid #FFFFFF;
    border-radius: 24px;

    font-size: 20px;
    color: white;

    margin: 20px 0 0 0;
}

.item__btns {
    display: flex;
    cursor: pointer;
}

.item__btns p {
    margin: 0 10px;
}

.status {
    display: flex;
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
}

.info {
    display: flex;
}

.info p {
    padding: 0 20px 0 0;
}
    
</style>