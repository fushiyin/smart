<template>
    <aside class="sidebar-root bg-blue-darken-3">
        <nav class="sidebar-menu">
            <button
                v-for="(item, i) in menu"
                :key="item.label"
                :class="[
                    'menu-item py-2 px-3 d-flex align-center ga-2',
                    { 'active bg-white font-weight-black text-grey-darken-4': active === i },
                ]"
                @click="active = i"
            >
                <span class="icon">
                    <v-icon size="24" :color="active === i ? 'grey-darken-4' : 'white'">{{
                        item.icon
                    }}</v-icon>
                </span>
                <span class="label">{{ item.label }}</span>
            </button>
        </nav>
        <div class="sidebar-bottom">
            <button class="collapse-btn"><span class="arrow">&lt;</span> Thu gọn</button>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const menu = [
    { label: 'Overview', icon: 'mdi-file' },
    { label: 'Profile', icon: 'mdi-account' },
    { label: 'Check-in', icon: 'mdi-timer' },
    { label: 'Form Request', icon: 'mdi-file-document-outline' },
    { label: 'Payroll Records', icon: 'mdi-currency-usd' },
    { label: 'Benefits', icon: 'mdi-hand-heart' },
    { label: 'Shared Knowledge', icon: 'mdi-book-open-page-variant' },
]
const active = ref(0)
</script>

<style scoped>
.sidebar-root {
    width: 220px;
    display: flex;
    flex-direction: column;
    position: relative;
    color: #fff;
    padding: 12px;
    height: 100%;
}
.sidebar-menu {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.menu-item {
    width: 100%;
    font-size: 15px;
    cursor: pointer;
    border-radius: 8px;
    margin-bottom: 2px;
    transition: background 0.2s, color 0.2s;
    font-weight: 900;
    margin-bottom: 2px;
}
.icon {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.label {
    flex: 1;
    text-align: left;
}
.sidebar-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.collapse-btn {
    background: rgba(255, 255, 255, 0.08);
    color: #e5e7eb;
    border: none;
    border-radius: 8px;
    padding: 8px 18px;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;
}
.arrow {
    font-size: 18px;
}
.sidebar-bg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 160px;
    z-index: 1;
}
.sidebar-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
}
</style>