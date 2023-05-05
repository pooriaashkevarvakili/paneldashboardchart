<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('datatable') }}
        </v-sheet>
    </div>
    <apexchart type="line" height="300" :options="{
        chart: {
            height: 350,
            type: 'line',
            toolbar: {
                show: true,
                tools: {
                    download: false
                }
            },
            zoom: {
                enabled: false
            },
            fontFamily: 'IRANSans',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },

        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },

        yaxis: {

            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        xaxis: {
            categories: [$t('Jan'), $t('feb'), $t('Mar'), $t('Apr'), $t('May'), $t('Jun'), $t('Jul'), $t('Aug'), $t('Sep')]
        },

    }" :series="series"></apexchart>
</template>

<script setup>
const series = [
    {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
    },
    {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
    }
]
const chartOptions = {
    chart: {
        height: 350,
        type: 'line',
        toolbar: {
            show: true,
            tools: {
                download: false
            }
        },
        zoom: {
            enabled: false
        },
        fontFamily: 'IRANSans',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
            show: false
        }
    },
    colors: ['#77B6EA', '#545454'],
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth'
    },

    grid: {
        borderColor: '#e7e7e7',
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    markers: {
        size: 1
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],

    },
    yaxis: {

        min: 5,
        max: 40
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
    }
}

</script>

<style></style>