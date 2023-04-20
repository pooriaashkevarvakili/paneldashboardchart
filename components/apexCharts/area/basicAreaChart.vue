<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('splineArea') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>

        </div>
    </div>
</template>

<script setup>
const series = [
    {

        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
    }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]

    }
]
const chartOptions = {
    chart: {
        height: 350,
        type: 'area',
        fontFamily: 'IRAnsans'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        }
    }
}
</script>

<style></style>