<template>
    <div dir="auto">
        <div class="pa-md-4">{{ $t('donut') }}</div>
        <apexchart class="pa-md-4 " width="320" type="donut" :chart="chart" :options="{
            series: [44, 55, 13, 33],
            chart: {
                fontFamily: 'IRANSans'
            },


            chartOptions: {
                labels: [$t('Apple'), $t('Mango'), $t('Orange'), $t('Watermelon')]
            },
            labels: [$t('Apple'), $t('Mango'), $t('Orange'), $t('Watermelon')],

        }" :series="series"></apexchart>
    </div>
</template>

<script setup>

const options = {
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
}
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'

const series = [44, 55, 41, 17]
const chartOptions = {
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
}




</script>

<style></style>