<template>
  <div>
    <the-header></the-header>
    <single-user :UserId="this.$route.params.id" />
  </div>
</template>

<script>
import SingleUser from '~/components/SingleUser.vue'
import TheHeader from '~/components/TheHeader.vue'

export default {
  components: { TheHeader, SingleUser },

  created() {
    this.$store.commit('setUserId', this.$route.params.id)
  },
}
</script>

<style>
</style>