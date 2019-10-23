<!-- 组件说明 -->
<template>
  <div class="describe-wrapper">
    <div class="mask"></div>
    <div class="bg"></div>
    <div class="content">
      <div class="describe">
        <div class="descibe-info">
          <span class="name">万科项目</span>
          <van-tag mark type="primary" :color="exportColor.bgColor" size="large">进行中</van-tag>
        </div>
        <div class="descibe-desc">这是一个地产项目</div>
        <div class="descibe-status">
          <process-bar class="process"></process-bar>
        </div>
        <div class="descibe-time">
          <span class="end-time">开始时间：2019/11/08</span>
        </div>
      </div>
    </div>
    <div class="btn-wrap">
      <van-button icon="ellipsis" custom-style="font-size: 20px; background-color: transparent; border: none;" color="#fff" round @click="openAcitonSheet" size="mini" plain type="primary"></van-button>
    </div>
    <more-menu :show.sync="menuShow"></more-menu>
  </div>
</template>

<script>
import exportColor from '@/style/export.scss'
import ProcessBar from './ProcessBar'
import MoreMenu from './MoreMenu'

export default {
  components: {
    ProcessBar,
    MoreMenu
  },
  data () {
    return {
      menuShow: false
    }
  },
  computed: {
    exportColor () {
      return exportColor
    }
  },
  methods: {
    openAcitonSheet () {
      this.menuShow = true
    },
    toFeedbackComment () {
      wx.navigateTo({
        url: '../comment/index',
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
@import '../../../style/background.scss';
  .describe-wrapper {
    position: relative;
    width: 100%;
    height: 160px;
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-color: $background-color--black;
    }
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: $bg-image;
      filter: blur(2px);
      opacity: 0.7;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .content {
      .describe {
        margin-left: 20px;
        flex-direction: column;
        display: flex;
        width: 66%;
        color: $font-color--white;
        overflow: hidden;
        .descibe-info {
          display: flex;
          padding-top: 10px;
          font-size: 20px;
          .name {
            padding-right: 8px;
          }
        }
        .descibe-desc {
          padding-top: 16px;
          font-size: 13px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .descibe-status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          .process {
            display: flex;
            flex: 1;
          }
          .state {
            margin-left: 20px;
            font-size: 11px;
          }
        }
        .descibe-time {
          display: flex;
          font-size: 13px;
          padding-top: 16px;
        }
      }
    }

    .btn-wrap {
      @include position-button(5px, 5px);
      color: $font-color--white;
    }
  }
</style>
