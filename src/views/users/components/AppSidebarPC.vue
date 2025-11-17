<template>
    <aside class="sidebar-hrms">
        <nav class="sidebar-menu pt-2">
            <SidebarMenuItem
                v-for="item in menu"
                :key="item.key"
                :item="item"
                :active="active"
                @select="handleSelect"
            />
        </nav>
        <div class="sidebar-status">
            <div class="status-card">
                <div>
                    <div class="status-title">Back Office</div>
                    <div class="status-desc">All systems operational</div>
                </div>
                <button class="w-6 h-6 rounded-full bg-white" @click="navigateToAdmin">
                    <v-icon size="18" color="black">mdi-arrow-right</v-icon>
                </button>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

import SidebarMenuItem from './SidebarMenuItem.vue'
import { useRouter } from 'vuetify/lib/composables/router'

const router = useRouter()
const active = ref('home')
const menu = [
    {
        label: 'Home',
        icon: 'mdi-view-dashboard-outline',
        key: 'home',
    },
    {
        label: 'Working',
        icon: 'mdi-calendar-check-outline',
        key: 'working',
        children: [
            { label: 'Daily Attendance', icon: 'mdi-calendar-today', key: 'daily-attendance' },
            { label: 'Monthly Attendance', icon: 'mdi-calendar-month', key: 'monthly-attendance' },
            {
                label: 'Att. Regularization',
                icon: 'mdi-account-check-outline',
                key: 'att-regularization',
            },
        ],
    },
    {
        label: 'Attendance Setup',
        icon: 'mdi-cog-outline',
        key: 'attendance-setup',
    },
    {
        label: 'Leave',
        icon: 'mdi-file-document-outline',
        key: 'leave',
        children: [{ label: 'Leave Setup', icon: 'mdi-cog-outline', key: 'leave-setup' }],
    },
    {
        label: 'Week Off',
        icon: 'mdi-calendar-remove-outline',
        key: 'week-off',
    },
    {
        label: 'OD Application',
        icon: 'mdi-clock-outline',
        key: 'od-application',
    },
    {
        label: 'Reimbursement',
        icon: 'mdi-cash-refund',
        key: 'reimbursement',
        children: [
            { label: 'Reimbursement Setup', icon: 'mdi-cog-outline', key: 'reimbursement-setup' },
        ],
    },
    {
        label: 'Payroll',
        icon: 'mdi-currency-usd',
        key: 'payroll',
        children: [{ label: 'Payroll Setup', icon: 'mdi-cog-outline', key: 'payroll-setup' }],
    },
]

function handleSelect(key) {
    active.value = key
    router.push(`/${key}`)
}
const navigateToAdmin = () => {
    router.push('/attendance')
}
</script>

<style scoped>
.sidebar-hrms {
    width: 260px;
    height: 100%;
    max-height: 100vh;
    background: linear-gradient(180deg, #4f46e5 0%, #6366f1 60%, #7c3aed 100%);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 16px;
}
.sidebar-header {
    display: flex;
    align-items: center;
    padding: 24px 20px 16px 20px;
    gap: 12px;
}
.sidebar-title .main-title {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 1px;
}
.sidebar-title .sub-title {
    font-size: 12px;
    opacity: 0.8;
}
.sidebar-menu {
    flex: 1;
    padding: 8px 0 0 0;
}
.sidebar-status {
    padding: 0 16px;
}
.status-card {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}
.status-title {
    font-size: 14px;
    font-weight: 600;
}
.status-desc {
    font-size: 12px;
    opacity: 0.8;
}
</style>