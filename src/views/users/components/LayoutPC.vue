<template>
    <div class="layout-root">
        <header class="layout-header">
            <slot name="header"></slot>
        </header>
        <div class="layout-body">
            <aside class="layout-sidebar">
                <slot name="sidebar"></slot>
            </aside>
            <main class="layout-main">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.layout-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f8fafc;
}
.layout-header {
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    padding: 0 32px;
    font-size: 1.25rem;
    font-weight: 700;
    z-index: 10;
}
.layout-body {
    flex: 1;
    display: flex;
    min-height: 0;
}
.layout-sidebar {
    width: 220px;
    background: linear-gradient(180deg, #f3f7fb 0%, #e0e7ff 100%);
    border-right: 1px solid #e5e7eb;
    padding: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
}
.layout-main {
    flex: 1;
    padding: 12px 24px;
    min-width: 0;
    background: #f8fafc;
}
@media (max-width: 900px) {
    .layout-header {
        padding: 0 12px;
        height: 48px;
        font-size: 1rem;
    }
    .layout-sidebar {
        width: 64px;
    }
    .layout-main {
        padding: 12px 4px;
    }
}
</style>