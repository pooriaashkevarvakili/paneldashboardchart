<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('donut') }}
        </v-sheet>


        <apexchart theme="dark" class="pa-md-4 " width="320" type="donut" :chart="chart" :options="{
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
import { useTheme } from 'vuetify'
const theme = useTheme()
const options = {
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
}


const series = [44, 55, 41, 17]
const chartOptions = {
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
}




</script>

<style></style>