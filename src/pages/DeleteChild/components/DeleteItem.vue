<!-- 组件说明 -->
<template>
  <div class="delete-item-wrapper">
    <div class="task-name">子任务</div>
    <div class="btn-wrap">
      <van-button size="mini" @click.stop color="#409eff">删除</van-button>
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

    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .delete-item-wrapper {
    display: flex;
    color: $font-color--primary;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $border-color--one;
    padding: 8px;
    .task-name {
      size: 12px;
    }
  }
</style>
