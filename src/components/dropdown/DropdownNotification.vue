<template>
  <div>
    <q-btn @click="showingNotification = !showingNotification" class="q-ml-md" flat round>
      <q-icon size="1.7em" color="black" name="mdi-bell"></q-icon>
    </q-btn>
    <q-popover id="dropdown-notification" fit v-model="showingNotification">
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
  data () {
    return {
      showingNotification: false
    }
  }
}
</script>

<style lang="stylus">
  #dropdown-notification
    margin-top 14px
    max-width 400px !important
    &-list
      padding 0 !important
      .q-item-avatar
        background #303240
        color #90a4ae
      &-header
        padding 20px !important
        text-transform: uppercase
        background #303240
        color #90a4ae
</style>
