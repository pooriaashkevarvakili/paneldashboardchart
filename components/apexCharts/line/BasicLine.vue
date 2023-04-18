<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('ProductMonth') }}
        </v-sheet>
        <div class="pa-xs-4">
            <apexchart type="line" height="350" :options="{
                chart: {
                    height: 350,
                    type: 'line',
                    fontFamily: 'IRANSans',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },

                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: [$t('Jan'), $t('feb'), $t('Mar'), $t('Apr'), $t('May'), $t('Jun'), $t('Jul'), $t('Aug'), $t('Sep')],
                }
            }" :series="series"></apexchart>

        </div>
    </div>
</template>

<script setup>
const series = [
    {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }
]
const chartOptions = {
    chart: {
        height: 350,
        type: 'line',
        fontFamily: "IRANSans",
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },

    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
}
</script>

<style></style>