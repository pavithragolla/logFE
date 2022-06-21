<template>
  <div>
    <!-- <the-header></the-header> -->
    <br />
    <br />
    <br />
    <div class="container"></div>
    <br />
    <br />
    <br />

    <div>
      <el-card class="box-card">
        <div class="text item">
          <p>Id: {{ id }}</p>
          <p>TypeId: {{ type_id }}</p>
          <!-- <p>Name: {{ name }}</p> -->
          <p>
            Name:
            <el-input v-model="Name" v-if="isupdating" type="text" />
            <span v-else>{{ name }}</span>
            <el-button v-if="!isupdating" @click="edit">edit</el-button>
            <el-button v-if="isupdating" @click="updateTag">submit</el-button>
          </p>
        </div>
      </el-card>
    </div>
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
      Name: '',
      isupdating: false,
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['tag', 'name', 'type_id']),
  },
  methods: {
    async created() {
      await this.$store.dispatch('getTagById')
    },
    edit() {
      this.isupdating = true
      this.Name = this.name
    },

    async updateTag() {
      // alert(id)
      // this.isVisible = false
      await this.$store.dispatch('updateTag', {
        id: this.id,
        name: this.name,
      })
      this.$router.push('/AllTags')
    },
  },
}
</script>

<style scoped>
.text {
  font-size: 14px;
}
.btn {
  color: rgb(113, 113, 238);
  background-color: aqua;
}

.item {
  padding: 18px 0;
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
</style>