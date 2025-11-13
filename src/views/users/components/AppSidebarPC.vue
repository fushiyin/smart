<template>
    <aside class="sidebar-root flex">
        <nav class="sidebar-menu flex flex-col w-auto">
            <div class="flex gap-1 h-100">
                <button
                    v-for="(item, i) in menu"
                    :key="item.label"
                    :class="[
                        'menu-item py-2 px-3 d-flex align-center ga-2',
                        {
                            'active bg-white font-weight-black text-grey-darken-4':
                                active === item.key,
                        },
                    ]"
                    @click="active = item.key"
                >
                    <span class="icon">
                        <v-icon size="24" :color="active === item.key ? 'grey-darken-4' : 'white'">
                            {{ item.icon }}
                        </v-icon>
                    </span>
                    <span class="label">{{ item.label }}</span>
                </button>
            </div>
            <div v-if="selectedSubMenu.length" class="sub-menu flex-1 bg-grey-lighten-3">
                <div
                    v-for="sub in selectedSubMenu"
                    :key="sub.key"
                    class="sub-menu d-flex align-center pa-2 mb-2 cursor-pointer"
                    :class="{ 'bg-white font-weight-black text-grey-darken-4': active === sub.key }"
                    @click="active = sub.key"
                >
                    <span class="icon">
                        <v-icon size="20" :color="active === sub.key ? 'grey-darken-4' : 'white'">
                            {{ sub.icon }}
                        </v-icon>
                    </span>
                    <span class="label ml-2">{{ sub.label }}</span>
                </div>
            </div>
        </nav>
    </aside>
</template>

<script setup>
import { computed, ref } from 'vue'

const menu = [
    {
        label: 'HOME',
        icon: 'mdi-file',
        key: 'home',
    },
    {
        label: 'WORKING',
        icon: 'mdi-account',
        children: [
            { label: 'Dashboard', icon: 'mdi-view-dashboard-outline', key: 'dashboard' },
            { label: 'Home Page', icon: 'mdi-home-outline', key: 'homePage' },
            { label: 'General Dashboard', icon: 'mdi-view-dashboard', key: 'generalDashboard' },
            { label: 'Reports', icon: 'mdi-file-chart', key: 'reports' },
        ],
    },
    { label: 'REQUEST', icon: 'mdi-timer' },
    { label: 'PROFILE', icon: 'mdi-file-document-outline' },
    { label: 'HISTORY', icon: 'mdi-currency-usd' },
    { label: 'NOTIFICATIONS', icon: 'mdi-hand-heart' },
]
const active = ref('home')
const selectedSubMenu = computed(() => {
    const currentMenu = menu.find((item) => item.key === active.value)
    return currentMenu?.children || []
})
</script>

<style lang='scss' scoped>
.sidebar-root {
    display: flex;
    position: relative;
    color: #fff;
    height: 100%;
}
.sidebar-menu {
    flex: 1;
    display: flex;
    min-width: max-content;
    .sub-menu {
        padding: 8px 12px;
        font-size: 13px;
        background: #9ca3af;
        width: 100%;
        flex: 1;
    }
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