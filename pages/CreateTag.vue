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
    <h1>Create Tag</h1>
    <div>
      <el-form label-width="50" class="demo-ruleForm">
        <el-form-item label="Name">
          <el-input v-model="name" type="Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-select v-model="value" clearable placeholder="Select">
          <el-option
            v-for="item in tagtype"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
        <br />
        <br />
        <!-- <el-form-item label="Id">
          <el-input v-model="type_id" type="type_id"></el-input>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="createTag">Submit</el-button>
          <!-- <el-button>Reset</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      name: '',
      type_id: '',

      tag: [],
      value: '',
    }
  },
  computed: {
    ...mapState(['log', 'id', 'tagtype']),
  },
  async mounted() {
    await this.$store.dispatch('getAllTagType')
  },
  methods: {
    async createTag(id) {
      console.log(this.value)
      await this.$store.dispatch('createTag', {
        name: this.name,
        type_id: this.value,
      })
      this.tag = ''
      console.log('hiiiiiiiii')
      this.$router.push('/AllTags')
    },

    async getAllTagType() {
      await this.$store.dispatch('getAllTagType')
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
