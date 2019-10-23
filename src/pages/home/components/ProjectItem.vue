<!-- 组件说明 -->
<template>
  <div class="container">
    <div class="project-item" @click="toProjectDetail">
      <div class="name">攀登计划</div>
      <div class="principal">对接负责人：邓请</div>
      <div class="desc">
        <todo-list class="todo"></todo-list>
        <i class="separator">|</i>
        <div class="remaining-days">开始时间：2019-12-20</div>
      </div>
      <div class="more-o">
        <van-icon name="arrow" size="1.5em"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'

export default {
  components: {
    TodoList
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    toProjectDetail () {
      wx.navigateTo({
        url: '../ProjectDetail/index',
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
  .container {
    color: $font-color--primary;
    overflow: hidden;
    margin: $item-margin;
    .project-item {
      @include project-item;
      position: relative;
      cursor: pointer;
      .name {
        font-size: 16px;
        font-weight: bold;
        padding-top: 10px;
      }
      .principal {
        padding-top: 10px;
        font-size: 13px;
      }
      .desc {
        font-size: 13px;
        padding: 10px 0;
        display: flex;
        .separator {
          padding: 0 10px;
        }
      }
      .more-o {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translate(0, -50%)
      }
    }
  }
</style>
