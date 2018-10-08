<template>
  <div>
    <q-btn @click="showingUser = !showingUser" flat round>
      <img src="./../../statics/icons/user.png" class="q-item-avatar">
    </q-btn>
    <q-popover id="dropdown-user" fit v-model="showingUser">
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
  data () {
    return {
      showingUser: false
    }
  }
}
</script>

<style lang="stylus">
  #dropdown-user
    margin-top 14px
    #user-dropdown-container
      padding 15px
      display: flex
      flex-direction column
      background #303240
      &__info
        display: flex
        flex-direction row
        img
          width: 60px
          height 60px
          background #fff
          border-radius 4px
        .name
          font-size 20px
          color #90a4ae
          line-height 20px
        .email
          font-size 14px
          color #90a4ae
          line-height 20px
        .company
          color #90a4ae
          font-size 14px
          line-height 20px
</style>
