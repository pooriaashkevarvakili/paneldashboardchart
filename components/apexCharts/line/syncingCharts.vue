<template>
    <div id="wrapper">
        <div id="chart-line">
            <apexchart type="line" height="160" :options="chartOptions" :series="series"></apexchart>
        </div>
        <div id="chart-line2">
            <apexchart type="line" height="160" :options="chartOptionsLine2" :series="seriesLine2"></apexchart>
        </div>
    </div>
</template>
<script setup>
const series = [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60
    })
}]
const chartOptions = {

    chart: {
        id: 'fb',
        group: 'social',
        type: 'line',
        height: 160,

        colors: ['#008FFB'],
        toolbar: {
            show: false,
            tools: {
                download: false
            }
        },
    }
}
const seriesLine2 = [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 30
    })
}]
const chartOptionsLine2 = {
    chart: {
        id: 'tw',
        group: 'social',
        type: 'line',
        height: 160,
        toolbar: {
            show: false,
            tools: {
                download: false
            }
        },
    },
    colors: ['#546E7A']
}
const seriesArea = [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60
    })
}]
const chartOptionsArea = {
    chart: {
        id: 'yt',
        group: 'social',
        type: 'area',
        height: 160,
        toolbar: {
            show: false,
            tools: {
                download: false
            }
        },
    },
    colors: ['#00E396']
}
const seriesSmall = [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60
    })
}]

const chartOptionsSmall = {
    chart: {
        id: 'ig',
        group: 'social',
        type: 'area',
        height: 160,
        width: 300,
        toolbar: {
            show: false,
            tools: {
                download: false
            }
        },
    },
    colors: ['#008FFB']
}

const seriesSmall2 = [{
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60
    })
}]
const chartOptionsSmall2 = {
    chart: {
        id: 'li',
        group: 'social',
        type: 'area',
        height: 160,
        width: 300,
        toolbar: {
            show: false,
            tools: {
                download: false
            }
        },
    },
    colors: ['#546E7A']
}
function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
            yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}
const series_5 = computed(() => {
    return generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, { min: 30, max: 90 });

})

</script>
<style></style>