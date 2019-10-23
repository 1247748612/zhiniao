<!-- 组件说明 -->
<template>
  <div>
    <van-action-sheet
      :actions="actions"
      :show="show"
      cancel-text="取消"
      @click-overlay="clickOverlay"
      @cancel="closeActionSheet"
      @select="openActionSheet"
    />
  </div>
</template>

<script>
// import x from ''
export default {
  components: {

  },
  props: {
    show: {
      type: 'Boolean',
      required: true,
      default: 'false'
    }
  },
  data () {
    return {
      actions: [{
        name: '指定任务人员'
      }, {
        name: '修改项目'
      }, {
        name: '删除项目'
      }]
    }
  },
  computed: {

  },
  methods: {
    clickOverlay () {
      console.log('e')
    },
    openActionSheet (e) {
      console.log('open', e)
    },
    closeActionSheet () {
      console.log('close')
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()

</style>
