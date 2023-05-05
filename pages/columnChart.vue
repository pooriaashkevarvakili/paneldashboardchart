<template>
    <client-only>
        <v-app>
            <v-row class="mt-2">
                <v-col sm="12" md='12' lg='6' cols="12">

                    <v-card class="pa-2 ma-3" theme="light" style="border-radius: 20px;" min-height="450">
                        <basicColumnChart />
                    </v-card>
                </v-col>
                <v-col sm="12" md='12' lg='6' cols="12">
                    <v-card class="pa-2 ma-3" theme="light" min-height="480" style="border-radius: 20px;">
                        <ColumnDataTables />
                    </v-card>
                </v-col>

            </v-row>
            <v-row class="mt-2">
                <v-col sm="12" md='12' lg='6' cols="12">

                    <v-card class="pa-2 ma-3" theme="light" style="border-radius: 20px;" min-height="450">
                        <StackedColumnChart />
                    </v-card>
                </v-col>
                <v-col sm="12" md='12' lg='6' cols="12">
                    <v-card class="pa-2 ma-3" theme="light" min-height="480" style="border-radius: 20px;">
                        <group-stackedcolumn />
                    </v-card>
                </v-col>
            </v-row>
        </v-app>
    </client-only>
</template>

<script setup>
import StackedColumnChart from "~~/components/apexCharts/columnChart/StackedColumnChart.vue";
import ColumnDataTables from "../components/apexCharts/columnChart/ColumnDataTables.vue"
import basicColumnChart from '~~/components/apexCharts/columnChart/basicColumnChart.vue';
import groupStackedcolumn from "~~/components/apexCharts/columnChart/groupStackedcolumn.vue";
</script>

<style></style>