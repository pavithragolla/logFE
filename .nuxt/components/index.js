export { default as DateFilter } from '../..\\components\\DateFilter.vue'
export { default as HomeHeader } from '../..\\components\\HomeHeader.vue'
export { default as SingleLog } from '../..\\components\\SingleLog.vue'
export { default as SingleTag } from '../..\\components\\SingleTag.vue'
export { default as SingleUser } from '../..\\components\\SingleUser.vue'
export { default as TheHeader } from '../..\\components\\TheHeader.vue'
export { default as TheLoader } from '../..\\components\\TheLoader.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
