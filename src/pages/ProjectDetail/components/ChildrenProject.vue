<!-- 组件说明 -->
<template>
  <div class="children-wrapper">
    <div class="content">
      <div class="add-wrap" @click.stop="addTask">
        <div class="add-content">
          <van-icon size="13px" name="plus" custom-style="color: #333; line-height: 30px;"></van-icon>
          <span class="text">添加子项目或项目内子任务</span>
        </div>
      </div>
    </div>
    <child-item v-for="i in 5" :key="i"></child-item>
    <van-divider contentPosition="center">没有其他子项目了~</van-divider>
  </div>
</template>

<script>
import ChildItem from './ChildItem'

export default {
  components: {
    ChildItem
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    addTask () {
      wx.navigateTo({
        url: '../AddChildTask/index',
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
//@import url()
  .children-wrapper {
    display: inline-block;
    width: 100vw;
    height: 100%;
    overflow: hidden;
  }
  .content {
    display: inline-block;
    width: 100%;
    .add-wrap {
      height: 30px;
      @include project-item;
      margin: $item-margin 0;
      cursor: pointer;

      .add-content {
        display: flex;
        align-items: center;
        line-height: 30px;
        .text {
          font-size: 13px;
          padding-left: 40px;
          color: $font-color--primary;
        }
      }
    }
  }
</style>
