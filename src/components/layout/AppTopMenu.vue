<template>
  <q-layout-header>
    <q-toolbar
      id="app-tool-bar"
      color="grey-1"
      text-color="black"
    >
      <q-btn
        flat
        dense
        round
        @click="drawerState = !drawerState"
        aria-label="Menu"
      >
        <q-icon color="black" name="menu" />
      </q-btn>

      <q-toolbar-title id="app-tool-bar-content">
        Quasar App
      </q-toolbar-title>
    </q-toolbar>
  </q-layout-header>
</template>
<script>
export default {
  computed: {
    drawerState: {
      get () {
        return this.$store.state.app.drawerState
      },
      set (val) {
        this.$store.commit('app/updateDrawerState', val)
      }
    }
  }
}
</script>
<style lang="stylus">
  #app-tool-bar
    height: 64px;
</style>
