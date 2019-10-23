<!-- 组件说明 -->
<template>
  <div class="feedback-wrapper">
    <van-field
      clickable
      autosize
      :value="content"
      type="textarea"
      placeholder="请评论反馈内容..."
      maxlength="120"
      input-class="textarea-style"
      @input="getValue"
      :border="false"
    />
    <div class="bottom-wrap">
      <span class="length">{{content.length}}/120</span>
      <van-button size="small" @click="sendComments" icon="records" color="#409eff">发送</van-button>
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
      content: '',
      commentStyle: 'height: 100px;'
    }
  },
  watch: {
  },
  computed: {

  },
  methods: {
    getValue (e) {
      this.content = e.detail
    },
    sendComments () {
      console.log('send')
    }
  }
}
</script>

<style lang="scss" scoped>
//@import url()
  .feedback-wrapper {
    display: inline-block;
    width: 100%;
    background-color: #fff;
    .bottom-wrap {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      margin: 0 10px 10px 0;
      text-align: right;
      .length {
        margin-right: 10px;
      }
    }
  }

</style>
<style lang="scss">
  .textarea-style {
    height: 100px !important;
    padding: 5px 0;
    border-bottom: 1px solid #e2e2e2;
    word-wrap: break-word;
    word-break: normal;
    font-size: 15px !important;
  }
</style>
