<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('chartBar') }}
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
                    }

                },

                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [
                        [$t('johnDoe')],
                        [$t('JoeSmith')],
                        [$t('JakeWilliams')],
                        $t('Amber'),
                        [$t('PeterBrown')],
                        [$t('MaryEvans')],
                        [$t('DavidWilson')],
                        [$t('LilyRoberts')],
                    ],
                    labels: {
                        style: {

                            fontSize: '12px'
                        }
                    }
                }
            }" :series="series"></apexchart>
        </div>
    </div>
</template>
<script setup>
const series = [{
    data: [21, 22, 10, 28, 16, 21, 13, 30]
}]
const chartOptions = {
    chart: {
        height: 350,
        type: 'bar',
        events: {
            click: function (chart, w, e) {
                // console.log(chart, w, e)
            }
        }
    },

    plotOptions: {
        bar: {
            columnWidth: '45%',
            distributed: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    xaxis: {
        categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'],
        ],
        labels: {
            style: {

                fontSize: '12px'
            }
        }
    }
}
</script>


<style></style>