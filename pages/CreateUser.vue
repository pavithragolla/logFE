<template>
  <div>
    <the-header></the-header>
    <!-- <el-select placeholder="Select" prop="value">
      <el-option prop="value">
        <span style="float: left"></span>
        <span style="float: right; color: #8492a6; font-size: 13px"></span>
      </el-option>
    </el-select> -->
    <br />
    <h1>Create User</h1>
    <div>
      <el-form v-loading="loading" label-width="50" class="demo-ruleForm">
        <el-form-item label="Name">
          <el-input type="Name" autocomplete="off" v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="Email">
          <el-input type="Email" autocomplete="off" v-model="email"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input auto-complete="off" v-model="password"></el-input>
          <el-form-item label="IsSuperUser">
            <el-input auto-complete="off" v-model="issuperuser"></el-input>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="createuser">Submit</el-button>
          <!-- <el-button>Reset</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      issuperuser: '',
      loading: false,
    }
  },
  methods: {
    async createuser() {
      this.loading = true
      await this.$store.dispatch('createUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        issuperuser: this.issuperuser,
      })

      this.$router.push('/LogList')
      this.loading = false
    },
  },
}
</script>

<style scoped>
.el-menu {
  background-color: rgb(71, 124, 239);
  height: 15vh;
}
.el-select {
  display: inline;
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