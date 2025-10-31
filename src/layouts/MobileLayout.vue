<template>
    <div class="flex flex-col min-h-screen bg-gray-50">
        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto p-4">
            <slot />
        </main>

        <!-- Bottom Navigation -->
        <nav
            class="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2"
        >
            <button
                v-for="tab in tabs"
                :key="tab.path"
                class="flex flex-col items-center text-xs"
                :class="{
                    'text-green-600': currentRoute === tab.path,
                    'text-gray-500': currentRoute !== tab.path,
                }"
                @click="go(tab.path)"
            >
                <span>{{ tab.icon }}</span>
                <span>{{ tab.label }}</span>
            </button>
        </nav>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const tabs = [
    { label: 'Tổng quan', icon: '🏠', path: '/dashboard' },
    { label: 'Lương', icon: '💰', path: '/payroll' },
    { label: 'Chấm công', icon: '🕒', path: '/attendance' },
    { label: 'Hồ sơ', icon: '👤', path: '/profile' },
]

const currentRoute = computed(() => route.path)
const go = (path) => router.push(path)
</script>
