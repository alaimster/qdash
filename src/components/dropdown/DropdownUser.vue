<template>
  <div class="full-height">
    <q-btn id="user-button" :class="{ active: userIsActive}" class="full-height no-border" @click="showingUser = !showingUser" flat>
      <img src="./../../statics/icons/user.png" class="q-item-avatar">
    </q-btn>
    <q-popover
      @show="userIsActive = true"
      @hide="userIsActive = false"
      id="dropdown-user"
      fit
      v-model="showingUser">
      <div id='user-dropdown-container'>
        <div id="user-dropdown-container__info">
          <img src="./../../statics/icons/user.png">
          <div class="column justify-between q-pr-md q-pl-md">
            <span class="name">Steve Jobs</span>
            <span class="email">steavejobs@gmail.com</span>
            <span class="company">MOIP</span>
          </div>
        </div>
      </div>
      <q-list
        link
        class="no-border"
      >
        <q-item v-ripple class="q-ma-sm">
          <q-item-side icon="mdi-account-circle"></q-item-side>
          <q-item-main label="Minha Conta"></q-item-main>
        </q-item>
        <q-item v-ripple class="q-ma-sm">
          <q-item-side icon="mdi-wallet"></q-item-side>
          <q-item-main label="Meus Bonus"></q-item-main>
        </q-item>
        <q-item v-ripple class="q-ma-sm">
          <q-item-side icon="mdi-power"></q-item-side>
          <q-item-main label="Sair"></q-item-main>
        </q-item>
      </q-list>
    </q-popover>
  </div>
</template>

<script>
export default {
  data: () => ({
    showingUser: false,
    userIsActive: false
  })
}
</script>

<style lang="stylus">
  @import './../../css/themes/common.variables.styl'

  #user-button
    &:focus
      .q-focus-helper
        background initial
    &.active
      .q-focus-helper
        background currentColor
  #dropdown-user
    box-shadow 0 4px 15px 0 rgba(0,0,0,0.09)
    border-radius: 0;
    #user-dropdown-container
      padding 20px
      display: flex
      flex-direction column
      background $secondary_dark
      &__info
        display: flex
        flex-direction row
        img
          width: 80px
          height 80px
          background #fff
          border-radius 4px
        .name
          font-size 20px
          color $secondary_ultra_light
        .email
          font-size 14px
          color $secondary_ultra_light
        .company
          font-size 14px
          color $secondary_mega_light
    .q-list
      background #fff
      padding 0
    .q-list-link > .q-item
      padding 10px 15px
      background $secondary_ultra_light
      border-radius 4px
      box-shadow 0 3px 2px 0 rgba(0,0,0,.02)
    .q-list-link > .q-item, .q-list-link > .q-item .q-icon
      color $secondary !important
    .q-list-link > .q-item:hover, .q-list-link > .q-item:hover .q-icon
      color $primary !important
</style>
