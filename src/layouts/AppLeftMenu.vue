<template>
  <q-layout-drawer
    v-model="drawerState"
    width="240"
    id='app-left-menu'
  >
    <div id="app-brand">
      Quasar
    </div>

    <q-scroll-area style="height: 100%">
      <q-list
        no-border
        inset-delimiter
      >
        <template v-for="item in menu">

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
    </q-scroll-area>
  </q-layout-drawer>
</template>

<script>
import menu from '../statics/menu'

export default {
  data: () => ({
    menu: menu
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
  }
}
</script>

<style lang="stylus">
  @import './../css/themes/common.variables.styl'

  #app-left-menu
    overflow hidden
    background $secondary
    box-shadow 0 0 10px 0 rgba(0,0,0,.5)
    #app-brand
      height 70px
      display flex
      justify-content: center
      align-items center
      color #fff
      background $secondary_dark
    .q-item
      transition: .3s cubic-bezier(.25,.8,.5,1)
      cursor pointer
      min-height: 45px;
      &:hover
        .q-item-label, .q-icon
          color $primary
      .q-item-side-left
        min-width: 24px !important;
        .q-icon
          font-size 18px !important
      .q-item-label
        font-size 16px !important
        font-weight 300
      .q-item-side-right
        .q-item-icon.q-icon
          font-size 16px
          transition .75s cubic-bezier(0.25, 0.8, 0.5, 1) !important
          &.rotate-180
            transform rotate(90deg) !important
    .q-collapsible-opened .q-collapsible-inner > .q-item
      .q-item-label, .q-icon
        color $primary
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
        box-shadow: 0 4px 15px 0 rgba(0,0,0,.1);
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform .2s ease-in-out;
        width: 85%;
        z-index: -1;
    .q-icon
      color $secondary_ultra_light
    .q-item-main
      color $secondary_ultra_light
    .q-list-header
      color $secondary_mega_light
      text-transform: uppercase
</style>
