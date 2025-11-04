<template>
    <div class="mobile-layout-root">
        <header class="mobile-header">
            <!-- <img src="/logo.png" alt="Logo" class="logo" /> -->
            <div class="font-weight-bold">ATENSYSTEM</div>
            <div class="header-actions">
                <button class="icon-btn">
                    <v-icon size="24" color="#ff0000">mdi-bell-badge-outline</v-icon>
                </button>
                <button class="icon-btn">
                    <v-icon size="24" color="#2563eb">mdi-chat-processing</v-icon>
                </button>
                <button class="icon-btn">
                    <v-icon size="24" color="#2563ee">mdi-qrcode-scan</v-icon>
                </button>
            </div>
        </header>
        <main class="mobile-main">
            <slot></slot>
        </main>
        <nav class="mobile-bottom-nav">
            <button class="nav-btn" :class="{ active: active === 0 }" @click="active = 0">
                <v-icon size="24">mdi-home-outline</v-icon>
                <span class="nav-label">Home</span>
            </button>
            <button class="nav-btn" :class="{ active: active === 1 }" @click="active = 1">
                <v-icon size="24">mdi-file-document-edit-outline</v-icon>
                <span class="nav-label">Form</span>
            </button>
            <button class="nav-btn" :class="{ active: active === 2 }" @click="active = 2">
                <v-icon size="24">mdi-calendar-clock</v-icon>
                <span class="nav-label">Check in</span>
            </button>
            <button class="nav-btn" :class="{ active: active === 4 }" @click="active = 4">
                <v-icon size="24">mdi-account-outline</v-icon>
                <span class="nav-label">Account</span>
            </button>
            <button class="nav-btn" :class="{ active: active === 3 }" @click="active = 3">
                <v-icon size="24">mdi-view-dashboard-outline</v-icon>
                <span class="nav-label">View More</span>
            </button>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style scoped>
.mobile-layout-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
}
.mobile-header {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    /* position: fixed; */
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    background-image: url('@/assets/images/login_background.jpg');
}

.header-actions {
    display: flex;
    gap: 12px;
}
.icon-btn {
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 50%;
    border: 1px solid rgb(255, 255, 255);
    transition: background-color 0.2s;
    background: rgba(255, 255, 255, 0.4);
}
.mobile-main {
    flex: 1;
    /* margin-top: 56px; */
    margin-bottom: 64px;
    padding: 12px 18px;
}
.mobile-bottom-nav {
    height: 56px;
    background: #fff;
    border-top: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
}
.nav-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: #64748b;
    font-size: 18px;
    cursor: pointer;
    transition: color 0.2s;
}
.nav-btn.active {
    color: #2563eb;
    font-weight: 700;
}
.nav-icon {
    font-size: 22px;
    margin-bottom: 2px;
}
.nav-label {
    font-size: 12px;
}
.active .nav-label {
    font-weight: 700;
}
@media (min-width: 900px) {
    .mobile-layout-root {
        display: none;
    }
}
</style>