<template>
  <div class="full-height">
    <q-btn id="notification-button" @click="showingNotification = !showingNotification" class="full-height no-border" :class="{ active: notificationIsActive}" flat>
      <q-icon size="1.7em" color="black" name="mdi-bell"></q-icon>
    </q-btn>
    <q-popover
      @show="notificationIsActive = true"
      @hide="notificationIsActive = false"
      id="dropdown-notification"
      fit
      v-model="showingNotification"
    >
      <q-list
        link
        id="dropdown-notification-list"
      >
        <q-list-header
          id="dropdown-notification-list-header"
          class="row  justify-between items-center"
        >Notificações
          <q-chip square color="primary">4 NOVAS</q-chip>
        </q-list-header>
        <q-item v-ripple class="q-ma-sm">
          <q-item-side>
              <q-icon class="q-item-avatar" size="1.4rem" name="mdi-wallet-travel"></q-icon>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Lorem ipsum</q-item-tile>
            <q-item-tile sublabel>Lorem ipsum, Lorem ipsum Lorem ipsumLorem ipsum...</q-item-tile>
            <q-item-tile sublabel><small>10:22</small></q-item-tile>
          </q-item-main>
        </q-item>
        <q-item v-ripple class="q-ma-sm">
          <q-item-side>
            <q-icon class="q-item-avatar" size="1.4rem" name="mdi-wallet-travel"></q-icon>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Lorem ipsum</q-item-tile>
            <q-item-tile sublabel>Lorem ipsum, Lorem ipsum Lorem ipsumLorem ipsum...</q-item-tile>
            <q-item-tile sublabel><small>10:22</small></q-item-tile>
          </q-item-main>
        </q-item>
        <q-item v-ripple class="q-ma-sm">
          <q-item-side>
            <q-icon class="q-item-avatar" size="1.4rem" name="mdi-wallet-travel"></q-icon>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Lorem ipsum</q-item-tile>
            <q-item-tile sublabel>Lorem ipsum, Lorem ipsum Lorem ipsumLorem ipsum...</q-item-tile>
            <q-item-tile sublabel><small>10:22</small></q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-popover>
  </div>
</template>

<script>
export default {
  data: () => ({
    showingNotification: false,
    notificationIsActive: false
  })
}
</script>

<style lang="stylus">
  @import './../../css/themes/common.variables.styl'

  #notification-button
    &:focus
      .q-focus-helper
        background initial
    &.active
      .q-focus-helper
        background currentColor
  #dropdown-notification
    max-width 400px !important
    &-list
      background $secondary_ultra_light
      padding 0 !important
      .q-item
        background #fff
        border-radius 4px
        box-shadow 0 3px 2px 0 rgba(0,0,0,.02)
        .q-item-label
          color $secondary
        .q-item-sublabel
          color $secondary_mega_light
        &:hover
          color $primary
      .q-item-avatar
        background #303240
        color #90a4ae
      &-header
        padding 20px !important
        letter-spacing: 0.5px;
        font-size: 16px;
        text-transform: uppercase
        font-weight 600
        background $secondary_dark
        color $secondary_ultra_light
</style>
