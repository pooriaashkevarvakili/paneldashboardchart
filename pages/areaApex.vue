<template>
    <client-only>
        <v-app class="pa-md-4">
            <v-row>
                <v-col sm="12" md='12' lg='6' cols="12">

                    <v-card theme="light" style="border-radius: 20px;" min-height="510" class="mt-xs-2">
                        <basicAreaChart />
                    </v-card>



                </v-col>
                <v-col sm="12" md='12' lg='6' cols="12">
                    <v-card theme="light" style="border-radius: 20px;" class="mt-xs-2">
                        <area-chart />
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="12" md='12' lg='6' cols="12">

                    <v-card theme="light" style="border-radius: 20px;" min-height="510" class="mt-xs-2">
                        <AreaNeghativeChart />
                    </v-card>



                </v-col>

            </v-row>
        </v-app>
    </client-only>
</template>
<script setup>
import AreaNeghativeChart from "../components/apexCharts/area/AreaNeghativeChart.vue"
import basicAreaChart from "~~/components/apexCharts/area/basicAreaChart.vue";
import AreaChart from "../components/apexCharts/area/areaChart.vue"
</script>

<style></style>