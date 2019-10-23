<!-- 组件说明 -->
<template>
  <div>
    <feedback-comments></feedback-comments>
    <feedback-item v-for="i in 15" :key="i"></feedback-item>
    <van-divider contentPosition="center">没有反馈内容了~</van-divider>
  </div>
</template>

<script>
import FeedbackItem from './FeedbackItem'
import FeedbackComments from './FeedbackComments'

export default {
  components: {
    FeedbackItem,
    FeedbackComments
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

</style>
