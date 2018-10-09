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
      >
        <q-item v-ripple>
          <q-item-side icon="mdi-account-circle"></q-item-side>
          <q-item-main label="Minha Conta"></q-item-main>
        </q-item>
        <q-item v-ripple>
          <q-item-side icon="mdi-wallet"></q-item-side>
          <q-item-main label="Meus Bonus"></q-item-main>
        </q-item>
        <q-item v-ripple>
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
    border-radius 0
    #user-dropdown-container
      padding 15px
      display: flex
      flex-direction column
      background $secondary_dark
      &__info
        display: flex
        flex-direction row
        img
          width: 60px
          height 60px
          background #fff
          border-radius 2px
        .name, .email, .company
          line-height 20px
        .name
          font-size 20px
          color $secondary_ultra_light
        .email
          font-size 14px
          color $secondary_ultra_light
        .company
          font-size 14px
          color $secondary_mega_light
</style>
