<!-- 组件说明 -->
<template>
  <div>
    <van-steps
      :steps="steps"
      direction="vertical"
      active-icon="success"
      active-color="#409eff"
    />
  </div>
</template>

<script>
// import x from ''
export default {
  components: {

  },
  data () {
    return {
      steps: [
        {
          text: '市场部接手',
          desc: '2016-07-10 09:30'
        },
        {
          text: '设计部接手',
          desc: '2016-07-10 09:30'
        },
        {
          text: '编辑部接手',
          desc: '2016-07-10 09:30'
        },
        {
          text: '项目完成',
          desc: '2016-07-10 09:30'
        }
      ]
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

</style>
