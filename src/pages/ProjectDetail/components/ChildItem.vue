<!-- 组件说明 -->
<template>
  <div class="child-wrapper">
    <collapse-panel>
      <template #panel>
        <div class="content">
          <div class="top">
            <div class="name">CAD画图</div>
            <div class="start-time">接手时间：2019-12-12 23:54</div>
          </div>
          <div class="deparment">负责部门：程序部</div>
          <process-bar size="12px" class="process"></process-bar>

        </div>
      </template>

      <child-task></child-task>
      <child-task></child-task>
      <child-task></child-task>
      <child-task></child-task>

    </collapse-panel>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import CollapsePanel from '@/components/CollapsePanel'
import ProcessBar from './ProcessBar'
import ChildTask from './ChildTask'

export default {
  components: {
    TodoList,
    ChildTask,
    ProcessBar,
    CollapsePanel
  },
  data () {
    return {
      popupShow: false,
      btnStyle: `cursor: pointer; display: flex; justify-content: center; align-items: center; width: 14px; height:14px; background-color: rgba(0, 0, 0, 0.4); color: #fff; border-radius:50%;`
    }
  },
  computed: {
  },
  methods: {
    addTask () {
      wx.navigateTo({
        url: '../AddChildTask/index?title=添加子任务',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .child-wrapper {
    margin: $item-margin -6px;
    .content {
      @include project-item;
      box-sizing: border-box;
      overflow: hidden;
      .top {
        display: flex;
        align-items: flex-end;
        padding-top: 10px;
        font-size: 16px;
        .start-time {
          padding-left: 20px;
          font-size: 12px;
        }
      }
      .deparment {
        padding-top: 8px;
        font-size: 14px;
      }

      .process {
        width: 200px;
        margin: 4px 0 8px;
      }

      .desc {
        padding-top: 10px;
        font-size: 12px;
      }
      .todo {
        padding: 10px 0;
        font-size: 12px;
      }

      .child-project {
        margin-top: 40px;
      }
    }
  }

</style>
