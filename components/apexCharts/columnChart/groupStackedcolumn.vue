<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('GroupedStackedColumns') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="bar" height="350" :options="{
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    fontFamily: 'IRANSans',
                    toolbar: {
                        show: true,
                        tools: {
                            download: false
                        }
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                dataLabels: {
                    formatter: (val) => {
                        return val / 1000 + 'K'
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                xaxis: {
                    categories: [
                        $t('OnlineAdvertising'),
                        $t('SalesTraining'),
                        $t('PrintAdvertising'),
                        $t('Catalogs'),
                        $t('Meetings'),
                        $t('PublicRelations')
                    ]
                },
                fill: {
                    opacity: 1
                },
                colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
                yaxis: {
                    labels: {
                        formatter: (val) => {
                            return val / 1000 + 'K'
                        }
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                }
            }" :series="[
        {
            name: $t('Q1Budget'),
            group: 'budget',
            data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
            name: $t('Q1Actual'),
            group: 'actual',
            data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
            name: $t('Q2Budget'),
            group: 'budget',
            data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
            name: $t('Q2Actual'),
            group: 'actual',
            data: [20000, 40000, 25000, 10000, 12000, 28000]
        }
    ]"></apexchart>
        </div>
    </div>
</template>

<script setup>
const series = [
    {
        name: 'Q1 Budget',
        group: 'budget',
        data: [44000, 55000, 41000, 67000, 22000, 43000]
    },
    {
        name: 'Q1 Actual',
        group: 'actual',
        data: [48000, 50000, 40000, 65000, 25000, 40000]
    },
    {
        name: 'Q2 Budget',
        group: 'budget',
        data: [13000, 36000, 20000, 8000, 13000, 27000]
    },
    {
        name: 'Q2 Actual',
        group: 'actual',
        data: [20000, 40000, 25000, 10000, 12000, 28000]
    }
]
const chartOptions = {
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    dataLabels: {
        formatter: (val) => {
            return val / 1000 + 'K'
        }
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    xaxis: {
        categories: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings',
            'Public relations'
        ]
    },
    fill: {
        opacity: 1
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    yaxis: {
        labels: {
            formatter: (val) => {
                return val / 1000 + 'K'
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
}
</script>

<style></style>