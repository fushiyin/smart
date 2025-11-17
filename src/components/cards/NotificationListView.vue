<template>
    <div v-if="anchor" :style="popoverStyle">
        <div class="notification-popover">
            <div class="notification-card">
                <div class="notification-header">
                    <span class="title">Your notifications</span>
                    <button class="mark-all">Mark all as read</button>
                </div>
                <div class="notification-tabs">
                    <button
                        v-for="tab in tabs"
                        :key="tab.label"
                        :class="[
                            'tab-btn d-flex justify-center align-center flex-1',
                            { active: tab.label === activeTab },
                        ]"
                        @click="activeTab = tab.label"
                    >
                        {{ tab.label }}
                        <span v-if="tab.count" class="tab-count">{{ tab.count }}</span>
                    </button>
                </div>
                <div class="notification-list">
                    <div v-for="n in filteredNotifications" :key="n.id" class="notification-item">
                        <img :src="n.avatar" class="avatar" alt="avatar" />
                        <div class="notification-content">
                            <div class="notification-main">
                                <span class="user">@{{ n.user }}</span>
                                <span v-html="n.action"></span>
                            </div>
                            <div v-if="n.comment" class="notification-comment">
                                {{ n.comment }}
                            </div>
                            <div v-if="n.actions" class="notification-actions">
                                <button
                                    v-for="a in n.actions"
                                    :key="a"
                                    class="action-btn"
                                    :class="a.toLowerCase()"
                                >
                                    {{ a }}
                                </button>
                            </div>
                            <div class="notification-meta">
                                <span class="date">{{ n.date }}</span>
                                <span class="time">{{ n.timeAgo }}</span>
                            </div>
                        </div>
                        <span v-if="n.unread" class="dot"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
    anchor: Object,
})

const popoverStyle = computed(() => {
    if (!props.anchor) return {}
    const rect = props.anchor.getBoundingClientRect()
    return {
        position: 'fixed',
        top: `${rect.bottom}px`,
        right: `${window.innerWidth - rect.right}px`,
        zIndex: 9999,
    }
})

const tabs = [
    { label: 'All', count: 6 },
    { label: 'Followers', count: 4 },
    { label: 'Invites', count: 2 },
]
const activeTab = ref('All')

const notifications = [
    {
        id: 1,
        user: 'frankiesullivan',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        action: 'followed you',
        date: 'Thursday 4:20pm',
        timeAgo: '2 hours ago',
        unread: true,
    },
    {
        id: 2,
        user: 'eleanor_mac',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        action: 'commented on your post',
        date: 'Thursday 3:12pm',
        timeAgo: '3 hours ago',
        comment:
            'Love the background on this! Would love to learn how you created the mesh gradient effect.',
        unread: true,
    },
    {
        id: 3,
        user: 'eleanor_mac',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        action: 'liked your post <span class="icon-heart">💜</span>',
        date: 'Thursday 3:11pm',
        timeAgo: '3 hours ago',
        unread: true,
    },
    {
        id: 4,
        user: 'ollie_diggs',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        action: 'invited you to <b>Sisyphus Dashboard</b>',
        date: 'Thursday 2:44pm',
        timeAgo: '4 hours ago',
        actions: ['Decline', 'Accept'],
        unread: false,
    },
]

const filteredNotifications = computed(() => notifications)
</script>

<style scoped>
.notification-card {
    width: 400px;
    max-width: 100vw;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(40, 40, 60, 0.08);
    padding: 24px 20px 16px 20px;
    font-family: 'Inter', sans-serif;
}
.notification-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}
.title {
    font-size: 1.25rem;
    font-weight: 700;
}
.mark-all {
    background: none;
    border: none;
    color: #6366f1;
    font-weight: 500;
    font-size: 0.98rem;
    cursor: pointer;
}
.notification-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 12px;
}
.tab-btn {
    background: none;
    border: none;
    font-size: 1rem;
    color: #64748b;
    padding: 4px 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    position: relative;
}
.tab-btn.active {
    background: #6366f1;
    color: #fff;
}
.tab-count {
    background: #fff;
    color: #6366f1;
    font-size: 0.85em;
    border-radius: 8px;
    padding: 0 6px;
    margin-left: 4px;
    font-weight: 600;
}
.notification-list {
    margin-top: 8px;
}
.notification-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px 0;
    border-bottom: 1px solid #f1f5f9;
    position: relative;
}
.avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
    margin-top: 2px;
}
.notification-content {
    flex: 1;
}
.notification-main {
    font-size: 1rem;
    font-weight: 500;
    color: #222;
    margin-bottom: 2px;
}
.user {
    font-weight: 700;
    color: #222;
    margin-right: 4px;
}
.notification-comment {
    background: #f6f7fa;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 0.98rem;
    color: #222;
    margin: 6px 0 2px 0;
}
.notification-actions {
    margin-top: 8px;
    display: flex;
    gap: 8px;
}
.action-btn {
    border: none;
    border-radius: 8px;
    padding: 6px 18px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    background: #f1f5f9;
    color: #222;
    transition: background 0.2s;
}
.action-btn.accept {
    background: #6366f1;
    color: #fff;
}
.action-btn.decline {
    background: #e5e7eb;
    color: #222;
}
.notification-meta {
    font-size: 0.92rem;
    color: #64748b;
    margin-top: 2px;
    display: flex;
    gap: 12px;
}
.dot {
    width: 10px;
    height: 10px;
    background: #6366f1;
    border-radius: 50%;
    position: absolute;
    top: 18px;
    right: 0;
}
.icon-heart {
    font-size: 1.1em;
    vertical-align: middle;
    margin-left: 2px;
}
.notification-popover {
    min-width: 400px;
    max-width: 90vw;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 16px rgba(40, 40, 60, 0.08);
}
@media (max-width: 600px) {
    .notification-card {
        width: 100vw;
        border-radius: 0;
        padding: 16px 4px 8px 4px;
    }
}
</style>