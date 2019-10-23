<!-- 组件说明 -->
<config lang="json">
{
  "usingComponents": {
    "van-button": "../../../native/vant/button/index",
    "van-field": "../../../native/vant/field/index",
    "van-datetime-picker": "../../../native/vant/datetime-picker/index",
    "van-popup": "../../../native/vant/popup/index",
    "van-cell": "../../../native/vant/cell/index",
    "van-cell-group": "../../../native/vant/cell-group/index",
    "van-tabs": "../../../native/vant/tabs/index",
    "van-tab": "../../../native/vant/tab/index",
    "van-divider": "../../../native/vant/divider/index",
    "van-icon": "../../../native/vant/icon/index"
  },
  "navigationBarTitleText": "个人信息"
}
</config>

<template>
  <div class="profile-wrapper">
    <van-cell title="微信授权" label="我们需要你授权我们获得你微信的个人信息绑定到我们的小程序才可使用这些功能"
    is-link
    link-type="navigateTo"
    url="/pages/UserInfoAuth/index"/>
    <van-cell-group title="个人信息" :border="false">
      <van-cell title="姓名" value="邓清" />
      <van-cell title="手机号" value="15917033300" />
      <van-cell title="微信号" value="1247748612" :border="false" />
    </van-cell-group>

    <van-cell-group title="部门信息" :border="false">
      <van-cell title="所属部门" value="程序部" />
      <van-cell title="部门职位" value="负责人" />
      <van-cell title="工作职责" value="负责小程序的设计" :border="false" />
    </van-cell-group>

  </div>
</template>

<script>
import SplitLine from '@/components/SplitLine'

export default {
  components: {
    SplitLine
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
