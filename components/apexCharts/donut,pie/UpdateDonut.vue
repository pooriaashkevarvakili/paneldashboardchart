<template>
    <div dir="auto">
        <div class="pa-md-4">{{ $t('updateDonut') }}</div>
        <div class="chart-wrap">
            <div id="chart">
                <apexchart class="pa-md-4" type="donut" width="320" :options="chartOptions" :series="series"></apexchart>
            </div>
        </div>
        <div class="pa-md-4">
            <v-row>
                <v-col>
                    <v-btn icon="mdi-plus" class="bg-purple-darken-2  pa-md-sm" @click="appendData">
                    </v-btn>
                    <v-btn icon="mdi-minus" style="margin-left:10px" class="bg-purple-darken-2 " @click="removeData">
                    </v-btn>
                    <v-btn icon="mdi-redo" style="margin-left:10px" class="bg-purple-darken-2" @click="reset()"></v-btn>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script setup>
const series = ref([44, 55, 13, 33])
const chartOptions = {
    chart: {
        width: 380,
        type: 'donut',
    },

    dataLabels: {
        enabled: false
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                show: false
            }
        }
    }],
    legend: {
        position: 'right',
        offsetY: 0,
        height: 230,
    }
}

function appendData() {
    var arr = series.value.slice()
    arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
    series.value = arr
}
function removeData() {
    if (series.value.length === 1) return
    var arr = series.value.slice()
    arr.pop()
    series.value = arr
}
const randomize = () => {
    this.series = this.series.map(function () {
        return Math.floor(Math.random() * (100 - 1 + 1)) + 1
    })
}
const reset = () => {
    series.value = [44, 55, 13, 33]
}


</script>

<style></style>