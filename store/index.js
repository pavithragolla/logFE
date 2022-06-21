

const state = () => ({
  token: null,
  email: null,
  id: null,
  user: [],
  type_id: '',
  list: [],
  tag:[],
  log:[],
  // log_id: [],
  tagid: [],
  tagtype:[],
  userid:'',
  logid: null,
  title:null,
  stack_trace:'',
  description: '',
  status: '',
  name: '',
  userId: '',
  tagId: ''




});

const getters = {}

const mutations = {
  setToken(state, data) {
    state.token = data.token;
    state.email = data.email;
    state.name = data.name;
    state.id = data.id;
    // console.log(state.token);
  },


  allLog(state, data) {
    state.list = data;
    console.log("************************")
    console.log(state.list);
    
  },

  allUsers(state, data) {
    console.log('dataaaaaaaaaaaaaaaaaa')
    state.user = data;
    console.log(state.user);
  },

  allTags(state, data) {
    console.log('dataaaaaaaaaaaaaaaaaa')
    state.tag = data;
    console.log(state.tag);

  },
  getTagType(state, data) {
    state.tagtype = data;
  },


  getSingleUser(state, data) {
    state.userId = data;
  },
  
  setLogId(state, data) {
    state.logId = data;
  },

  setUserId(state, data) {
    state.userId = data;
  },
  setTagId(state, data) {
    state.tagId = data;
  },
  
  setLog(state, data) {
    state.logid = data.id;
    console.log(state.logid);
    state.title = data.title;
    state.stack_trace = data.stack_trace;
    state.description = data.description
},

setUser(state, data) {
  state.userid = data.id;
  console.log(state.userid);
  state.name = data.name;
  state.email = data.email;
  state.is_superuser = data.is_superuser
  state.status = data.status
},
setTag(state, data) {
  state.tagid = data.id;
  console.log(state.userid);
  state.name = data.name;
},

updateLog(state, data) {
  state.log.description = data;
  state.tag = data;

},
  
};




const actions = {


  async createUser({ commit, state }, data) {
    await this.$axios.post('http://localhost:5014/api/user', {
      name: data.name,
      email: data.email,
      password: data.password,
      issuperuser: data.issuperuser
    }
    )
  },

  async createTag({ commit, state }, data) {
    console.log(data);

    await this.$axios.post('http://localhost:5014/api/tag',data)
    console.log('hi')
      console.log(data);
    

    // const response = 
    // console.log('hlooooooooooooooooooooooooooooo')
    // await this.$axios.post('http://localhost:5014/api/tag', {
    //   // tag:data
    //   name: data.name,
    //   type_id: data.type_id,
    // }
    // ).then(res => {
    //   console.log('hi')
    //   console.log(response);
    // })
    
  },

  // async getSingleUser({ commit, state }, data) {
  //   const res = await this.$axios.get('http://localhost:5014/api/user/' + state.userId)
  //   console.log(data)
  //   commit('getSingleUser', res.data)
  // },

  
  
  async login({ commit }, data){
    // console.log(data.email)
    // console.log(data.password)
    await this.$axios.post('http://localhost:5014/api/user/login', {
      email: data.email,
      password: data.password
    })
    .then((res) => {
      console.log(res.data.token)
      console.log(res.data.is_superuser)
      if(res.data.is_superuser === true) {

        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token);
      this.$router.push({ path: '/LogList' })

      }
      else{
        this.$axios.setHeader('Authorization', 'Bearer ' + res.data.token);
        this.$router.push({ path: '/UserLog' })
      }
      
      commit('setToken', res.data)
    })
  },


  async AllUsers({ commit, state }, data) {
    const res = await this.$axios.get('http://localhost:5014/api/user',{
      params: {
        name: data.name
      }
    })
    console.log(data)
    commit('allUsers', res.data)
  },


  async AllTags({ commit, state }, data) {
    const res = await this.$axios.get('http://localhost:5014/api/tag',{
      params: {
        name: data.name
      }
    })
    console.log(data)
    commit('allTags', res.data)
  },


  async getAllLog({ commit, state }, data) {
    const res =
      await this.$axios
        .get('http://localhost:5014/api/log', {
          params: {
            from_date: data.from_date,
            to_date:  data.to_date,
            title: data.title
          }
        })
    // .then((res) => {
      console.log("##############################")
    console.log(res.data)
    commit('allLog', res.data)



  },
    async getAllTagType ({commit, state}, data) {
          
          const res =
            await this.$axios
              .get('http://localhost:5014/api/tagtype')
        
            console.log("##############################")
          console.log(res.data)
          commit('getTagType',res.data)

    },
    async getLogById ({commit, state}, id) {
      // console.log('hi')
     const res = await this.$axios.get('http://localhost:5014/api/log/' + id)
       console.log(res.data);
      commit('setLog',res.data);
    },

    async getUserById ({commit, state}, id) {
      // console.log('hi')
     const res = await this.$axios.get('http://localhost:5014/api/user/' + id)
       console.log(res.data);
      commit('setUser',res.data);
    },
    async getTagById ({commit, state}, id) {
      // console.log('hi')
     const res = await this.$axios.get('http://localhost:5014/api/tag/' + id)
       console.log(res.data);
      commit('setTag',res.data);
    },

    async updateLog({ state }, data) {
        console.log(data.description);
        console.log({ "description": data.description, "tag":data.tag });
      const res = await this.$axios.put('http://localhost:5014/api/log/' +data.id,  { description: data.description, tags:data.tag });
      
      console.log(res.data);
     
  
    },
     

    // async deleteLog({ commit }, id) {
    //   console.log('hiiiiiiiiii')
    //   const res = await this.$axios.delete('http://localhost:5014/api/log' + id)
    //   console.log(res.data)
    // },

    async deleteLog({commit}, id) {
      const response = await this.$axios.delete('http://localhost:5014/api/log/' + id)
      console.log('deleteeeeee')
    },
    async updateTag({ state }, data) {
      console.log(data.name);
      // console.log({ "description": data.description, "tag":data.tag });
    const res = await this.$axios.put('http://localhost:5014/api/tag/' +data.id,  { name: data.name });
    
    console.log(res.data);
   

  },
    async updateUser({ state }, data) {
        console.log(data.status);
      const res = await this.$axios.put('http://localhost:5014/api/user/' +data.id,  { status: data.status });
      console.log(res.data);
     
  
    },
    










  // async deleteLog(data) {
  //   const res = await this.$axios.delete('http://localhost:5014/api/log' + data);
  //   console.log(res.data);
  // },

 

}
export default {
  state,
  getters,
  mutations,
  actions
}






