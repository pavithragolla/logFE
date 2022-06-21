<template>
  <div>
    <div><the-header></the-header></div>
    <div>
      <h1>Update User Status</h1>
    </div>
    <div class="container">
      <el-input class="input" type="textarea" placeholder="Enter user Id">
      </el-input>
      <el-button class="btn">Search</el-button>
      <br />
      <br />

      <el-tooltip
        class="tooltip"
        :content="'Switch value: ' + value"
        placement="top"
      >
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="1"
          inactive-value="0"
        >
        </el-switch>
      </el-tooltip>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      value: '1',
    }
  },
}
</script>

<style scoped>
.el-input {
  width: 50px;
}
.container {
  margin: 100px auto;
  text-align: center;
  width: 396px;
  height: 215px;
  background: rgb(2, 101, 151);
  border-radius: 8px;
  float: none;
  color: #1c1e21;
  padding-bottom: 24px;
  padding-top: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}
.input {
  margin-bottom: 20px;
}
h1 {
  text-align: center;
  font-style: italic;
  background-color: rgb(109, 174, 221);

  max-width: 500px;
  display: inline-block;
  margin-left: 500px;
}
</style>