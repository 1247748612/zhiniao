<!-- 组件说明 -->
<config lang="json">
{
  "usingComponents": {
    "van-button": "../../../native/vant/button/index",
    "van-field": "../../../native/vant/field/index",
    "van-datetime-picker": "../../../native/vant/datetime-picker/index",
    "van-popup": "../../../native/vant/popup/index",
    "van-cell": "../../../native/vant/cell/index",
    "van-cell-group": "../../../native/vant/cell-group/index"
  },
  "navigationBarTitleText": "新建项目",
}
</config>

<template>
  <div>
    <add-task />
  </div>
</template>

<script>

import AddTask from '@/components/AddTask.vue'

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
  created () {
    console.log('这是任务页')
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
//@import url()

</style>
