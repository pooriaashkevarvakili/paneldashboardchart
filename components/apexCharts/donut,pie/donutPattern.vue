<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('chart Favourite') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="donut" width="380" :options="{
                chart: {
                    width: 380,
                    type: 'donut',
                    fontFamily: 'IRANSans',
                    dropShadow: {
                        enabled: true,
                        color: '#111',
                        top: -1,
                        left: 3,
                        blur: 3,
                        opacity: 0.2
                    }
                },
                stroke: {
                    width: 0,
                },
                plotOptions: {
                    pie: {
                        startAngle: 0,
                        endAngle: 360,
                        expandOnClick: true,
                        offsetX: 0,
                        offsetY: 0,
                        customScale: 1,
                        dataLabels: {
                            offset: 0,
                            minAngleToShowLabel: 10
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
                    }
                },
                labels: [$t('Comedy'), $t('Action'), $t('scifi'), $t('drama'), $t('Horror')],

                dataLabels: {
                    enabled: false,
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        enabled: true,
                        style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
                    },
                },
                states: {
                    hover: {
                        filter: 'none'
                    }
                },
                theme: {
                    palette: 'palette2'
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
        dropShadow: {
            enabled: true,
            color: '#111',
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2
        }
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
                offset: 0,
                minAngleToShowLabel: 10
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
        }
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],

    dataLabels: {
        enabled: false,
        dropShadow: {
            blur: 3,
            opacity: 0.8
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            enabled: true,
            style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
        },
    },
    states: {
        hover: {
            filter: 'none'
        }
    },
    theme: {
        palette: 'palette2'
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