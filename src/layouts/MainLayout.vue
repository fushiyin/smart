<template>
    <v-responsive>
        <v-app>
            <v-app-bar height="48" app color="indigo-lighten-1" class="fixed pr-5">
                <v-btn icon @click="toggleMenu">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <v-toolbar-title class="ml-3">Tiền lương</v-toolbar-title>
                <v-spacer />
                <v-text-field
                    class="mr-5"
                    hide-details
                    density="compact"
                    variant="solo"
                    placeholder="Tìm kiếm"
                    append-inner-icon="mdi-magnify"
                    style="max-width: 320px"
                />
                <v-avatar color="purple" size="32">NH</v-avatar>
            </v-app-bar>

            <AppLauncher v-model="showMenu" />

            <v-navigation-drawer app :width="collapsed ? 64 : 220" style="padding: 10px">
                <div class="d-flex flex-column h-100">
                    <div class="d-flex flex-column">
                        <div v-for="menu in menus" :key="menu.label">
                            <div
                                @click="$router.push(menu.path)"
                                :class="{
                                    'flex gap-2 w-full py-2 cursor-pointer rounded-lg': true,
                                    'bg-indigo-darken-1 rounded-r-lg': isActive(menu),
                                    'px-4': !collapsed,
                                    'text-center': collapsed,
                                }"
                            >
                                <v-icon :color="isActive(menu) ? 'white' : 'grey'">{{
                                    menu.icon
                                }}</v-icon>
                                <span
                                    v-if="!collapsed"
                                    :class="{
                                        'ml-2': true,
                                        'text-white font-medium': isActive(menu),
                                        'text-gray-600': !isActive(menu),
                                    }"
                                >
                                    {{ menu.label }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div
                        @click="toggleSidebar"
                        class="w-full items-center text-center py-2 cursor-pointer rounded-lg bg-indigo-lighten-1 mt-auto"
                    >
                        <v-icon>
                            {{ collapsed ? 'mdi-chevron-right' : 'mdi-chevron-left' }}
                        </v-icon>
                        <span v-if="!collapsed">Đóng</span>
                    </div>
                </div>
            </v-navigation-drawer>

            <v-main>
                <v-container>
                    <router-view />
                </v-container>
            </v-main>
        </v-app>
    </v-responsive>
</template>

<script setup>
import { ref } from 'vue'
import { useModuleMenu } from '@/composables/useModuleMenu'
import { useRoute } from 'vue-router'
import AppLauncher from '@/components/AppLauncher.vue'

const route = useRoute()
const { menus } = useModuleMenu()
const collapsed = ref(false)
const showMenu = ref(false)
const toggleSidebar = () => (collapsed.value = !collapsed.value)

const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

const isActive = (item) => {
    try {
        return route.path.startsWith(item.path)
    } catch {
        return false
    }
}
</script>

<style scoped>
.v-list-item {
    padding: 0 !important;
}

.v-list-item-icon {
    min-width: 40px;
}
</style>
