<!-- 组件说明 -->
<template>
  <div class="collapse-wrapper">
    <div class="panel" @click.stop="expandTask">
      <slot name="panel"></slot>
      <div class="arrow-icon">
        <div class="rotate" :style="arrowStyle">
          <van-icon size="14px" color="#666" name="arrow" custom-style="" style="display: flex; align-items: center; justify-content:center"></van-icon>
        </div>
      </div>
    </div>
    <div class="task-list" :style="expandStyle" @transitionend="transitionEnd">
      <div id="content" class="task-content">
        <slot></slot>
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
        height: '0px'
      },
      arrowStyle: {
        transform: 'rotate(90deg)',
        transition: 'all .3s ease-in-out'
      },
      taskListHeight: 0
    }
  },
  computed: {

  },
  created () {
  },
  onShow () {
    const query = wx.createSelectorQuery()
    query.select('#content').boundingClientRect()
    query.exec((res) => {
      this.taskListHeight = res[0].height
      this.expandStyle.height = '0px'
    })
  },
  methods: {
    expandTask () {
      if (this.expandStyle.height === '0px') {
        this.expandStyle.height = `${this.taskListHeight}px`
        this.arrowStyle.transform = 'rotate(-90deg)'
      } else {
        this.expandStyle.height = '0px'
        this.arrowStyle.transform = 'rotate(90deg)'
      }
    },
    transitionEnd () {
      if (this.expandStyle.height === '0px') {
        // this.expandStyle.height = 'auto'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .collapse-wrapper {
    overflow: hidden;
    .panel {
      position: relative;
      margin-bottom: 6px;
      font-size: 0;
      overflow: hidden;
      cursor: pointer;
      .arrow-icon {
        position: absolute;
        right: 8px;
        bottom: 8px;

        .rotate {
          transition: rotate 3s linear;
        }
      }
    }

    .task-list {
      overflow: hidden;
      background-color: #fff;
      transition: height .3s ease-in-out;
      border-radius: 5px;
      margin-left: 14px;
      padding: 0 10px;
      .task-content {
        overflow: hidden;
      }
    }
  }
</style>
