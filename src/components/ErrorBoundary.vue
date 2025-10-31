<template>
    <div v-if="error">
        <h2 class="text-red-500 font-semibold mb-2">Something went wrong</h2>
        <p>{{ error.message }}</p>
        <button @click="resetError" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
            Retry
        </button>
    </div>
    <slot v-else />
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue'

const error = ref(null)

onErrorCaptured((err) => {
    error.value = err
    return false
})

const resetError = () => (error.value = null)
</script>
