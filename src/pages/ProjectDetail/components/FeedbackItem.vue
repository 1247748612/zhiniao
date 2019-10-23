<!-- 组件说明 -->
<template>
  <div class="feedback-wrapper">
    <div class="content">
      <div class="top">
        <span class="name">邓清</span>
        <div class="create-time">2019-10-12 16:59</div>
      </div>
      <div class="comment" :style="expandStyle">内容大家好啊，这是一个反馈内容不知道有多少东西，这里可以指定哪个项目有问题，也可以进去这个项目里面，指定哪个任务出了问题。你懂了吗。</div>
      <div class="expand-btn" v-if="expandStyle.height !== 'auto'" @click="expandContent">
        <van-icon name="arrow-down" />
    </div>
      <div class="btn-wrap" :class="expandStyle.height === 'auto' ? 'btn--mtop' : ''">
        <van-icon name="delete" size="18" color="#666" class="cursor-pointer"></van-icon>
      </div>
    </div>
  </div>
</template>

<script>
// import x from ''
export default {
  components: {

  },
  data () {
    return {
      expandStyle: {
        height: '44px'
      }
    }
  },
  computed: {

  },
  methods: {
    expandContent () {
      this.expandStyle.height = 'auto'
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .feedback-wrapper {
    margin: 12px;
    color: $font-color--primary;
    .content {
      @include project-item;
      padding: 10px 20px;
      box-sizing: border-box;
      background-color: $background-color--white;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .name {
          font-size: 14px;
        }
        .create-time {
          font-size: 11px;
          color: $font-color--conventional;
        }
      }
      .comment {
        height: 44px;
        margin-top: 14px;
        font-size: 16px;
        text-indent: 2em;
        overflow: hidden;
      }
      .expand-btn {
        margin-top: 10px;
        text-align: center;
      }
      .btn-wrap {
        text-align: right;
        .cursor-pointer {
          cursor: pointer;
        }
      }
      .btn--mtop {
        margin-top: 8px;
      }
    }
  }
</style>
