<template>
    <apexchart width="300" type="pie" :options="chartOptions" :series="series"></apexchart>
</template>

<script >
export default {
    name: 'App',
    data() {
        return {

            series: [23, 11, 54, 72, 12],
            chartOptions: {
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: false
                            },
                            name: {
                                show: true,
                                fontSize: '22px',
                                fontFamily: 'iran-sans',
                                color: '#dfsda',
                                offsetY: -10
                            },
                            value: {
                                show: true,
                                fontSize: '16px',
                                fontFamily: 'Helvetica, Arial, sans-serif',
                                color: undefined,
                                offsetY: 16,
                                formatter: function (val) {
                                    return val
                                }
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#373d3f',
                            }

                        },
                        customScale: 0.8,
                        size: 200
                    }
                },

                dataLabels: {
                    enabled: true
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                            type: 'pie'
                        },
                        legend: {
                            positon: 'bottom',
                            show: false
                        }
                    }
                }],
            }
        }
    }
}



</script>

<style></style>