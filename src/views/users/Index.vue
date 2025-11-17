<template>
    <LayoutPC v-if="$vuetify.display.mdAndUp">
        <template #header>
            <AppHeaderPC :user="user" />
        </template>
        <template #sidebar>
            <AppSidebarPC />
        </template>
        <template #default>
            <h1>User Management</h1>
            <router-view />
        </template>
    </LayoutPC>
    <LayoutMobile v-else>
        <template #header>
            <div>Nhân viên</div>
        </template>
        <template #sidebar>
            <AppSidebarMobile />
        </template>
        <template #default>
            <router-view />
        </template>
    </LayoutMobile>
</template>

<script setup>
defineOptions({ name: 'UsersIndexView' })
import LayoutMobile from './components/LayoutMobile.vue'
import LayoutPC from './components/LayoutPC.vue'
import AppHeaderPC from './components/AppHeaderPC.vue'
import AppSidebarPC from './components/AppSidebarPC.vue'
import { useAuthStore } from '@/stores/useAuthStore'

const user = useAuthStore().user
</script>

<style scoped>
</style>
