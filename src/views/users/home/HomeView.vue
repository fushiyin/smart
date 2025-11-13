<template>
    <div class="app-container"></div>
</template>

<script setup>
</script>

<style scoped>
.app-container {
    background: #5fa8f1;

    padding: 32px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media (max-width: 600px) {
    .app-container {
        padding: 18px 0 0 0;
    }
}
</style>
