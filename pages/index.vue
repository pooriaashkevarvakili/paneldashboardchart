
<template>
    <v-app>
        <v-row class="pa-md-4">
            <v-col cols="12" lg="3" md="12" sm="12">
                <v-card min-height="200" theme="light">
                    <div class="text-center">
                        <img src="donut.svg" />
                    </div>
                    <v-card-item class="text-center">
                        <v-btn color="indigo-darken-3" block to="/donut">donut</v-btn>
                    </v-card-item>
                </v-card>


            </v-col>
            <v-col cols="12" lg="3" md="12" sm="12">
                <v-card min-height="200" theme="light">
                    <div class="text-center">
                        <img class="w-75" src="line.svg" />
                    </div>
                    <v-card-item class="text-center">
                        <v-btn color="indigo-darken-3" block to="/line">line</v-btn>
                    </v-card-item>
                </v-card>


            </v-col>
        </v-row>
    </v-app>
</template>
<script setup>




</script>

<style ></style>