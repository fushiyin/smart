<template>
    <v-app>
        <v-app-bar height="56">
            <slot name="header"></slot>
        </v-app-bar>
        <v-row no-gutters class="pt-14 layout-row">
            <v-col cols="auto" class="sidebar-col">
                <div class="sidebar-wrapper">
                    <slot name="sidebar"></slot>
                </div>
            </v-col>
            <v-col class="main-col">
                <v-main class="pa-4 main-scroll">
                    <slot name="default"></slot>
                </v-main>
            </v-col>
        </v-row>
    </v-app>
</template>

<style scoped>
.layout-row {
    height: 100vh;
    overflow: hidden;
}
.sidebar-col {
    height: 100%;
}
.sidebar-wrapper {
    overflow-y: auto;
    height: 100%;
}
.main-col {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.main-scroll {
    flex: 1;
    height: 100%;
    overflow-y: auto;
}
</style>