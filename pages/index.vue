<template>
  <div class="container">
    <h1>Login</h1>
    <form
      v-loading="loading"
      action=""
      method="post"
      class="form-login"
      @submit.prevent="login"
    >
      <div>
        <div class="input">
          <input
            v-model="formData.email"
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <div class="input">
          <input
            v-model="formData.password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
      </div>
      <div class="login-button">
        <a href="#" class="button" @click="authenticate">login</a>
        <!-- <button class="button"><b>Login</b></button> -->
      </div>
      <!-- <div class="forget-account">
        <a href="#">Forget Password?</a>
      </div> -->
      <div class="hr"></div>
      <div class="backdrop" v-show="backdrop">
        <div class="modal">
          <h1 class="modal_title">Allow notifications</h1>
          <div class="modal_actions">
            <a href="#" class="modal_action">Allow</a>
            <button class="modal_action modal_action--negative" type="button">
              Block
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="create-account">
        <b>Create New Account</b>
      </div> -->
    </form>
  </div>
</template>
<script>
import { getAuth, signInAnonymously } from 'firebase/auth'
import { getMessaging, onMessage, getToken } from 'firebase/messaging'
import { messaging } from '@/plugins/firebase'
export default {
  name: 'LoginPage',

  data() {
    return {
      email: '',
      password: '',
      formData: {
        email: this.email,
        password: this.password,
      },
      loading: false,
      // backdrop: false,
    }
  },
  mounted() {
    const messaging = getMessaging()
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload)
    })
  },
  methods: {
    // async login() {
    //   await signInAnonymously(getAuth())
    //   this.activate()
    // },
    // async activate() {
    //   const token = await getToken(messaging, {
    //     vapidKey:
    //       'BAMO6Ck60Vu7hKZGXxSo-ZU7lzcEsEnTUalNVB6YeHR3Fhb9FdkZrtdQ3NnwuXdb1SCnM0mk1ypjkDLAouBZ59w',
    //   })
      async authenticate() {
        await signInAnonymously(getAuth())
        this.activate()
      },
      async activate() {
        const token = await getToken(messaging, {
          vapidKey:
            'BAMO6Ck60Vu7hKZGXxSo-ZU7lzcEsEnTUalNVB6YeHR3Fhb9FdkZrtdQ3NnwuXdb1SCnM0mk1ypjkDLAouBZ59w',
        })
      this.loading = true
      // console.log(this.formData.email)
      // console.log(this.formData.password)
      await this.$store.dispatch('login', this.formData)

      this.loading = false
    },
  },
  // methods: {
  //   async login() {
  //     this.loading = true
  //     console.log(this.formData.email)
  //     console.log(this.formData.password)
  //     await this.$store.dispatch('login', this.formData)
  //     this.loading = false
  //   },
  // },
  //     async login() {
  //       await this.$store.dispatch('login', {
  //         email: this.email,
  //         password: this.password,
  //       })
  //       if (this.$store.state.ErrorMsg) {
  //         this.$router.push('/')
  //       } else {
  //         // backdrop: true
  //         // await this.$store.dispatch('getAllLogs')
  //         this.$router.push('/LogList')
  //       }
  //     },
  //   },
}
</script>

<style scoped>
body {
  background: #f0f2f5;
}
.container {
  margin: 100px auto;
  text-align: center;
  width: 396px;
  height: 315px;
  background: #fff;
  border-radius: 8px;
  float: none;
  color: #1c1e21;
  padding-bottom: 24px;
  padding-top: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}
.form-login {
  margin: 0;
  padding: 0;
  display: block;
}

div {
  display: block;
}

input {
  background: #fff;
  color: #1c1e21;
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #dddfe2;
  color: #1d2129;
  margin-top: 16px;
}
.button {
  background: #1877f2;
  border: none;
  border-radius: 6px;
  font-size: 22px;
  line-height: 48px;
  padding: 0 16px;
  width: 364px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  color: #fff;
  margin-top: 16px;
}
.forget-account {
  margin-top: 16px;
}

.forget-account a {
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #1877f2;
}

.hr {
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
}

/* .create-account {
  border: none;
  border-radius: 6px;
  font-size: 17px;
  line-height: 48px;
  padding: 0 16px;
  display: inline-block;
  background: #42b72a;
  color: #fff;
} */
</style>
