<template>
    <client-only>
        <v-app class="pa-md-4">
            <v-row>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <v-card theme="light">
                        <basic-line />
                    </v-card>
                </v-col>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <v-card theme="light" min-height="430">
                        <DataLables />
                    </v-card>
                </v-col>

            </v-row>
            <v-row>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <v-card min-height="470" theme="light">
                        <syncingCharts />
                    </v-card>
                </v-col>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <v-card theme="light">
                        <SteplineChart />
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <v-card min-height="470" theme="light">
                        <GradinetLineChart />
                    </v-card>

                </v-col>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <v-card min-height="470" theme="light">
                        <ChartCurve />
                    </v-card>

                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" lg="6" md="12" sm="12">
                    <v-card min-height="470" theme="light">
                        <DashedLineChart />
                    </v-card>

                </v-col>

            </v-row>
        </v-app>
    </client-only>
</template>

<script setup>
import DashedLineChart from "../components/apexCharts/line/DashedLineChart.vue"
import ChartCurve from "../components/apexCharts/line/ChartCurve.vue"
import GradinetLineChart from "../components/apexCharts/line/GradinetLineChart"
import BasicLine from "../components/apexCharts/line/BasicLine.vue"
import DataLables from "../components/apexCharts/line/DataLabels.vue"
import syncingCharts from "../components/apexCharts/line/syncingCharts.vue"
import SteplineChart from "~~/components/apexCharts/line/SteplineChart.vue";
</script>

<style></style>