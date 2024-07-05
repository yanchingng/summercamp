<script setup>
import {ref} from 'vue'

const visible = ref(false)

const colA = [
  {
    name: 'dateClass',
    align: 'center',
    label: '12:30-14:30',
    field: 'dateClass',
    sortable: true,
  },
]
const colB = [
  {
    name: 'dateClass',
    label: '16:45-18:45',
    field: 'dateClass',
    sortable: true,
    align: 'center',
  },
]
const colC = [
  {
    name: 'dateClass',
    align: 'center',
    label: '16:45-18:45',
    field: 'dateClass',
    sortable: true,
  },
]

const optionA = [
  {id: 1, dateClass: '6月24日', weekday: '星期一'},
  {id: 2, dateClass: '6月25日', weekday: '星期二'},
  {id: 3, dateClass: '6月26日', weekday: '星期三'},
  {id: 4, dateClass: '6月27日', weekday: '星期四'},
  {id: 5, dateClass: '6月28日', weekday: '星期五'},
  {id: 6, dateClass: '7月1日', weekday: '星期一'},
  {id: 7, dateClass: '7月2日', weekday: '星期二'},
  {id: 8, dateClass: '7月3日', weekday: '星期三'},
  {id: 9, dateClass: '7月4日', weekday: '星期四'},
  {id: 10, dateClass: '7月5日', weekday: '星期五'}
]

const optionB = [
  {id: 1, dateClass: '7月15日', weekday: '星期一'},
  {id: 2, dateClass: '7月16日', weekday: '星期二'},
  {id: 3, dateClass: '7月17日', weekday: '星期三'},
  {id: 4, dateClass: '7月18日', weekday: '星期四'},
  {id: 5, dateClass: '7月19日', weekday: '星期五'},
  {id: 6, dateClass: '7月22日', weekday: '星期一'},
  {id: 7, dateClass: '7月23日', weekday: '星期二'},
  {id: 8, dateClass: '7月24日', weekday: '星期三'},
  {id: 9, dateClass: '7月25日', weekday: '星期四'},
  {id: 10, dateClass: '7月26日', weekday: '星期五'}
]

const optionC = [
  {id: 1, dateClass: '8月12日', weekday: '星期一'},
  {id: 2, dateClass: '8月13日', weekday: '星期二'},
  {id: 3, dateClass: '8月14日', weekday: '星期三'},
  {id: 4, dateClass: '8月15日', weekday: '星期四'},
  {id: 5, dateClass: '8月16日', weekday: '星期五'},
  {id: 6, dateClass: '8月19日', weekday: '星期一'},
  {id: 7, dateClass: '8月20日', weekday: '星期二'},
  {id: 8, dateClass: '8月21日', weekday: '星期三'},
  {id: 9, dateClass: '8月22日', weekday: '星期四'},
  {id: 10, dateClass: '8月23日', weekday: '星期五'}
]

function openPromotion() {
  visible.value = true
}

defineExpose({openPromotion})

</script>

<template>
  <q-dialog v-model="visible" persistent class="">
    <q-card style="min-width: 400px; width: 50vw" class="glassForm">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">
          Tech Summer Camp
        </div>
        <q-space/>
        <q-btn icon="close" flat round dense v-close-popup/>
      </q-card-section>
      <q-card-section class="q-pt-none column items-center text-center rounded-borders bg-grey-2 q-pa-md">
        <h6>Content</h6>
        <span class="text-weight-bold text-body1 text-red">LEARN HOW TO DO THIS WEBSITE AND PUBLISH IT</span>
      </q-card-section>
      <div class="column items-center text-center rounded-borders q-mt-md">
        <h6>Course Options</h6>
        <div class="row justify-between full-width">
          <div class="col-xs-4 col-md-4 q-pa-xs-xs q-pa-md-sm">
            <q-table
              title="June"
              flat bordered
              :rows="optionA"
              :columns="colA"
              row-key="id"
              :pagination="{rowsPerPage: 10}"
              dense
              hide-bottom
            />
          </div>
          <div class="col-xs-4 col-md-4 q-pa-xs-xs q-pa-md-sm">
            <q-table
              title="July"
              flat bordered
              :rows="optionB"
              :columns="colB"
              row-key="id"
              :pagination="{rowsPerPage: 10}"
              dense
              hide-bottom
            />
          </div>
          <div class="col-xs-4 col-md-4 q-pa-xs-xs q-pa-md-sm">
            <q-table
              title="August"
              flat bordered
              :rows="optionC"
              :columns="colC"
              row-key="id"
              :pagination="{rowsPerPage: 10}"
              dense
              hide-bottom
            />
          </div>
        </div>
      </div>
      <q-card-section class="q-pt-none column items-center text-center rounded-borders q-ma-md bg-grey-2">
        <div class="row full-width text-center">
          <div class="col-xs-12 col-md-6 column">
            <span class="text-weight-bold text-body1">Western Main Teacher</span>
            <span>Master Cand. in Computer Science</span>
          </div>
          <div class="col-xs-12 col-md-6 column q-mt-xs-sm q-mt-md-none">
            <span class="text-weight-bold text-body1">Chinese Assistant</span>
            <span>Translating simultaneously in Chinese</span>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none column items-center text-center rounded-borders q-ma-md bg-grey-2">
        <h6>Investment</h6>
        <div class="row full-width text-center">
          <div class="col-xs-12 col-md-6 column">
            <span class="">100 MOP / hour</span>
          </div>
          <div class="col-xs-12 col-md-6 column">
            <span>20 hours</span>
          </div>
        </div>
        <div class="row full-width justify-center">
          <span class="text-weight-bold text-body1">2000 MOP</span>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none column items-center text-center rounded-borders q-ma-md bg-grey-2">
        <h6>WeChat</h6>
        <q-img src="~assets/wechat.png" class="rounded-borders" style="max-width: 250px"></q-img>

      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
