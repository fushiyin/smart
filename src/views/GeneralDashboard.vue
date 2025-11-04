<template>
    <div class="dashboard-root">
        <div class="bg-layer"></div>

        <header class="launcher-header">
            <div class="brand">ATENSYSTEM</div>
        </header>

        <main class="launcher">
            <section class="filters">
                <div class="header-controls">
                    <input v-model="q" class="search" placeholder="Search apps" />
                </div>
            </section>

            <section class="apps-panel">
                <ul class="apps-grid">
                    <li
                        v-for="app in pagedApps"
                        :key="app.id"
                        class="app-tile"
                        @click="openApp(app)"
                    >
                        <div class="app-icon" :style="{ background: app.color }">
                            <span class="emoji">
                                <v-icon size="48" color="white">
                                    {{ app.icon }}
                                </v-icon>
                            </span>
                        </div>
                        <div class="app-label">{{ app.label }}</div>
                    </li>
                </ul>

                <div class="pager">
                    <button
                        v-for="n in pages"
                        :key="n"
                        :class="['dot', { active: n - 1 === page }]"
                        @click="page = n - 1"
                    ></button>
                </div>
            </section>
        </main>

        <aside class="quick-actions">
            <button class="qa">⭐</button>
            <button class="qa">▶</button>
            <button class="qa">❓</button>
            <button class="qa">💬</button>
        </aside>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vuetify/lib/composables/router'

const q = ref('')
const activeTag = ref('All')
const page = ref(0)
const perPage = 12
const router = useRouter()

const apps = ref([
    {
        id: 1,
        label: 'Chấm công',
        icon: 'mdi-timer',
        color: 'linear-gradient(135deg,#ff9a8b,#ff6a88)',
        tags: ['HR'],
        path: '/attendance',
    },
    {
        id: 2,
        label: 'Tiền lương',
        icon: 'mdi-currency-usd',
        color: 'linear-gradient(135deg,#8ee3b1,#48c6ef)',
        tags: ['Finance'],
        path: '/salary',
    },
    {
        id: 3,
        label: 'Thông tin nhân sự',
        icon: 'mdi-account-group',
        color: 'linear-gradient(135deg,#b39cff,#7ee8fa)',
        tags: ['HR'],
        path: '/hrm',
    },
    {
        id: 4,
        label: 'Đánh giá',
        icon: 'mdi-star-circle',
        color: 'linear-gradient(135deg,#7de6d1,#4cc3ff)',
        tags: ['HR'],
        path: '/evaluation',
    },
    {
        id: 5,
        label: 'Hệ thống',
        icon: 'mdi-cog',
        color: 'linear-gradient(135deg,#d1c4e9,#8ab6ff)',
        tags: ['IT'],
        path: '/system',
    },
    {
        id: 6,
        label: 'OneAI',
        icon: 'mdi-brain',
        color: 'linear-gradient(135deg,#ffb86b,#ff7aa2)',
        tags: ['AI'],
        path: '/oneai',
    },
    {
        id: 7,
        label: 'Tuyển dụng',
        icon: 'mdi-magnify',
        color: 'linear-gradient(135deg,#8be7ff,#7ad4ff)',
        tags: ['HR'],
        path: '/recruitment',
    },
    {
        id: 8,
        label: 'Nhân viên',
        icon: 'mdi-account',
        color: 'linear-gradient(135deg,#91f2b6,#68d8ff)',
        tags: ['HR'],
        path: '/user',
    },
    {
        id: 9,
        label: 'Bảo hiểm',
        icon: 'mdi-shield-check',
        color: 'linear-gradient(135deg,#ffd1da,#ff9eb2)',
        tags: ['HR'],
        path: '/insurance',
    },
    {
        id: 10,
        label: 'Danh bạ',
        icon: 'mdi-book-open-page-variant',
        color: 'linear-gradient(135deg,#a7d7ff,#6fbfff)',
        tags: ['Ops'],
        path: '/directory',
    },
    {
        id: 11,
        label: 'Thuế TNCN',
        icon: 'mdi-file-document-multiple',
        color: 'linear-gradient(135deg,#bfe9ff,#77c9ff)',
        tags: ['Finance'],
        path: '/tax',
    },
    {
        id: 12,
        label: 'Mục tiêu',
        icon: 'mdi-target',
        color: 'linear-gradient(135deg,#c6ffdd,#fbd786)',
        tags: ['Ops'],
        path: '/goals',
    },
    {
        id: 13,
        label: 'Khuyến mại',
        icon: 'mdi-tag-multiple',
        color: 'linear-gradient(135deg,#ffd7a7,#ffb3b3)',
        tags: ['Sales'],
        path: '/promotion',
    },
    {
        id: 14,
        label: 'aiMarketing',
        icon: 'mdi-rocket-launch',
        color: 'linear-gradient(135deg,#c6a4ff,#7ee8fa)',
        tags: ['Marketing'],
        path: '/aimarketing',
    },
    {
        id: 15,
        label: 'CRM',
        icon: 'mdi-briefcase',
        color: 'linear-gradient(135deg,#9be7ff,#6fb8ff)',
        tags: ['Sales'],
        path: '/crm',
    },
])

const filtered = computed(() => {
    const term = q.value.trim().toLowerCase()
    let list = apps.value
    if (activeTag.value && activeTag.value !== 'All') {
        list = list.filter((a) => (a.tags || []).includes(activeTag.value))
    }
    if (term) list = list.filter((a) => a.label.toLowerCase().includes(term))
    return list
})

const pages = computed(() => Math.max(1, Math.ceil(filtered.value.length / perPage)))

const pagedApps = computed(() => {
    const start = page.value * perPage
    return filtered.value.slice(start, start + perPage)
})

function openApp(app) {
    router.push(app.path)
}
</script>

<style lang="scss" scoped>
.dashboard-root {
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    font-family: Inter, Arial, sans-serif;
}
.bg-layer {
    position: absolute;
    inset: 0;
    background-image: url('https://www.pixel4k.com/wp-content/uploads/2018/10/sunrise-lake-art-work_1540748195.jpg');
    background-size: cover;
    background-position: center;
    filter: saturate(0.9) brightness(0.95);
}
.launcher-header {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px;
    color: #fff;
}
.brand {
    font-weight: 800;
    font-size: 20px;
    letter-spacing: 1px;
}
.header-controls {
    display: flex;
    gap: 12px;
    align-items: center;
}
.search {
    padding: 10px 14px;
    border-radius: 999px;
    min-width: 320px;
    background: rgba(255, 255, 255);
}
.apps-button {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
}

.launcher {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 24px 80px;
}
.filters {
    margin-bottom: 18px;
}
.tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}
.tag {
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
}
.tag.active {
    background: #fff;
    color: #0f172a;
}

.apps-panel {
    width: 100%;
    max-width: 1100px;
}
.apps-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 28px;
    list-style: none;
    padding: 20px;
    margin: 0;
    justify-items: center;
}
.app-tile {
    padding: 18px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 16px;
}
.app-tile:hover {
    background: rgba(255, 255, 255, 0.2);
}
.app-icon {
    width: 88px;
    height: 88px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(2, 6, 23, 0.12);
}
.emoji {
    font-size: 32px;
}
.app-label {
    font-weight: 600;
    text-align: center;
}
.pager {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
}
.dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.3);
    border: none;
}
.dot.active {
    background: #fff;
}

.quick-actions {
    position: fixed;
    right: 12px;
    top: 40%;
    z-index: 5;
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.qa {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    border: none;
    background: #fff;
    box-shadow: 0 6px 18px rgba(2, 6, 23, 0.12);
    cursor: pointer;
}

/* responsive */
@media (max-width: 1200px) {
    .apps-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media (max-width: 768px) {
    .apps-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 18px;
    }

    .app-icon {
        width: 68px;
        height: 68px;
    }
    .brand {
        color: #fff;
    }
}
@media (max-width: 420px) {
    .apps-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    .header-controls {
        display: none;
    }
    .tags {
        gap: 8px;
    }
}
</style>