<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('DumbellChart') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="rangeBar" height="350" :options="{
                chart: {
                    height: 350,
                    type: 'rangeBar',
                    fontFamily: 'IRANSans',
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: true,
                        tools: {
                            download: false
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        isDumbbell: true,
                        columnWidth: 3,
                        dumbbellColors: [['#008FFB', '#00E396']]
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'left',
                    customLegendItems: [t('PRODUCTA'), t('PRODUCTB')]
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        type: 'vertical',
                        gradientToColors: ['#00E396'],
                        inverseColors: true,
                        stops: [0, 100]
                    }
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                xaxis: {
                    tickPlacement: 'on'
                }
            }" :series="series"></apexchart>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const series = [
    {
        data: [
            {
                x: '2008',
                y: [2800, 4500]
            },
            {
                x: '2009',
                y: [3200, 4100]
            },
            {
                x: '2010',
                y: [2950, 7800]
            },
            {
                x: '2011',
                y: [3000, 4600]
            },
            {
                x: '2012',
                y: [3500, 4100]
            },
            {
                x: '2013',
                y: [4500, 6500]
            },
            {
                x: '2014',
                y: [4100, 5600]
            }
        ]
    }
]
const chartOptions = {
    chart: {
        height: 350,
        type: 'rangeBar',
        fontFamily: 'IRANSans',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: true,
            tools: {
                download: false
            }
        },
    },
    plotOptions: {
        bar: {
            isDumbbell: true,
            columnWidth: 3,
            dumbbellColors: [['#008FFB', '#00E396']]
        }
    },
    legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Product A', 'Product B']
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            gradientToColors: ['#00E396'],
            inverseColors: true,
            stops: [0, 100]
        }
    },
    grid: {
        xaxis: {
            lines: {
                show: true
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        }
    },
    xaxis: {
        tickPlacement: 'on'
    }
}       
</script>
<style></style>