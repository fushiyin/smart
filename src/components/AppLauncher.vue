<template>
    <v-navigation-drawer
        v-model="model"
        temporary
        width="400"
        z-index="1000"
        class="app-launcher-drawer"
    >
        <v-sheet class="pa-4 fill-height d-flex flex-column">
            <div class="d-flex ga-4 align-center justify-space-between mb-3">
                <v-text-field
                    v-model="query"
                    placeholder="Tìm kiếm"
                    hide-details
                    variant="solo"
                    rounded
                    append-inner-icon="mdi-magnify"
                    style="flex: 1"
                    allowClear
                />
                <v-btn icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>

            <div v-if="query" class="text-subtitle-2 text--secondary mb-3">
                {{ filteredApps.length }} kết quả cho '{{ query || '' }}'
            </div>

            <v-divider class="mb-3" />

            <div class="overflow-auto d-flex flex-column ga-2">
                <div v-for="app in filteredApps" :key="app.key" class="flex-1">
                    <v-card
                        class="pa-4 d-flex flex-column align-center justify-center app-tile"
                        elevation="1"
                        @click="openApp(app)"
                        color="green-darken-3"
                    >
                        <v-icon key="app.icon" size="48" color="white">
                            {{ app.icon }}
                        </v-icon>
                        <div class="mt-2 text-center text-body-2 text-white">{{ app.name }}</div>
                    </v-card>
                </div>
            </div>

            <div class="d-flex align-center justify-space-between mt-auto">
                <div class="text-caption text--secondary">Nhấn Esc để đóng</div>
            </div>
        </v-sheet>
    </v-navigation-drawer>
</template>

<script setup>
import { MODULES_LIST } from '@/utils/constant'
import { ref, computed } from 'vue'
import { useRouter } from 'vuetify/lib/composables/router'

const props = defineProps({
    modelValue: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])
const router = useRouter()

const model = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
})

const query = ref('')

const apps = MODULES_LIST

const filteredApps = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return apps
    return apps.filter((a) => a.name.toLowerCase().includes(q))
})

const close = () => (model.value = false)
const openApp = (app) => {
    router.push(app.route)
    model.value = false
}
</script>

<style scoped>
.app-tile {
    border-radius: 12px;
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease;
}
.app-tile:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
}
.app-launcher-drawer .v-navigation-drawer__content {
    padding: 0;
}
</style>