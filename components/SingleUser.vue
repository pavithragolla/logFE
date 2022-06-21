<template>
  <div>
    <!-- <the-header></the-header> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h1>User</h1>
    <el-card class="box-card">
      <div class="text-item">
        <p>Name: {{ name }}</p>
        <p>email: {{ email }}</p>
        <p>Superuser: {{ is_superuser }}</p>
        <p>
          Status:
          <el-input v-model="Status" v-if="isupdating" type="text" />
          <span v-else>{{ status }}</span>
          <el-button v-if="!isupdating" @click="edit">edit</el-button>
          <el-button v-if="isupdating" @click="updateuser">submit</el-button>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import TheHeader from '~/components/TheHeader.vue'
export default {
  // components: { TheHeader },
  data() {
    return {
      input: '',
      isupdating: false,
      Status: '',
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState([
      'user',
      'is_superuser',
      'status',
      'email',
      'name',
      'userid',
      'tag',
    ]),
  },
  methods: {
    async created() {
      await this.$store.dispatch('getUserById')
    },
    edit() {
      this.isupdating = true
      this.Status = this.status
    },

    async updateuser() {
      // alert(id)
      // this.isVisible = false
      await this.$store.dispatch('updateUser', {
        id: this.id,
        status: parseInt(this.Status),
      })
      this.$router.push('/AllUsers')
    },
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
  display: center;
  justify-content: center;
}
.btn {
  color: rgb(113, 113, 238);
  background-color: aqua;
}

.item {
  padding: 18px 0;
  display: center;
  justify-content: center;
}

.box-card {
  width: 480px;
  height: 250px;
  display: flex;
  margin-left: 350px;
}
.search {
  width: 180px;
  margin-left: 470px;
  padding: 2px;
}
.text-item {
  margin-left: 140px;
}
</style>