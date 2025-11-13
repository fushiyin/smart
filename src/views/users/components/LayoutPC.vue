<template>
    <v-app>
        <v-app-bar app flat color="white" height="53">
            <slot name="header"></slot>
        </v-app-bar>
        <v-row no-gutters class="layout-body">
            <v-navigation-drawer app width="auto" color="grey-lighten-5" flat>
                <slot name="sidebar"></slot>
            </v-navigation-drawer>
            <v-main class="layout-main">
                <slot></slot>
            </v-main>
        </v-row>
    </v-app>
</template>

<script setup>
</script>

<style scoped>
.layout-body {
    min-height: 0;
}
.layout-main {
    padding: 12px 24px;
    min-width: 0;
    background: #f8fafc;
}
@media (max-width: 900px) {
    .layout-main {
        padding: 12px 4px;
    }
}
</style>