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
    "van-divider": "../../../native/vant/divider/index",
    "van-icon": "../../../native/vant/icon/index"
  },
  "navigationBarTitleText": "项目列表"
}
</config>

<template>
  <div class="project-wrapper">
    <h1 class="title">这里展示你需要负责的项目</h1>

    <div v-for="i in 20" :key="i">
      <project-item></project-item>
    </div>
    <van-divider contentPosition="center">我到底啦~</van-divider>
  </div>
</template>

<script>
import ProjectItem from './components/ProjectItem'

export default {
  components: {
    ProjectItem
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
  .project-wrapper {
    .title {
      font-size: 18px;
      padding-top: 10px;
      padding-left: 20px;
    }
  }
</style>
