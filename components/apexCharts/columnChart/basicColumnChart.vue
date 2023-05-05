<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('columnChart') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="bar" height="350" :options="{
                chart: {
                    type: 'bar',
                    height: 350,
                    fontFamily: 'IRANSans',
                    toolbar: {
                        show: true,
                        tools: {
                            download: false
                        }
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: [$t('Jan'), $t('feb'), $t('Mar'), $t('Apr'), $t('May'), $t('Jun'), $t('Jul'), $t('Aug'), $t('Sep')]
                },

                fill: {
                    opacity: 1
                },
            }" :series="[
        {
            name: $t('netprofit'),
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
            name: $t('Revenue'),
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
            name: $t('Freecashflow'),
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
    ]"></apexchart>

        </div>
    </div>
</template>

<script setup>
const series = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}]
const chartOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
}
</script>

<style></style>