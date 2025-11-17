<template>
    <v-app>
        <v-app-bar height="56">
            <slot name="header"></slot>
        </v-app-bar>
        <v-row no-gutters>
            <v-col cols="auto">
                <div class="sidebar-wrapper">
                    <slot name="sidebar"></slot>
                </div>
            </v-col>
            <v-col>
                <v-main>
                    <slot name="default"></slot>
                </v-main>
            </v-col>
        </v-row>
    </v-app>
</template>

<style scoped>
.sidebar-wrapper {
    overflow-y: auto;
    height: 100%;
}
</style>