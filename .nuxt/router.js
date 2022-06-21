import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cd8a2abc = () => interopDefault(import('..\\pages\\AllTags.vue' /* webpackChunkName: "pages/AllTags" */))
const _0866524f = () => interopDefault(import('..\\pages\\AllUsers.vue' /* webpackChunkName: "pages/AllUsers" */))
const _934dcf74 = () => interopDefault(import('..\\pages\\CreateTag.vue' /* webpackChunkName: "pages/CreateTag" */))
const _350f204f = () => interopDefault(import('..\\pages\\CreateUser.vue' /* webpackChunkName: "pages/CreateUser" */))
const _7345734a = () => interopDefault(import('..\\pages\\LogList.vue' /* webpackChunkName: "pages/LogList" */))
const _31ef9b1c = () => interopDefault(import('..\\pages\\UpdateUser.vue' /* webpackChunkName: "pages/UpdateUser" */))
const _848bfd7e = () => interopDefault(import('..\\pages\\UserLog.vue' /* webpackChunkName: "pages/UserLog" */))
const _90e8c984 = () => interopDefault(import('..\\pages\\log\\_id.vue' /* webpackChunkName: "pages/log/_id" */))
const _4b3b5870 = () => interopDefault(import('..\\pages\\Tag\\_id.vue' /* webpackChunkName: "pages/Tag/_id" */))
const _528e9437 = () => interopDefault(import('..\\pages\\user\\_id.vue' /* webpackChunkName: "pages/user/_id" */))
const _1d158b8c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AllTags",
    component: _cd8a2abc,
    name: "AllTags"
  }, {
    path: "/AllUsers",
    component: _0866524f,
    name: "AllUsers"
  }, {
    path: "/CreateTag",
    component: _934dcf74,
    name: "CreateTag"
  }, {
    path: "/CreateUser",
    component: _350f204f,
    name: "CreateUser"
  }, {
    path: "/LogList",
    component: _7345734a,
    name: "LogList"
  }, {
    path: "/UpdateUser",
    component: _31ef9b1c,
    name: "UpdateUser"
  }, {
    path: "/UserLog",
    component: _848bfd7e,
    name: "UserLog"
  }, {
    path: "/log/:id?",
    component: _90e8c984,
    name: "log-id"
  }, {
    path: "/Tag/:id?",
    component: _4b3b5870,
    name: "Tag-id"
  }, {
    path: "/user/:id?",
    component: _528e9437,
    name: "user-id"
  }, {
    path: "/",
    component: _1d158b8c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
