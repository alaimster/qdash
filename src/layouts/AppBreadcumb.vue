<template>
  <div id="page-titles">
    <div id="breadcumb-container">
      <h3 id="page-title">{{page}}</h3>
      <q-breadcrumbs>
        <q-icon name="chevron_right" slot="separator" slot-scope="props"></q-icon>
        <q-breadcrumbs-el :key="i" v-for="(route, i) in routes" :label="route.meta.name"></q-breadcrumbs-el>
      </q-breadcrumbs>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      page: this.$route.meta.name,
      routes: this.$route.matched
    }
  }
}
</script>

<style lang="stylus">
  @import './../css/themes/common.variables.styl'

  #page-titles
    padding: 10px 15px;
    #breadcumb-container
      margin 0 20px
      #page-title
        color $primary
        margin 0
        font-size: 24px;
        font-weight 400
      .q-breadcrumbs
        & > div
          padding-top 0
        .q-breadcrumbs-separator
          font-size 20px
          .q-icon
            font-size 16px
        .q-link
          font-weight 400
</style>
