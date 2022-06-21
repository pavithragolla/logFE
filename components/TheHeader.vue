<template>
  <div class="header-container">
    <el-menu class="el-menu-demo" mode="horizontal">
      <nuxt-link to="/LogList">
        <el-button class="button1">Home</el-button></nuxt-link
      >
      <nuxt-link to="/"><el-button class="button">Logout</el-button></nuxt-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.el-menu-demo {
  background-color: rgb(228, 234, 249);
}
.el-menu-item {
  color: rgb(2, 2, 2);
}
.button {
  margin-left: 1070px;
  margin-top: 2px;
}

.button1 {
  margin-left: 4px;
  margin-top: 2px;
}
</style>
