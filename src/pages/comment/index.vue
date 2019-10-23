<config lang="json">
{
  "usingComponents": {
    "van-button": "../../../native/vant/button/index",
    "van-field": "../../../native/vant/field/index",
    "van-datetime-picker": "../../../native/vant/datetime-picker/index",
    "van-popup": "../../../native/vant/popup/index",
    "van-cell": "../../../native/vant/cell/index",
    "van-cell-group": "../../../native/vant/cell-group/index",
    "van-tabs": "../../../native/vant/tabs/index",
    "van-tab": "../../../native/vant/tab/index",
    "van-icon": "../../../native/vant/icon/index",
    "van-action-sheet": "../../../native/vant/action-sheet/index",
    "van-divider": "../../../native/vant/divider/index",
    "van-collapse": "../../../native/vant/collapse/index",
    "van-tag": "../../../native/vant/tag/index",
    "van-collapse-item": "../../../native/vant/collapse-item/index",
    "van-swipe-cell": "../../../native/vant/swipe-cell/index",
    "van-toast": "../../../native/vant/toast/index",
    "van-steps": "../../../native/vant/steps/index"
  },
  "navigationBarTitleText": "反馈"
}
</config>

<!-- 组件说明 -->
<template>
  <div>
    <feedback-commnets></feedback-commnets>
  </div>
</template>

<script>
import FeedbackCommnets from './FeedbackComments'

export default {
  components: {
    FeedbackCommnets
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
