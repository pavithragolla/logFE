<template>
  <div class="container">
    <HomeHeader />

    <br />

    <div>
      <div slot="header" class="clear-fix">
        <!-- <div class="datefilter">
          <el-input
            class="search"
            type="text"
            v-model="search"
            placeholder="Type to search"
          />
        </div> -->
        <date-filter
          class="date"
          @filterByDate="filterByDate"
          :filterDate="filterDate"
        ></date-filter>
        <div class="more-items">
          <!-- <el-dropdown>
            <el-button class="el-dropdown-link">
              More<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <nuxt-link to="/CreateUser"
                ><el-dropdown-item>Create user</el-dropdown-item></nuxt-link
              >
              <nuxt-link to="/UpdateUser"
                ><el-dropdown-item>Update User</el-dropdown-item></nuxt-link
              >
              <nuxt-link to="/AllUsers"
                ><el-dropdown-item>All Users</el-dropdown-item></nuxt-link
              >
              <nuxt-link to="/SingleUser">
                <el-dropdown-item>Single User</el-dropdown-item></nuxt-link
              >
              <nuxt-link to="/CreateTag"
                ><el-dropdown-item>Create Tag</el-dropdown-item></nuxt-link
              >
              <el-dropdown-item>Update Tag</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->
          <div class="search-bar">
            <el-input
              v-model="title"
              size="mini"
              placeholder="Type to search"
              @change="getAllLog"
            />
            <!-- <el-button  class="search-button">search</el-button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="table-div">
      <el-table
        :data="list"
        style="width: 100%"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
        @row-click="rowClick"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="id" label="Id"></el-table-column>
        <el-table-column prop="created_at" label="Date"></el-table-column>
        <el-table-column prop="title" label="Title"></el-table-column>
        <el-table-column
          prop="description"
          label="Description"
        ></el-table-column>

        <el-table-column align="right" min-width="90">
          <template slot="header">
            <!-- <el-input
              v-model="search"
              size="mini"
              placeholder="Type to search"
            /> -->

            <div style="margin-top: 20px" min-width="90">
              <!-- <el-button
                size="mini"
                icon="el-icon-check"
                color="skyblue"
                @click="toggleSelection()"
              ></el-button> -->
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                @click="toggleSelection()"
              ></el-button>
            </div>
          </template>
          <template>
            <el-button size="mini" icon="el-icon-edit"></el-button>

            <el-button size="mini" icon="el-icon-view"></el-button>
            <!-- <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deleteLog()"
            ></el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>

    <br />

    <!-- <div class="paging">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DateFilter from '~/components/DateFilter.vue'

export default {
  components: { DateFilter },

  data() {
    return {
      search: '',

      loading: false,
      title: '',

      filterDate: {
        from_date: null,
        to_date: null,
      },
    }
  },
  computed: {
    ...mapState(['list', 'tag']),
  },
  async mounted() {
    await this.$store.dispatch('getAllLog', {
      ...this.filterDate,
    })
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    async deleteLog(id) {
      console.log(id)
      await this.$store.dispatch('deleteLog', id)
    },
    async filterByDate() {
      const success = await this.getAllLog()
      if (success)
        this.$message({
          message: 'date filter applied',
          duration: 2000,
          showClose: true,
        })
    },
    async getAllLog() {
      console.log(this.title)
      await this.$store.dispatch('getAllLog', {
        // from_date: this.from_date,
        // to_date: this.to_date,
        // title: this.title,
        ...this.filterDate,
      })
    },
    async rowClick(row, column, event) {
      await this.$store.dispatch('getLogById', row.id)
      this.$router.push('log/' + row.id)

      // console.log(id)
    },
  },
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  border: 1px solid rgb(72, 142, 227);
  margin-right: 3px;
  margin-bottom: 5px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  display: inline;
}
.el-pagination {
  text-align: center;
}
.container {
}
.block {
  margin-left: 720px;
}
.date-button {
  background-color: skyblue;
  color: white;
}
.datefilter {
  margin-left: 400px;
  justify-content: flex-end;
}
.search-bar {
  width: 200px;
  margin-left: 900px;
}
/* .search {
  align-items: center;
  transform: translateX(-500px);
  /* transform: translateY(-100px); */
/* margin-top: 50px; */
/* } */
.date {
  display: flex;
  margin-left: 310px;
}
.search-button {
  margin-left: 210px;
}
</style>