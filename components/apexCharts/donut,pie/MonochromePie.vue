<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('Monochrome Pie') }}
        </v-sheet>
        <apexchart class="pa-md-4 " type="pie" :options="{
            chart: {
                width: '100%',
                type: 'pie',
                fontFamily: 'IRANSans'
            },
            labels: [$t('Monday'), $t('Tuesday'), $t('Wednesday'), $t('Thursday'), $t('Friday'), $t('Saturday')],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: -5
                    }
                }
            },

            legend: {
                show: false
            },
            dataLabels: {
                formatter(val, opts) {
                    const name = opts.w.globals.labels[opts.seriesIndex]
                    return [name, val.toFixed(1) + '%']
                }
            },
        }" :series="series"></apexchart>
    </div>
</template>

<script setup>
const series = [25, 15, 44, 55, 41, 17]
const chartOptions = {
    chart: {
        width: '80%',
        type: 'pie',
        fontFamily: 'IRANSans'
    },
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    theme: {
        monochrome: {
            enabled: true
        }
    },
    plotOptions: {
        pie: {
            dataLabels: {
                offset: -5
            }
        }
    },
    title: {
        text: "Monochrome Pie"
    },
    dataLabels: {
        formatter(val, opts) {
            const name = opts.w.globals.labels[opts.seriesIndex]
            return [name, val.toFixed(1) + '%']
        }
    },
    legend: {
        show: false
    }
}



</script>

<style></style>