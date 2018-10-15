<template>
  <q-page>
    <app-breadcumb></app-breadcumb>
    <q-card id="page-block">
        <div class="search-box q-pa-lg">
          <div class="row gutter-sm">
            <div class="col-xs-12 col-sm-12">
              <q-option-group
                class="q-mb-sm"
                color="primary"
                inline
                type="radio"
                v-model="trip_type"
                :options="[
              { label: 'Somente Ida', value: 'OW' },
              { label: 'Ida e Volta', value: 'RT' }
            ]"/>
            </div>
          </div>
          <div class="row gutter-sm">
            <div class="col-xs-12 col-sm-6">
              <q-search no-icon :after="[{icon: 'location_on', handler () {}}]" inverted v-model="from" float-label="Sair de" placeholder="Cidade ou Aeroporto">
                <q-autocomplete
                  :value-field="v => `${ v.label } (${ v.value })`"
                  @search="search"
                  class="text-primary"
                />
              </q-search>
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-search no-icon :after="[{icon: 'location_on', handler () {}}]" inverted v-model="to" float-label="Ir para" placeholder="Cidade ou Aeroporto">
                <q-autocomplete
                  :value-field="v => `${ v.label } (${ v.value })`"
                  @search="search"
                  class="text-primary"
                />
              </q-search>
            </div>
          </div>
          <div class="row gutter-sm q-pt-md">
            <div v-bind:class="[trip_type === 'OW' ? 'col-sm-6' : 'col-sm-4']" class="col-xs-12">
              <q-datetime :min="today" format="DD-MM-YYYY" inverted v-model="departure_date" :after="[{icon: 'date_range', handler () {}}]" float-label="Partida" />
            </div>
            <div v-show="trip_type === 'RT'" class="col-xs-12 col-sm-4">
              <q-datetime :min="departure_date || today" format="DD-MM-YYYY" inverted v-model="return_date" :after="[{icon: 'date_range', handler () {}}]" float-label="Retorno" />
            </div>
            <div v-bind:class="[trip_type === 'OW' ? 'col-sm-6' : 'col-sm-4']" class="col-xs-12">
              <q-btn color="primary" @click="send" no-caps id="trip-submit" icon="search" class="full-width full-height" label="Pesquisar Passagem" />
            </div>
          </div>
        </div>
    </q-card>

  </q-page>
</template>

<script>
import airports from './../statics/airports.json'
import fuzzysearch from 'fuzzysearch'
import AppBreadcumb from './../layouts/AppBreadcumb'

const today = new Date()

function parseAirports () {
  return airports.map(airport => {
    return {
      label: airport.city + ' - ' + airport.label,
      value: airport.value
    }
  })
}

export default {
  components: {
    AppBreadcumb
  },
  data () {
    return {
      trip_type: 'RT',
      from: null,
      to: null,
      departure_date: null,
      return_date: null,
      today
    }
  },
  methods: {
    search (terms, done) {
      done(parseAirports().filter(item => fuzzysearch(terms.toLowerCase(), item['label'].toLowerCase())))
    },
    send () {
      console.log(this.trip_type)
    }
  }
}
</script>

<style lang="stylus">
  @import './../css/themes/common.variables.styl'

  #page-block
    margin: 10px 35px
    background #fff
    box-shadow 0 4px 15px 0 $secondary_ultra_light
    border-radius 0
    .q-btn
      border-radius 2px
    .q-option-label
      color $secondary_light
    .q-input, .q-datetime-input
      background #fff !important
      color $primary !important
      box-shadow 3px 3px 0px 0px #ccc
      border-radius 2px
      font-weight:600
      border 1px solid $secondary_mega_light
      .q-if-label, .q-if-control
        color $secondary_mega_light
</style>
