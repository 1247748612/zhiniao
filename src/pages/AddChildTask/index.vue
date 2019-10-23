<!-- 组件说明 -->
<config lang="json">
{
  "usingComponents": {
    "van-button": "../../../native/vant/button/index",
    "van-field": "../../../native/vant/field/index",
    "van-datetime-picker": "../../../native/vant/datetime-picker/index",
    "van-popup": "../../../native/vant/popup/index",
    "van-cell": "../../../native/vant/cell/index",
    "van-picker": "../../../native/vant/picker/index",
    "van-cell-group": "../../../native/vant/cell-group/index"
  },
  "navigationBarTitleText": "子项目创建",
}
</config>

<template>
  <div class="add-wrapper">
    <add-task type="deparment"></add-task>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask'

export default {
  components: {
    AddTask
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
//@import url()
</style>
