<template>
    <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
    data() {
        return {
            series: [44, 55, 41, 17, 15],
            chartOptions: {
                chart: {
                    width: 380,
                    type: 'donut',
                },
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
                title: {
                    text: 'Gradient Donut with custom Start-angle'
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
            },
        }
    }
}
</script>

<style></style>