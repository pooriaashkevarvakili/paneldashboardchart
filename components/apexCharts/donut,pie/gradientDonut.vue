<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">{{ $t('Gradient Donut') }}</v-sheet>
        <div class="pa-md-4">
            <apexchart type="donut" width="380" :options="{
                chart: {
                    width: 380,
                    type: 'donut',
                },
                donut: {
                    labels: {
                        show: true,
                        fontFamily: 'IRANSans',
                        total: {
                            showAlways: false,
                            show: true
                        }
                    }
                },
                labels: [$t('Comedy'), $t('Action'), $t('scifi'), $t('drama'), $t('Horror')],


                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270
                    }
                },

                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'gradient',
                },


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
            }" :series="series"></apexchart>

        </div>
    </div>
</template>

<script setup>
const series = [44, 55, 41, 17, 15]
const chartOptions = {
    chart: {
        width: 380,
        type: 'donut',
    },
    donut: {
        labels: {
            show: true,
            fontFamily: 'IRANSans',
            total: {
                showAlways: false,
                show: true
            }
        }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],


    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 270
        }
    },

    dataLabels: {
        enabled: false
    },
    fill: {
        type: 'gradient',
    },
    legend: {
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
    },

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