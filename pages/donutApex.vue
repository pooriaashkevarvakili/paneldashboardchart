
<template>
    <client-only>
        <v-app class="pa-md-4">
            <v-row>
                <v-col sm="12" md='12' lg='4' cols="12">

                    <v-card theme="light" style="border-radius: 20px;" min-height="350"
                        class="dark:bg-something dark:on-something pa-2 ma-3 mt-2">
                        <donut @change="toggleTheme" />
                    </v-card>



                </v-col>
                <v-col sm="12" md='12' lg='4' cols="12">
                    <v-card theme="light" style="border-radius: 20px;" min-height="350" class="mt-2 pa-2 ma-3">
                        <SimplePieChartVue />
                    </v-card>
                </v-col>
                <v-col sm="12" md='12' lg='4' xs="12" cols="12">
                    <v-card theme="light" style="border-radius: 20px;" min-height="290" class="mt-2 pa-2 ma-3">
                        <update-donut />
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" lg="4" xs="12" md="12" sm="12">
                    <v-card theme="light" style="border-radius: 20px;" min-height="290" class="mt-2 pa-2 ma-3">
                        <MonochromePie />
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" xs="12" md="12" sm="12">
                    <v-card theme="light" style="border-radius: 20px;" min-height="450" class="mt-2 pa-2 ma-3">
                        <gradientDonut />
                    </v-card>
                </v-col>
                <v-col cols="12" lg="4" xs="12" md="12" sm="12">
                    <v-card theme="light" style="border-radius: 20px;" min-height="450" class="mt-2 pa-2 ma-3">
                        <donutPattern />
                    </v-card>
                </v-col>
            </v-row>

        </v-app>
    </client-only>
</template>
<script setup>
import donutPattern from "../components/apexCharts/donut,pie/donutPattern.vue"
import gradientDonut from "../components/apexCharts/donut,pie/gradientDonut.vue";

import MonochromePie from "../components/apexCharts/donut,pie/MonochromePie.vue";
import donut from "../components/apexCharts/donut,pie/donut.vue"
import SimplePieChartVue from "../components/apexCharts/donut,pie/SimplePieChart.vue";
import UpdateDonut from "../components/apexCharts/donut,pie/UpdateDonut.vue"



</script>

<style >
.custom-class {
    background: rgb(var(--v-theme-something));
    color: rgba(var(--v-theme-on-something), 0.9)
}
</style>