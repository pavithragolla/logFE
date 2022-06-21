<template>
  <div>
    <the-header></the-header>
    <single-tag :tagId="this.$route.params.id"></single-tag>
  </div>
</template>

<script>
import SingleTag from '~/components/SingleTag.vue'
import TheHeader from '~/components/TheHeader.vue'
export default {
  components: { TheHeader, SingleTag },
  created() {
    this.$store.commit('setTagId', this.$route.params.id)
  },
}
</script>

<style>
</style>