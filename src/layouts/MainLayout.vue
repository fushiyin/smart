<template>
    <v-responsive>
        <v-app>
            <v-app-bar app color="#1976D2" class="fixed">
                <v-btn icon @click="toggleSidebar">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <v-toolbar-title class="ml-3">Tiền lương</v-toolbar-title>
                <v-spacer />
                <v-text-field
                    hide-details
                    dense
                    solo-inverted
                    rounded
                    placeholder="Tìm kiếm"
                    append-inner-icon="mdi-magnify"
                    style="max-width: 320px"
                />
                <v-avatar color="purple" size="32">NH</v-avatar>
            </v-app-bar>
            <v-navigation-drawer v-model="collapsed" app>
                <v-list>
                    <v-list-item
                        v-for="item in menus"
                        :key="item.path"
                        :to="item.path"
                        :active-class="isActive(item) ? 'v-list-item--active' : ''"
                    >
                        <v-list-item-content>
                            <v-list-item-title>{{ item?.label }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
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

const route = useRoute()
const { menus } = useModuleMenu()
const collapsed = ref(false)
const toggleSidebar = () => (collapsed.value = !collapsed.value)

const isActive = (item) => {
    try {
        return route.path.startsWith(item.path)
    } catch {
        return false
    }
}
</script>
