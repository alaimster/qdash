<template>
  <q-layout view="lHh LpR lFr">

    <app-top-menu></app-top-menu>
    <app-left-menu></app-left-menu>

    <q-page-container id="app-view">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppTopMenu from './AppTopMenu'
import AppLeftMenu from './AppLeftMenu'

export default {
  components: {
    AppTopMenu,
    AppLeftMenu
  }
}
</script>

<style lang="stylus">
  @import './../css/themes/common.variables.styl'

  #app-view
    background $secondary_ultra_light
    padding-top 80px !important
</style>
