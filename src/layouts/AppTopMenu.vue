<template>
  <q-layout-header id="app-header">
    <q-toolbar
      id="app-header-toolbar"
      color="grey-1"
      text-color="black"
    >
      <q-btn
        flat
        @click="drawerState = !drawerState"
        aria-label="Menu"
        class="full-height no-border"
      >
        <q-icon size="1.7em" color="black" name="menu"></q-icon>
      </q-btn>

      <dropdown-notification></dropdown-notification>

      <q-toolbar-title></q-toolbar-title>

      <dropdown-user></dropdown-user>

    </q-toolbar>
  </q-layout-header>
</template>
<script>
import DropdownUser from './../components/dropdown/DropdownUser'
import DropdownNotification from './../components/dropdown/DropdownNotification'

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
  },
  components: {
    DropdownUser,
    DropdownNotification
  }
}
</script>
<style lang="stylus">
  @import './../css/themes/common.variables.styl'

  #app-header
    box-shadow 0 4px 15px 0 rgba(0,0,0,.09)
    #app-header-toolbar
      padding 0 20px !important
      height: 70px;
      .q-icon
        color $secondary !important
</style>
