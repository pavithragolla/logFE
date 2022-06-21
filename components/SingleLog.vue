<template>
  <div class="container">
    <br />
    <br />
    <!-- <button>edit</button> -->
    <!-- <button>delete</button> -->
    <!-- <button>edit</button> -->
    <div class="log">
      <p>Id: {{ this.$route.params.id }}</p>
      <br />
      <p>Title:{{ title }}</p>
      <br />
      <p>StackTrace:{{ stack_trace }}</p>
      <br />
      <p>
        Description:
        <el-input v-model="Description" v-if="isupdating" type="text" />
        <span v-else>{{ description }}</span>
        <br />
        <el-button v-if="!isupdating" @click="edit">edit</el-button>
        <el-button v-if="isupdating" @click="updateLog(logid)"
          >submit</el-button
        >
      </p>
      <div class="log-btn">
        <el-button
          icon="el-icon-delete"
          type="danger"
          @click="logDelete"
        ></el-button>
      </div>
    </div>
    <div class="tag">
      <b><p>Tags:</p></b>
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in tagtype"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <!-- <el-form-item> -->
      <el-button type="primary" @click="createTag">Add</el-button>
    </div>
    <!-- </el-form-item> -->
    <!-- <el-button>Reset</el-button> -->

    <!-- <p>
      Tag:
      <el-input v-model="Tag" v-if="isupdating" type="text" />
      <span v-else>{{ tag }}</span>
      <el-button v-if="!isupdating" @click="editTag">edit</el-button>
      <el-button v-if="isupdating" @click="updateTag(tag)">submit</el-button>
    </p> -->
    <!-- <p>
      Description:{{ description }}
      <input type="text" :disabled="disabled == 1" />
    </p>
    <button @click="disabled = (disabled + 1) % 2">edit</button> -->
    <!-- <button>edit</button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  // props: {
  //   logId: {
  //     type: String,
  //     required: true,
  //   },
  data() {
    return {
      Description: '',
      isupdating: false,
      Tag: [],
      name: '',
      type_id: '',
      tag: [],
      value: '',
    }
  },
  computed: {
    ...mapState([
      'log',
      'userId',
      'title',
      'logid',
      'stack_trace',
      'description',
      'id',
      'tagtype',
    ]),
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
    },

    async created() {
      await this.$store.dispatch('getLogById')
    },
    edit() {
      this.isupdating = true
      this.Description = this.description
    },

    editTag() {
      this.isupdating = true
      this.tag = this.Tag
    },

    async updateLog(id) {
      // alert(id)
      this.isVisible = false
      await this.$store.dispatch('updateLog', {
        id,
        description: this.Description,
        tag: this.Tag,
      })
      this.$router.push('/LogList')
    },
    logDelete() {
      this.$store.dispatch('deleteLog', +this.$route.params.id)
      this.$router.push('/LogList')
    },
  },
}
</script>

<style scoped>
.log {
  margin-left: 300px;
}
.tag {
  margin-left: 300px;
}
.log-btn {
  margin-left: 500px;
}
</style>