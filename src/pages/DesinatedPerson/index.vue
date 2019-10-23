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
    "van-picker": "../../../native/vant/picker/index",
  },
  "navigationBarTitleText": "指定项目人员"
}
</config>
<!-- 组件说明 -->
<template>
  <div class="desinated-wrapper">
    <div class="wrap">
      <van-cell title="选择子项目" @click="childProjectShow = true" label="这里只会展示你所在部门需要负责的项目" :value="childProjectValue" is-link />
      <task-desinated :title="`任务${key + 1}`" v-for="(value, key) in taskList" :key="key"></task-desinated>
      <div class="add">
        <van-button @click="taskList.push(taskObject)" icon="plus">添加其他任务</van-button>
      </div>
      <van-button size="large">提交</van-button>
    </div>
    <project-picker title="选择子项目" @get-value="getChildProjectValue" :show.sync="childProjectShow" :content-list="childProjectList"></project-picker>
  </div>
</template>

<script>

import ProjectPicker from '@/components/ProjectPicker'
import TaskDesinated from './components/TaskDesinated'

export default {
  components: {
    ProjectPicker,
    TaskDesinated
  },
  data () {
    return {
      childProjectShow: false,
      childProjectList: ['无', '子项目1', '子项目2', '子项目3', '子项目4'],
      childProjectValue: '',
      taskObject: {
        taskName: '',
        desinatedName: ''
      },
      taskList: [{ ...this.taskObject }]
    }
  },
  computed: {

  },
  methods: {
    getChildProjectValue (e) {
      console.log('e', e)
      this.childProjectValue = e
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .desinated-wrapper {
    margin-bottom: 20px;
    .add {
      text-align: right;
      margin: 10px;
    }
  }
</style>
