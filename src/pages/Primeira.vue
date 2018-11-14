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
          <div class="row gutter-md">
            <div class="col-xs-12 col-sm-6">
              <q-search no-icon :after="[{icon: 'icon-la la la-map-marker', handler () {}}]" ref="from" inverted v-model="from" placeholder="De onde?">
                <q-autocomplete
                  :value-field="v => `${ v.label } (${ v.value })`"
                  @search="search"
                  @selected="$refs.to.focus()"
                />
              </q-search>
            </div>
            <div class="col-xs-12 col-sm-6">
              <q-search no-icon :after="[{icon: 'icon-la la la-map-marker', handler () {}}]" ref="to" inverted v-model="to" placeholder="Para onde?">
                <q-autocomplete
                  :value-field="v => `${ v.label } (${ v.value })`"
                  @search="search"
                  @selected="$refs.departure_date.$el.click()"
                />
              </q-search>
            </div>
          </div>
          <div class="row gutter-md q-pt-md">
            <div v-bind:class="[trip_type === 'OW' ? 'col-sm-6' : 'col-sm-4']" class="col-xs-12">
              <q-datetime
                :min="today"
                :max="return_date"
                format="DD/MM/YYYY"
                inverted
                v-model="departure_date"
                ref="departure_date"
                :after="[{icon: 'icon-la la la-calendar', handler () {}}]"
                @change="trip_type === 'RT' ? $refs.return_date.$el.click() : $refs.submit.$el.focus()"
                placeholder="Data de Partida"
              />
            </div>
            <div v-show="trip_type === 'RT'" class="col-xs-12 col-sm-4">
              <q-datetime
                :min="departure_date || today"
                format="DD/MM/YYYY"
                inverted
                v-model="return_date"
                ref="return_date"
                :after="[{icon: 'icon-la la la-calendar', handler () {}}]"
                @change="$refs.submit.$el.focus()"
                placeholder="Data de Volta"
              />
            </div>
            <div v-bind:class="[trip_type === 'OW' ? 'col-sm-6' : 'col-sm-4']" class="col-xs-12">
              <q-btn color="primary" @click="send" ref="submit" no-caps id="trip-submit" class="full-width full-height" label="PESQUISAR PASSAGEM" />
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

  @keyframes framed
    0%
        left: 0%;
        opacity: 0
    5%
        opacity: 0
    10%
        opacity: .12
    60%
        opacity: .1
    70%
        opacity: .08
    85%
        opacity: 0;
    to
        left: 90%

  #page-block
    margin: 10px 35px
    background $secondary
    box-shadow 0 4px 15px 0 $secondary_ultra_light
    border-radius 4px
    .q-btn
      border-radius 4px
      box-shadow none
      font-weight:400
      font-size 16px
      box-shadow 3px 3px 0px 0px $secondary_dark
      text-shadow: 1px 1px 0px $secondary_dark;
      overflow hidden
      &:after
        content: "";
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.03) 1%,hsla(0,0%,100%,.6) 30%,hsla(0,0%,100%,.85) 50%,hsla(0,0%,100%,.85) 60%,hsla(0,0%,100%,.85) 0,hsla(0,0%,100%,0));
        width: 25%;
        height: 100%;
        transform: skew(-10deg,0deg);
        animation: framed 3s;
        animation-iteration-count: infinite;
        animation-delay: 1s;

    .q-option-label
      color $secondary_ultra_light
      font-weight 400
    .q-input, .q-datetime-input
      background $secondary_light !important
      color $secondary_ultra_light !important
      box-shadow none
      min-height: 50px;
      border-radius 4px
      font-weight 400
      border 2px solid transparent
      padding-left: 14px;
      padding-right: 14px;
      box-shadow 3px 3px 0px 0px $secondary_dark
      &.q-if-focused
        border-color $primary
      .q-if-label-above
        line-height 20px !important
      .q-if-label
        color $secondary_mega_light
        font-weight 500
        line-height 26px
      .q-if-control
        font-size 25px !important
        color $primary
        &:nth-of-type(2)
          display none
</style>
