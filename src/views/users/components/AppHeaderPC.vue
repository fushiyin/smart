<template>
    <header class="header-root bg-grey-darken-4 px-5">
        <div class="header-left">
            <span class="app-title font-weight-bold">ATENSYSTEM</span>
        </div>
        <div class="header-right">
            <button class="icon-btn">
                <v-icon size="22" color="#2563eb">mdi-chat-processing</v-icon>
            </button>
            <button class="icon-btn">
                <v-icon size="22" color="#888">mdi-help-circle-outline</v-icon>
            </button>
            <button class="icon-btn notify">
                <v-icon size="22" color="#e84c7a">mdi-bell-badge-outline</v-icon>
                <span class="badge">10</span>
            </button>
            <div class="avatar ml-5">{{ user?.name.charAt(0) }}</div>
        </div>
    </header>
</template>

<script setup>
defineProps({
    user: {
        type: Object,
        required: true,
    },
})
</script>

<style scoped>
.header-root {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 10;
}
.header-left {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 12px;
}
.app-icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: linear-gradient(135deg, #6366f1, #a5b4fc);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #fff;
}
.app-title {
    font-size: 1.2rem;
}
.header-right {
    display: flex;
    align-items: center;
    gap: 10px;
}
.icon-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
}
.notify {
    position: relative;
}
.badge {
    position: absolute;
    top: -6px;
    right: -6px;
    background: #e84c7a;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    border-radius: 999px;
    padding: 2px 6px;
}
.avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1, #a5b4fc);
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header-bg {
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 180px;
    height: 48px;
    z-index: 1;
}
.header-bg img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>