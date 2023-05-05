<template>
    <div dir="auto">
        <v-sheet class="ma-4 pa-2">
            {{ $t('GroupedLabels') }}
        </v-sheet>
        <div class="pa-md-4">
            <apexchart type="bar" height="380" :options="{
                chart: {
                    type: 'bar',
                    height: 380,
                    fontFamily: 'IRANSans',
                    toolbar: {
                        show: true,
                        tools: {
                            download: false
                        }
                    },

                },
                xaxis: {
                    type: 'category',

                    group: {
                        style: {
                            fontSize: '10px',
                            fontWeight: 700
                        },
                        groups: [
                            { title: '2019', cols: 4 },
                            { title: '2020', cols: 4 }
                        ]
                    }
                },

            }" :series="[
    {
        name: 'sales',
        data: [{
            x: '2019/01/01',
            y: 400
        }, {
            x: '2019/04/01',
            y: 430
        }, {
            x: '2019/07/01',
            y: 448
        }, {
            x: '2019/10/01',
            y: 470
        }, {
            x: '2020/01/01',
            y: 540
        }, {
            x: '2020/04/01',
            y: 580
        }, {
            x: '2020/07/01',
            y: 690
        }, {
            x: '2020/10/01',
            y: 690
        }]
    }]"></apexchart>
        </div>
    </div>
</template>
<script setup>
const series = [{
    name: "sales",
    data: [{
        x: '2019/01/01',
        y: 400
    }, {
        x: '2019/04/01',
        y: 430
    }, {
        x: '2019/07/01',
        y: 448
    }, {
        x: '2019/10/01',
        y: 470
    }, {
        x: '2020/01/01',
        y: 540
    }, {
        x: '2020/04/01',
        y: 580
    }, {
        x: '2020/07/01',
        y: 690
    }, {
        x: '2020/10/01',
        y: 690
    }]
}]
const chartOptions = {
    chart: {
        type: 'bar',
        height: 380
    },
    xaxis: {
        type: 'category',

        group: {
            style: {
                fontSize: '10px',
                fontWeight: 700
            },
            groups: [
                { title: '2019', cols: 4 },
                { title: '2020', cols: 4 }
            ]
        }
    },
    title: {
        text: 'Grouped Labels on the X-axis',
    }

}

</script>


<style></style>