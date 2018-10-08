<template>
  <q-layout-drawer
    v-model="drawerState"
    width="250"
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

          <q-collapsible duration='750' collapse-icon="chevron_right" v-else-if="item.items" group="menu" :key="item.title" :icon="item.icon" :label="item.title">
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
import menu from '../statics/menu'
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
    background #303240
    box-shadow 0 0 10px 0 rgba(0,0,0,.5)
    #app-brand
      height 70px
      display flex
      justify-content: center
      align-items center
      color #fff
      background #2c2e3e
    .q-item
      transition: .3s cubic-bezier(.25,.8,.5,1)
      cursor pointer
      min-height: 45px;
      &:hover
        .q-item-label, .q-icon
          color #fff
      .q-item-side-left
        min-width: 24px !important;
        .q-icon
          font-size 18px !important
      .q-item-label
        font-size 14px !important
      .q-item-side-right
        .q-item-icon.q-icon
          font-size 16px
          transition .75s cubic-bezier(0.25, 0.8, 0.5, 1) !important
          &.rotate-180
            transform rotate(90deg) !important
    .q-collapsible-opened .q-collapsible-inner > .q-item
      .q-item-label, .q-icon
        color #fff
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
    .q-icon
      color #bdc1dc
    .q-item-main, .q-list-header
      color #bdc1dc
    .scroll-area
      height: calc(100vh - 48px)
      overflow: auto
      .ps__scrollbar-y-rail
        background transparent !important
</style>
