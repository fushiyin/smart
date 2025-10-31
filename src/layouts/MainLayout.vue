<template>
    <div class="flex min-h-screen bg-gray-50 text-gray-800">
        <!-- Sidebar -->
        <aside
            class="w-64 bg-white shadow-md flex flex-col fixed inset-y-0 left-0 z-20 transition-transform duration-300"
            :class="{ '-translate-x-full': !sidebarOpen }"
        >
            <div class="p-4 font-bold text-lg border-b">HR Portal</div>
            <nav class="flex-1 overflow-y-auto">
                <ul>
                    <li
                        v-for="item in menu"
                        :key="item.path"
                        class="p-3 hover:bg-green-100 cursor-pointer flex items-center space-x-2"
                        @click="go(item.path)"
                    >
                        <span>{{ item.label }}</span>
                    </li>
                </ul>
            </nav>
            <div class="p-4 border-t text-sm text-gray-500">© 2025 Company</div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 ml-64 flex flex-col">
            <!-- Header -->
            <header class="h-14 bg-white border-b flex items-center justify-between px-4">
                <div class="flex items-center space-x-3">
                    <button
                        class="p-2 rounded-md hover:bg-gray-100 md:hidden"
                        @click="sidebarOpen = !sidebarOpen"
                    >
                        ☰
                    </button>
                    <h1 class="font-semibold text-lg">{{ title }}</h1>
                </div>

                <div class="flex items-center space-x-3">
                    <button class="p-2 hover:bg-gray-100 rounded-full">🔔</button>
                </div>
            </header>

            <!-- Content -->
            <main class="flex-1 overflow-y-auto p-4">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const sidebarOpen = ref(true)

const menu = [
    { label: 'Tổng quan', path: '/dashboard' },
    { label: 'Tiền lương', path: '/payroll' },
    { label: 'Chấm công', path: '/attendance' },
    { label: 'Tuyển dụng', path: '/recruitment' },
    { label: 'Bảo hiểm', path: '/insurance' },
    { label: 'Hệ thống', path: '/system' },
]

const title = 'Tổng quan'
const go = (path) => router.push(path)
</script>
