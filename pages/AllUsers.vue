<template>
  <div>
    <TheHeader />
    <br />
    <br />
    <br />
    <h1>All Users</h1>
    <div class="search-bar">
      <el-input
        v-model="name"
        type="Text"
        placeholder="Type to search"
        @change="AllUsers"
      />
    </div>

    <el-table :data="user" style="width: 100%" @row-click="userRow">
      <el-table-column prop="id" label="Id" width="180"> </el-table-column>
      <el-table-column prop="name" label="Name" width="180"> </el-table-column>
      <el-table-column prop="email" label="Email"> </el-table-column>
      <!-- <el-table-column prop="is_superuser" label="Superuser"> </el-table-column> -->
      <el-table-column
        :formatter="cellValueRenderer"
        property="is_superuser"
        label="Superuser"
      >
      </el-table-column>
      <!-- <el-table-column prop="status" label="Status"> </el-table-column> -->
      <el-table-column
        :formatter="cellValueRenderer2"
        property="status"
        label="Status"
      >
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  name: 'AllUsers',

  data() {
    return {
      Search: '',
      name: '',
    }
  },

  computed: {
    ...mapState(['user', 'userid', 'tag']),
  },
  async mounted() {
    await this.$store.dispatch('AllUsers', this.Search)
  },

  methods: {
    async AllUsers() {
      console.log(this.userid)
      await this.$store.dispatch('AllUsers', {
        // from_date: this.from_date,
        // to_date: this.to_date,
        name: this.name,
      })
    },
    cellValueRenderer(row, column, cellValue, index) {
      let value = cellValue
      if (typeof row[column.property] === 'boolean') {
        value = String(cellValue)
      }
      return value
    },

    cellValueRenderer2(row, column, cellValue, index) {
      const value = cellValue
      if (value === 1) {
        return 'Active'
      } else return 'In-active'
    },

    async userRow(row, column, event) {
      await this.$store.dispatch('getUserById', row.id)
      this.$router.push('user/' + row.id)
      console.log(this.id)
    },
    // async rowClick(row, column, event) {
    //   await this.$store.dispatch('getUserById', row.id)
    //   // this.$router.push('/' + row.id)
    //   this.$router.push('/SingleUser' + row.id)

    //   // console.log(id)
    // },
  },
}
</script>