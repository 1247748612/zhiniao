<!-- 组件说明 -->
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
    "van-steps": "../../../native/vant/steps/index",
  },
  "navigationBarTitleText": "新建项目"
}
</config>
<template>
  <div class="project-detail-wrapper">
    <project-describe></project-describe>
    <div class="nav-wrap">
      <van-tabs color="#409eff" swipeable animated sticky>
        <van-tab title="子项目">
          <children-project></children-project>
        </van-tab>
        <van-tab title="进度">
          <project-steps></project-steps>
        </van-tab>
        <van-tab title="统计">
          <project-statistics></project-statistics>
        </van-tab>
        <van-tab title="反馈">
          <project-feedback></project-feedback>
        </van-tab>
        <van-tab title="操作记录">
        </van-tab>
      </van-tabs>
    </div>
    <ConfirmBtn></ConfirmBtn>
  </div>
</template>

<script>
import ConfirmBtn from './components/ConfirmBtn'
import ProjectDescribe from './components/ProjectDescribe'
import ChildrenProject from './components/ChildrenProject'
import ProjectStatistics from './components/ProjectStatistics'
import ProjectSteps from './components/ProjectSteps'
import ProjectFeedback from './components/ProjectFeedback'

export default {
  components: {
    ProjectDescribe,
    ChildrenProject,
    ProjectStatistics,
    ProjectSteps,
    ProjectFeedback,
    ConfirmBtn
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
  .project-detail-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    .nav-wrap {
      flex-grow: 1;
    }

  }
</style>
