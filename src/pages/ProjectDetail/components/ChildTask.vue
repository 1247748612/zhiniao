<!-- 组件说明 -->
<template>
  <div class="task-wrapper">
    <div class="task-wrap">
      <div class="desc">
        <div class="task-name">CAD画图</div>
        <div class="time">确认时间：<span>{{ state === 0 ? '2019/10/16 20:56' : '待确认'}}</span></div>
      </div>
      <div class="other">
        <div class="master">
          负责人:
          <span :style="principalStyle">{{ principal === 0 ? '邓清' : principal === 1 ? '未指定' : '待确定' }}</span>
        </div>
      </div>
    </div>
    <div class="more-btn">
      <van-button size="mini" @click="changeConfirmPopup" color="#409eff" type="primary">待确定</van-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      principal: 1, // 0 人员已选定 1 未指定 红色，2 待确定 蓝色
      state: 0 // 0 为 时间， 1 为
    }
  },
  computed: {
    principalStyle () {
      if (this.principal === 1) {
        return {
          color: '#fff',
          'background-color': '#409eff'
        }
      } else {
        return {
          color: '#fff',
          'background-color': '#F56C6C'
        }
      }
    }
  },
  methods: {
    ...mapActions('ProjectDetail', ['changeConfirmPopup'])
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .task-wrapper {
    overflow: hidden;
    position: relative;
    .task-wrap {
      display: flex;
      flex-direction: column;
      padding: 8px 0;
      border-bottom: 1px solid $border-color--one;
      .desc {
        display: flex;
        align-items: flex-end;
        font-size: 14px;
        .time {
          font-size: 11px;
          padding-left: 20px;
        }
      }

      .other {
        display: flex;
        font-size: 12px;
        padding: 8px 0 0;
      }
    }
    .more-btn {
      @include position-button(50%, 0px);
      transform: translate(0, -50%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .split {
        display: inline-block;
        padding: 0 5px;
      }
    }
  }
</style>
