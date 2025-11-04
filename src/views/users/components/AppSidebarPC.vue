<template>
    <aside class="pc-sidebar">
        <div class="sidebar-top">
            <input v-model="q" placeholder="Search users, roles..." class="search" />
            <div class="quick-actions">
                <button class="action" @click="$emit('create')">+ New</button>
                <button class="action outline" @click="$emit('import')">Import</button>
            </div>
        </div>

        <nav class="nav-sections">
            <div class="section" v-for="(group, idx) in groups" :key="group.id || idx">
                <div class="section-header" @click="toggleGroup(idx)">
                    <strong>{{ group.title }}</strong>
                    <span class="count">{{ group.items.length }}</span>
                    <button class="chev">{{ open[idx] ? '▾' : '▸' }}</button>
                </div>

                <ul v-show="open[idx]" class="section-list">
                    <li
                        v-for="item in filteredItems(group.items)"
                        :key="item.id"
                        class="section-item"
                        @click="$emit('select', item)"
                    >
                        <img :src="item.avatar" alt="avatar" class="avatar" />
                        <div class="meta">
                            <div class="name">{{ item.name }}</div>
                            <div class="sub">{{ item.role }}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="sidebar-footer">
            <small class="muted">Showing {{ totalCount }} users</small>
        </div>
    </aside>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    groups: { type: Array, default: () => [{ id: 'all', title: 'All users', items: [] }] },
})

defineEmits(['select', 'create', 'import'])
const q = ref('')

const open = ref(props.groups.map(() => true))

watch(
    () => props.groups,
    (g) => {
        open.value = g.map(() => true)
    }
)

function toggleGroup(i) {
    open.value[i] = !open.value[i]
}

function filteredItems(items) {
    const t = q.value.trim().toLowerCase()
    if (!t) return items
    return items.filter(
        (i) =>
            (i.name || '').toLowerCase().includes(t) ||
            (i.email || '').toLowerCase().includes(t) ||
            (i.role || '').toLowerCase().includes(t)
    )
}

const totalCount = computed(() =>
    props.groups.reduce((s, g) => s + (g.items ? g.items.length : 0), 0)
)
</script>

<style scoped>
.pc-sidebar {
    width: 300px;
    min-width: 260px;
    background: #ffffff;
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 8px 24px rgba(2, 6, 23, 0.06);
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-sizing: border-box;
}
.sidebar-top {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.search {
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid #eef2f7;
    width: 100%;
}
.quick-actions {
    display: flex;
    gap: 8px;
}
.action {
    padding: 8px 10px;
    border-radius: 8px;
    background: #0b74d1;
    color: #fff;
    border: none;
    cursor: pointer;
}
.action.outline {
    background: transparent;
    border: 1px solid #dbeafe;
    color: #0b74d1;
}

.nav-sections {
    overflow: auto;
    padding-right: 6px;
}
.section {
    margin-top: 6px;
}
.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 8px;
    cursor: pointer;
    border-radius: 8px;
}
.section-header strong {
    font-size: 14px;
}
.section-header .count {
    color: #64748b;
    font-size: 13px;
}
.section-list {
    list-style: none;
    padding: 6px;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.section-item {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
}
.section-item:hover {
    background: #f5f8fb;
}
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
}
.meta .name {
    font-weight: 600;
}
.meta .sub {
    font-size: 12px;
    color: #64748b;
}

.sidebar-footer {
    margin-top: auto;
    padding-top: 8px;
    text-align: center;
}
.muted {
    color: #94a3b8;
}

/* responsive: hide on very small screens */
@media (max-width: 720px) {
    .pc-sidebar {
        display: none;
    }
}
</style>