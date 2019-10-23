<!-- 组件说明 -->
<template>
  <div class="todo-wrapper">
    <van-icon size="1em" name="todo-list-o"></van-icon>
    <span class="count">0/10</span>
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
  .todo-wrapper {
    display: flex;
    align-items: center;
    font-size: 13px;
    .count {
      padding-left: 4px;
      line-height: 1em;
      vertical-align: top;
    }
  }
</style>
