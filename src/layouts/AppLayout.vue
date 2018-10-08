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
  #app-view
    background #f4f7fa
</style>
