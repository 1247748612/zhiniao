<config lang="json">
{
  "usingComponents": {
    "van-button": "../../../native/vant/button/index"
  },
  "navigationBarTitleText": "微信授权"
}
</config>
<!-- 组件说明 -->
<template>
  <div class="auth-wrapper">
    <div class="logo-wrap">
      <img class="logo" src="../../static/imgs/logo.png">
    </div>
    <div class="content">
      <span class="desc">请完成微信授权以继续使用</span>
      <van-button lang="zh_CN" open-type="getUserInfo" @getuserinfo="getUserInfo" color="#409eff" size="large" type="primary">微信授权用户信息</van-button>
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
    getUserInfo (e) {
      console.log(e)
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .auth-wrapper {
    height: 100vh;
    margin: 0 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    .logo-wrap {
      margin-top: 150px;
      display: inline-block;
      width: 96px;
      height: 96px;
      .logo {
        width: 100%;
        height: 100%;
      }
    }
    .content {
      width: 100%;
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      .desc {
        font-size: 13px;
        color: #666;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }
</style>
