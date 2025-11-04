<template>
    <v-app>
        <v-container class="py-6">
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card class="pa-6 mb-6" elevation="2">
                        <v-card-title class="text-h5 text-primary"
                            >Welcome to ATENSYSTEM</v-card-title
                        >
                        <v-card-subtitle
                            >Your central hub for HR, payroll, and more.</v-card-subtitle
                        >
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" class="mb-6">
                <v-col cols="12" md="8">
                    <v-row>
                        <v-col v-for="item in links" :key="item.label" cols="12" sm="6" md="4">
                            <v-card class="d-flex flex-column align-center pa-4" elevation="1">
                                <v-icon :color="item.color" size="36">{{ item.icon }}</v-icon>
                                <div class="mt-2 font-weight-medium">{{ item.label }}</div>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card elevation="1" class="pa-4">
                        <v-card-title class="text-h6">Recent Activity</v-card-title>
                        <v-list>
                            <v-list-item v-for="act in activity" :key="act.id">
                                <v-list-item-avatar>
                                    <v-icon :color="act.color" size="24">{{ act.icon }}</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>{{ act.text }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ act.time }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script setup>
const links = [
    { label: 'Profile', icon: 'mdi-account-outline', color: 'primary' },
    { label: 'Leave Request', icon: 'mdi-file-document-edit-outline', color: 'pink' },
    { label: 'Check in', icon: 'mdi-calendar-clock', color: 'green' },
    { label: 'Payroll', icon: 'mdi-cash-multiple', color: 'orange' },
    { label: 'Benefits', icon: 'mdi-gift-outline', color: 'indigo' },
]
const activity = [
    {
        id: 1,
        text: 'Checked in at 08:00',
        time: 'Today',
        icon: 'mdi-calendar-clock',
        color: 'green',
    },
    {
        id: 2,
        text: 'Requested leave for 2 days',
        time: 'Yesterday',
        icon: 'mdi-file-document-edit-outline',
        color: 'pink',
    },
    {
        id: 3,
        text: 'Payroll processed',
        time: '2 days ago',
        icon: 'mdi-cash-multiple',
        color: 'orange',
    },
]
</script>

<style scoped>
.v-card-title {
    font-weight: 700;
}
.v-card-subtitle {
    color: #64748b;
}
</style>