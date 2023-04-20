<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">{{ $t('SteplineChart') }}</v-sheet>
        <div class="pa-md-4">
            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>

        </div>
    </div>
</template>

<script setup>
const series = [
    {
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]

    }
]
const chartOptions = {
    chart: {
        type: 'line',
        height: 350,
        fontFamily: 'IRANSans'
    },
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },

    markers: {
        hover: {
            sizeOffset: 4
        }
    }
}
</script>

<style></style>