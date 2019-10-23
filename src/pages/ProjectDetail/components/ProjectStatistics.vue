<!-- 组件说明 -->
<template>
  <div class="statistics-wrapper">
    <van-collapse :value="activeName" @change="onChange" accordion>
      <van-collapse-item title="市场部" name="1">
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="正在进行中">
          <van-tag mark type="primary" slot="right-icon">进行中</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="正在进行中">
          <van-tag mark type="primary" slot="right-icon">进行中</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="正在进行中">
          <van-tag mark type="primary" slot="right-icon">进行中</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
      </van-collapse-item>
      <van-collapse-item title="编辑部" name="2">
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
      </van-collapse-item>
      <van-collapse-item title="人事部" name="3">
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
      </van-collapse-item>
      <van-collapse-item title="设计部" name="4">
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
        <van-cell title="大家好" value="我也不太清楚">
          <van-tag mark type="danger" slot="right-icon">超时</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="负责做什么东西">
          <van-tag mark type="success" slot="right-icon">完成</van-tag>
        </van-cell>
        <van-cell title="很高兴" value="画图">
          <van-tag mark type="warning" slot="right-icon">临近超时</van-tag>
        </van-cell>
      </van-collapse-item>
    </van-collapse>
    <van-divider contentPosition="center">暂无其他部门负责</van-divider>
  </div>
</template>

<script>
// import x from ''
export default {
  components: {

  },
  data () {
    return {
      activeName: '1'
    }
  },
  computed: {

  },
  methods: {
    onChange (event) {
      this.activeName = event.detail
    }
  }
}
</script>

<style lang='scss' scoped>
  .statistics-wrapper {
    width: 100%;
  }
</style>
