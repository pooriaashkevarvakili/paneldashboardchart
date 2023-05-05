<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('MackersChart') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="bar" height="350" :options="{
                chart: {
                    height: 350,
                    type: 'bar',
                    fontFamily: 'IRANSans',
                    toolbar: {
                        show: true,
                        tools: {
                            download: false
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        columnWidth: '60%'
                    }
                },
                colors: ['#00E396'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: [t('Actual'), t('Expected')],
                    markers: {
                        fillColors: ['#00E396', '#775DD0']
                    }
                }
            }" :series="[
    {
        name: t('Actual'),
        data: [
            {
                x: t('2011'),
                y: 1292,
                goals: [
                    {
                        name: t('Expected'),
                        value: 1400,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: t('2012'),
                y: 4432,
                goals: [
                    {
                        name: t('Expected'),
                        value: 5400,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: t('2013'),
                y: 5423,
                goals: [
                    {
                        name: t('Expected'),
                        value: 5200,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: t('2014'),
                y: 6653,
                goals: [
                    {
                        name: t('Expected'),
                        value: 6500,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: t('2015'),
                y: 8133,
                goals: [
                    {
                        name: t('Expected'),
                        value: 6600,
                        strokeHeight: 13,
                        strokeWidth: 0,
                        strokeLineCap: 'round',
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: t('2016'),
                y: 7132,
                goals: [
                    {
                        name: t('Expected'),
                        value: 7500,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: t('2017'),
                y: 7332,
                goals: [
                    {
                        name: t('Expected'),
                        value: 8700,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: t('2018'),
                y: 6553,
                goals: [
                    {
                        name: t('Expected'),
                        value: 7300,
                        strokeHeight: 2,
                        strokeDashArray: 2,
                        strokeColor: '#775DD0'
                    }
                ]
            }
        ]
    }
]"></apexchart>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const series = [
    {
        name: 'Actual',
        data: [
            {
                x: '2011',
                y: 1292,
                goals: [
                    {
                        name: 'Expected',
                        value: 1400,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2012',
                y: 4432,
                goals: [
                    {
                        name: 'Expected',
                        value: 5400,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2013',
                y: 5423,
                goals: [
                    {
                        name: 'Expected',
                        value: 5200,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2014',
                y: 6653,
                goals: [
                    {
                        name: 'Expected',
                        value: 6500,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2015',
                y: 8133,
                goals: [
                    {
                        name: 'Expected',
                        value: 6600,
                        strokeHeight: 13,
                        strokeWidth: 0,
                        strokeLineCap: 'round',
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2016',
                y: 7132,
                goals: [
                    {
                        name: 'Expected',
                        value: 7500,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2017',
                y: 7332,
                goals: [
                    {
                        name: 'Expected',
                        value: 8700,
                        strokeHeight: 5,
                        strokeColor: '#775DD0'
                    }
                ]
            },
            {
                x: '2018',
                y: 6553,
                goals: [
                    {
                        name: 'Expected',
                        value: 7300,
                        strokeHeight: 2,
                        strokeDashArray: 2,
                        strokeColor: '#775DD0'
                    }
                ]
            }
        ]
    }
]
const chartOptions = {
    chart: {
        height: 350,
        type: 'bar',
        toolbar: {
            show: true,
            tools: {
                download: false
            }
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '60%'
        }
    },
    colors: ['#00E396'],
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
            fillColors: ['#00E396', '#775DD0']
        }
    }
}
</script>
<style></style>