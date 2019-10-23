<!-- 组件说明 -->
<template>
  <div class="delete-wrapper">
    <collapse-panel>
      <template #panel>
        <div class="panel-wrap">
          <div class="name">子项目1</div>
          <div class="delete-btn">
            <van-button size="mini" @click.stop color="#409eff">删除</van-button>
          </div>
        </div>
      </template>
      <delete-item v-for="i in 5" :key="i"></delete-item>
    </collapse-panel>
  </div>
</template>

<script>
import CollapsePanel from '@/components/CollapsePanel'
import DeleteItem from './DeleteItem'

export default {
  components: {
    CollapsePanel,
    DeleteItem
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
  .delete-wrapper {
    margin: 10px 14px;
    font-size: 14px;
    .panel-wrap {
      @include project-item;
      display: flex;
      justify-content: space-between;
      position: relative;
      .name {
        padding: 10px 0;
        font-size: 16px;
      }
      .delete-btn {
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translate(0, -50%);
      }
    }
  }
</style>
