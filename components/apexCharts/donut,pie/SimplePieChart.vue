<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">{{ $t('SimplePieChart') }}</v-sheet>
        <apexchart class="pa-md-4" type="pie" width="380" :options="{

            chart: {
                fontFamily: 'IRANSans'
            },

            chartOptions: {
                labels: [$t('Apple'), $t('Mango'), $t('Orange'), $t('Watermelon'), $t('banana')]
            },
            labels: [$t('Apple'), $t('Mango'), $t('Orange'), $t('Watermelon'), $t('banana')],
        }" :series="series"></apexchart>
    </div>
</template>

<script setup>
const series = [44, 55, 13, 43, 22]
const chartOptions = {
    chart: {
        width: 380,
        type: 'pie',
        fontFamily: 'IRANSans'
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
}



</script>

<style></style>