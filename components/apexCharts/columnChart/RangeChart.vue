<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('RangeChart') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="rangeBar" height="350" :options="{
                chart: {
                    type: 'rangeBar',
                    height: 380,
                    fontFamily: 'IRANSans',
                    toolbar: {
                        show: true,
                        tools: {
                            download: false
                        }
                    },

                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                dataLabels: {
                    enabled: true
                }
            }" :series="[{
    data: [{
        x: t('TeamA'),
        y: [1, 5]
    }, {
        x: t('TeamB'),
        y: [4, 6]
    }, {
        x: t('TeamC'),
        y: [5, 8]
    }, {
        x: t('TeamD'),
        y: [3, 11]
    }]
}, {
    data: [{
        x: t('TeamA'),
        y: [1, 5]
    }, {
        x: t('TeamB'),
        y: [4, 6]
    }, {
        x: t('TeamC'),
        y: [5, 8]
    }, {
        x: t('TeamD'),
        y: [3, 11]
    }]

}]"></apexchart>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const series = [{
    data: [{
        x: 'Team A',
        y: [1, 5]
    }, {
        x: 'Team B',
        y: [4, 6]
    }, {
        x: 'Team C',
        y: [5, 8]
    }, {
        x: 'Team D',
        y: [3, 11]
    }]
}, {
    data: [{
        x: 'Team A',
        y: [2, 6]
    }, {
        x: 'Team B',
        y: [1, 3]
    }, {
        x: 'Team C',
        y: [7, 8]
    }, {
        x: 'Team D',
        y: [5, 9]
    }]
}]
const chartOptions = {
    chart: {
        type: 'rangeBar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    dataLabels: {
        enabled: true
    }
}
</script>


<style></style>