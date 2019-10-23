<!-- 组件说明 -->
<!-- 用于展示子项目中的子项目 -->
<template>
  <div @click.stop>
    <van-popup
      :show="show"
      :position="position"
      @close="close"
      @click-overlay="close"
      :custom-style="customStyle"
      :closeable="closeable"
      style
      z-index="999"
      :round="round"
    >
      <slot></slot>
    </van-popup>
  </div>
</template>

<script>
// import x from ''
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },
    round: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center'
    },
    closeable: {
      type: Boolean,
      default: true
    },
    width: {
      type: [String, Number],
      default: 80
    }
  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    customStyle () {
      return `width: ${this.width}%`
    }
  },
  methods: {
    close () {
      console.log('closecloseclose')
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()

</style>
