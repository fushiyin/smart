<template>
    <div>
        <button
            class="sidebar-item"
            :class="{
                active:
                    active === item.key ||
                    (item.children && item.children.some((sub) => sub.key === active)),
            }"
            @click="item.children ? toggleExpand() : $emit('select', item.key)"
        >
            <v-icon size="20" :color="active === item.key ? 'white' : '#c7d2fe'">{{
                item.icon
            }}</v-icon>
            <span class="sidebar-label">{{ item.label }}</span>
            <v-icon
                v-if="item.children"
                size="18"
                class="ml-auto"
                color="#c7d2fe"
                @click.stop="toggleExpand"
            >
                {{ expanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            </v-icon>
        </button>
        <div v-if="item.children && expanded" class="sidebar-submenu">
            <SidebarMenuItem
                v-for="sub in item.children"
                :key="sub.key"
                :item="sub"
                :active="active"
                @select="$emit('select', $event)"
                class="sub-menu"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const props = defineProps(['item', 'active'])
const expanded = ref(false)
watch(
    () => props.active,
    (val) => {
        if (props.item.children?.some((sub) => sub.key === val)) expanded.value = true
    }
)
function toggleExpand() {
    expanded.value = !expanded.value
}
</script>

<style scoped>
.sidebar-item {
    width: 100%;
    background: none;
    border: none;
    color: #fff;
    font-size: 15px;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    margin-bottom: 2px;
    position: relative;
}
.sidebar-item.active {
    background: linear-gradient(90deg, #6366f1 60%, #7c3aed 100%);
    color: #fff;
    font-weight: 700;
}
.sidebar-item.active.parent-active {
    background: linear-gradient(90deg, #6366f1 60%, #7c3aed 100%);
    color: #fff;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.12);
}
.sidebar-item.active.sub-active {
    background: #fff;
    color: #6366f1;
    font-weight: 700;
    box-shadow: none;
}
.sidebar-label {
    flex: 1;
    text-align: left;
}
.sidebar-submenu {
    margin-left: 24px;
    margin-top: 2px;
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    padding-left: 12px;
}
.sub-menu .sidebar-item.active {
    background: linear-gradient(90deg, #6366f1 60%, #7c3aed 100%);
    color: white;
    font-weight: 700;
}
</style>