<template>
  <div>
    <TheHeader />
    <br />
    <br />
    <br />
    <div class="search-bar">
      <el-input
        v-model="name"
        type="Text"
        placeholder="Type to search"
        @change="AllTags"
      />
    </div>

    <el-table :data="tag" style="width: 100%" @row-click="rowClick">
      <el-table-column prop="id" label="Id" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="type_id" label="TypeId"> </el-table-column>
      <!-- <el-table-column prop="is_superuser" label="superuser"> </el-table-column> -->
    </el-table>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'AllTags',

  data() {
    return {
      Search: '',
      name: '',
    }
  },

  computed: {
    ...mapState(['tag']),
  },
  async mounted() {
    await this.$store.dispatch('AllTags', this.Search)
  },
  methods: {
    async AllTags() {
      console.log(this.userid)
      await this.$store.dispatch('AllTags', {
        // from_date: this.from_date,
        // to_date: this.to_date,
        name: this.name,
      })
    },
    async rowClick(row, column, event) {
      await this.$store.dispatch('getTagById', row.id)
      this.$router.push('Tag/' + row.id)

      // console.log(id)
    },
  },
}
</script>