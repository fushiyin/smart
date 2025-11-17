<template>
    <LayoutPC v-if="$vuetify.display.mdAndUp">
        <template #header>
            <AppHeaderPC :user="user" @show-notifications="handleShowNotifications" />
        </template>
        <template #sidebar>
            <AppSidebarPC />
        </template>
        <template #default>
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
    <NotificationListView
        v-if="showNotifications"
        :anchor="notificationAnchor"
        @close="toggleNotifications"
    />
</template>

<script setup>
import { ref } from 'vue'
defineOptions({ name: 'UsersIndexView' })
import LayoutMobile from './components/LayoutMobile.vue'
import LayoutPC from './components/LayoutPC.vue'
import AppHeaderPC from './components/AppHeaderPC.vue'
import AppSidebarPC from './components/AppSidebarPC.vue'
import NotificationListView from '@/components/cards/NotificationListView.vue'
import { useAuthStore } from '@/stores/useAuthStore'

const user = useAuthStore().user
const showNotifications = ref(false)
const notificationAnchor = ref(null)

const handleShowNotifications = (element) => {
    notificationAnchor.value = element
    showNotifications.value = !showNotifications.value
}

const toggleNotifications = () => {
    showNotifications.value = false
}
</script>

<style scoped>
</style>