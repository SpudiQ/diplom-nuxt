<template>
    <div>
        <slot name="activator" :openModal="openModal"></slot>
        <div v-if="isOpen" class="modal-container" @click.self="closeModal">
            <div class="modal">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
  
<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
})

const isOpen = ref(false);

const openModal = () => {
    isOpen.value = true;
};

const closeModal = () => {
    isOpen.value = false;
};
</script>
  
<style>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.modal {
    background-color: white;
    padding: 20px;
}

.rim {
    border-radius: 24px;
    background: linear-gradient(180deg, rgba(111, 90, 255, 0.8) 0%, rgba(151, 71, 255, 0.8) 43.31%, rgba(255, 55, 151, 0.8) 100%);
    padding: 1px;
}

.btn {
    border-radius: 50px;
    height: 44px;
    padding: 10px;
    background: #0F1115;
    color: white;
    border: none;
    cursor: pointer;
}
</style>
  