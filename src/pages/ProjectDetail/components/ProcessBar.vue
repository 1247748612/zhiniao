<!-- 组件说明 -->
<template>
  <div class="process-wrapper">
    <div class="bar">
      <div class="completed" :style="completeStyle"></div>
    </div>
    <div :style="{'font-size': size }" class="percentage">{{percentage}}%</div>
  </div>
</template>

<script>
// import x from ''
export default {
  components: {
  },
  props: {
    size: {
      type: String,
      default: '13px'
    }
  },
  data () {
    return {
      percentage: 53
    }
  },
  computed: {
    completeStyle () {
      return {
        width: `${this.percentage}%`
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.process-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .bar {
    display: flex;
    flex: 1;
    height: 6px;
    border-radius: 10px;
    background-color: #e2e2e2;
  }
  .completed {
    display: inline-block;
    border-radius: 10px;
    background-color: #409eff;
  }
  .percentage {
    padding-left: 8px;
  }
}

</style>
