<template>
  <q-layout-drawer
    v-model="drawerState"
    width="260"
    id='app-left-menu'
  >
    <div id="app-brand">
      Quasar
    </div>

    <vue-perfect-scrollbar class="scroll-area" :settings="scrollSettings">
      <q-list
        no-border
        inset-delimiter
      >
        <template v-for="item in menus">

          <q-list-header :key="item.name" v-if="item.header">{{ item.header }}</q-list-header>

          <q-collapsible v-else-if="item.items" group="menu" :key="item.title" :icon="item.icon" :label="item.title">
            <q-item :key="subItem.name" v-for="subItem in item.items">
              <q-item-main :label="subItem.title"></q-item-main>
            </q-item>
          </q-collapsible>

          <q-item v-else :key="item.name">
            <q-item-side :icon="item.icon"></q-item-side>
            <q-item-main :label="item.name"></q-item-main>
          </q-item>

        </template>

      </q-list>
    </vue-perfect-scrollbar>
  </q-layout-drawer>
</template>

<script>
import menu from './../../statics/menu'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  data: () => ({
    menus: menu,
    scrollSettings: {
      maxScrollbarLength: 160
    }
  }),
  computed: {
    drawerState: {
      get () {
        return this.$store.state.app.drawerState
      },
      set (val) {
        this.$store.commit('app/updateDrawerState', this.$q.platform.is.desktop)
      }
    }
  },
  components: {
    VuePerfectScrollbar
  }
}
</script>

<style lang="stylus">
  #app-left-menu
    overflow: hidden
    width: 250px;
    background #323745
    #app-brand
      height 64px
      display flex
      justify-content: center
      align-items center
      color #fff
    .q-item
      transition: .3s cubic-bezier(.25,.8,.5,1)
      cursor pointer
      &:hover
        font-weight: 700
    .q-collapsible-opened .q-collapsible-inner > .q-item
      &:before
        transform: scaleX(1);
    .q-list > .q-item, .q-collapsible-inner > .q-item
      &:hover
        &:before
          transform: scaleX(1);
      &:before
        background-color: rgba(0,0,0,.2);
        border-radius: 0 100px 100px 0;
        bottom: 0;
        box-shadow: 0 4px 15px 0 rgba(0,0,0,.09);
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .2s ease-in-out;
        width: 210px;
        z-index: -1;
    .q-item-main, .q-icon, .q-list-header
      color #fff
    .scroll-area
      height: calc(100vh - 48px)
      overflow: auto
      .ps__scrollbar-y-rail
        background transparent !important
</style>
