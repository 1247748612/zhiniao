<!-- 组件说明 -->
<template>
  <div class="menu-wrapper">
    <project-popup position="bottom" :show.sync="showState" :closeable="false" :width="100">
      <div class="all-btn" @click.stop>
        <van-button @click="navigatorDesignated" size="large">指定任务人员</van-button>
        <van-button @click="deleteChild" size="large">删除子项目或子任务</van-button>
        <van-button @click="navigatorEditProject" size="large">编辑本项目</van-button>
        <van-button size="large">删除本项目</van-button>
        <div class="divider"></div>
        <van-button @click="cancel" custom-style="color: #909399;" size="large">取消</van-button>
      </div>
    </project-popup>
  </div>
</template>

<script>
import ProjectPopup from '@/components/ProjectPopup'
export default {
  components: {
    ProjectPopup
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    showState: {
      get () {
        return this.show
      },
      set (e) {
        this.cancel()
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('update:show', false)
    },
    navigatorDesignated () {
      wx.navigateTo({
        url: '../DesinatedPerson/index',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: () => {
          this.cancel()
        }
      })
    },
    navigatorEditProject () {
      wx.navigateTo({
        url: '../AddChildTask/index',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: () => {
          this.cancel()
        }
      })
    },
    deleteChild () {
      wx.navigateTo({
        url: '../DeleteChild/index',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: () => {
          this.cancel()
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .divider {
    height: 8px;
    background-color: $background-color--main;
  }
</style>
