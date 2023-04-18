<template>
    <client-only>
        <v-app class="pa-md-4">
            <v-row>
                <v-col cols="12" lg="4" md="12" sm="12">
                    <v-card theme="light">
                        <basic-line />
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12">
                    <v-card theme="light" min-height="430">
                        <DataLables />
                    </v-card>
                </v-col>
            </v-row>
        </v-app>
    </client-only>
</template>

<script setup>
import BasicLine from "../components/apexCharts/line/BasicLine.vue"
import DataLables from "../components/apexCharts/line/DataLabels.vue"
</script>

<style></style>