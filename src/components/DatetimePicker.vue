<!-- 组件说明 -->
<template>
  <div @click.stop>
     <van-popup
      :show="show"
      position="bottom"
      @close="closePicker"
    >
      <!-- custom-style="height: 20%" -->
      <van-datetime-picker
        @confirm="confirmPicker"
        @cancel="closePicker"
        :type="type"
        :value="value"
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
    value: {
      type: Number,
      defalut: new Date().getTime()
    },
    type: {
      type: String,
      default: 'datetime'
    }
  },
  watch: {
    cValue () {
      this.$emit('update:value', this.cValue)
    }
  },
  data () {
    return {
      cValue: this.value
    }
  },
  computed: {

  },
  methods: {
    closePicker () {
      this.$emit('update:show', false)
    },
    confirmPicker (value) {
      this.$emit('update:value', value)
      this.$emit('update:show', false)
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()

</style>
