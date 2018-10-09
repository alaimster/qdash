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
        separator
        link
        id="dropdown-notification-list"
      >
        <q-list-header id="dropdown-notification-list-header">Notificações</q-list-header>
        <q-item v-ripple>
          <q-item-side>
              <q-icon class="q-item-avatar" size="1.4rem" name="mdi-wallet-travel"></q-icon>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Lorem ipsum</q-item-tile>
            <q-item-tile sublabel>Lorem ipsum, Lorem ipsum Lorem ipsumLorem ipsum...</q-item-tile>
            <q-item-tile sublabel><small>10:22</small></q-item-tile>
          </q-item-main>
        </q-item>
        <q-item v-ripple>
          <q-item-side>
            <q-icon class="q-item-avatar" size="1.4rem" name="mdi-wallet-travel"></q-icon>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Lorem ipsum</q-item-tile>
            <q-item-tile sublabel>Lorem ipsum, Lorem ipsum Lorem ipsumLorem ipsum...</q-item-tile>
            <q-item-tile sublabel><small>10:22</small></q-item-tile>
          </q-item-main>
        </q-item>
        <q-item v-ripple>
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
    border-radius 0
    max-width 400px !important
    &-list
      padding 0 !important
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
