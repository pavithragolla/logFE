<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" width="100">
      <!-- <el-button>Refresh</el-button> -->
      <nuxt-link to="/"><el-button class="logout">Logout</el-button></nuxt-link>

      <!-- <el-submenu index="2"> -->
      <!-- <template slot="title">Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item> -->
      <!-- <el-submenu index="2-4">
          <template slot="title">item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item> -->
      <!-- </el-submenu>
      </el-submenu> -->
      <!-- <el-menu-item index="3" disabled>Info</el-menu-item> -->
    </el-menu>
  </div>
</template>




<style scoped>
.el-menu-demo {
  background-color: rgb(228, 234, 249);
  border: 1px rgb(23, 84, 239);
  margin-left: 22px;
}
.el-menu-item {
  color: rgb(2, 2, 2);
}
/* .logout {
  margin-left: 1090px;
} */
.logout {
  margin-right: 1090px;
}
</style>