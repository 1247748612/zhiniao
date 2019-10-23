<!-- 组件说明 -->
<template>
  <div>
    <van-popup
      :show="show"
      position="bottom"
      @close="closePicker"
    >
      <!-- custom-style="height: 20%" -->
      <van-picker
        show-toolbar
        :title="title"
        @cancel="closePicker"
        @confirm="pickerChange"
        :columns="contentList"
        @change="pickerChange"
      />
    </van-popup>
  </div>
</template>

<script>
// import x from ''
export default {
  components: {

  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    contentList: {
      type: ['Array', 'Object'],
      default: () => ([])
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  created () {
    console.log(this.contentList)
  },
  methods: {
    closePicker () {
      this.$emit('update:show', false)
    },
    pickerChange (event) {
      const { picker, value, index } = event.detail
      console.log(picker, value, index)

      this.$emit('get-value', value)

      if (event.type === 'confirm') {
        this.$emit('update:show', false)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()

</style>
