<template>
    <v-navigation-drawer
        v-model="model"
        temporary
        width="500"
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
                />
                <v-btn icon @click="close">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </div>

            <div class="text-subtitle-2 text--secondary mb-3">
                {{ filteredApps.length }} kết quả cho '{{ query || '' }}'
            </div>

            <v-divider class="mb-3" />

            <v-row dense class="overflow-auto" style="flex: 1">
                <v-col cols="6" sm="4" v-for="app in filteredApps" :key="app.key">
                    <v-card
                        class="pa-4 d-flex flex-column align-center justify-center app-tile"
                        elevation="1"
                        @click="openApp(app)"
                    >
                        <v-avatar size="48" :style="{ background: app.bg, color: '#fff' }">{{
                            app.icon
                        }}</v-avatar>
                        <div class="mt-2 text-center text-body-2">{{ app.label }}</div>
                    </v-card>
                </v-col>
            </v-row>

            <div class="d-flex align-center justify-space-between mt-3">
                <div class="d-flex gap-2">
                    <v-btn icon><v-icon>mdi-home</v-icon></v-btn>
                    <v-btn icon><v-icon>mdi-cog</v-icon></v-btn>
                </div>
                <div class="text-caption text--secondary">Nhấn Esc để đóng</div>
            </div>
        </v-sheet>
    </v-navigation-drawer>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    modelValue: { type: Boolean, default: false },
})
const emit = defineEmits(['update:modelValue'])

const model = computed({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
})

const query = ref('')

const apps = [
    { key: 1, label: 'Chấm công', icon: '🧬', bg: '#fb923c' },
    { key: 2, label: 'Thông tin nhân sự', icon: '👥', bg: '#60a5fa' },
    { key: 3, label: 'Đánh giá', icon: '⭐', bg: '#34d399' },
    { key: 4, label: 'Hệ thống', icon: '⚙️', bg: '#94a3b8' },
    { key: 5, label: 'Nhân viên', icon: '🧑‍💼', bg: '#a78bfa' },
    { key: 6, label: 'Bảo hiểm xã hội', icon: '🌱', bg: '#22c55e' },
    { key: 7, label: 'Danh bạ', icon: '📞', bg: '#7c3aed' },
    { key: 8, label: 'Thuế TNCN', icon: '🏛️', bg: '#3b82f6' },
    { key: 9, label: 'Mục tiêu', icon: '🎯', bg: '#06b6d4' },
    { key: 10, label: 'Khuyến mại', icon: '％', bg: '#c084fc' },
    { key: 11, label: 'aiMarketing', icon: '🔊', bg: '#fb7185' },
    { key: 12, label: 'CRM', icon: '👥', bg: '#3b82f6' },
]

const filteredApps = computed(() => {
    const q = query.value.trim().toLowerCase()
    if (!q) return apps
    return apps.filter((a) => a.label.toLowerCase().includes(q))
})

const close = () => (model.value = false)
const openApp = (app) => {
    console.log('open app', app)
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