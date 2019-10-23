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
    "van-icon": "../../../native/vant/icon/index",
    "van-action-sheet": "../../../native/vant/action-sheet/index",
    "van-divider": "../../../native/vant/divider/index",
    "van-collapse": "../../../native/vant/collapse/index",
    "van-tag": "../../../native/vant/tag/index",
    "van-collapse-item": "../../../native/vant/collapse-item/index",
    "van-swipe-cell": "../../../native/vant/swipe-cell/index",
    "van-toast": "../../../native/vant/toast/index",
    "van-steps": "../../../native/vant/steps/index",
  },
  "navigationBarTitleText": "新建项目"
}
</config>
<template>
  <div class="bind-info-wrapper">
    <van-popup
      :show="show"
      custom-style="width: 80%"
      style
      z-index="999"
      :round="round"
    >
      <div class="content">
        <div class="title">绑定个人信息</div>
        <div class="tips">之后无法更改请认真填写</div>
        <div class="field-item">
          <van-field
            @input="(e) => infoData.name = e.detail"
            maxlength="5"
            focus
            placeholder="请输入姓名"
            clearable
            show-toolbar
          ></van-field>
        </div>
        <div class="field-item">
          <van-field
            @input="(e) => infoData.phonenumber = e.detail"
            type="number"
            maxlength="11"
            placeholder="请输入手机号"
            clearable
            show-toolbar
          ></van-field>
        </div>
        <div class="btn-wrap">
          <div class="subscribe">
            <van-button @click="subscribe" size="small" round color="#409eff">订阅消息授权</van-button>
          </div>
          <van-button @click="submit" color="#409eff" size="large" type="primary">提交</van-button>
        </div>
      </div>
      <van-toast id="van-toast" />
    </van-popup>
  </div>
</template>

<script>
import ProjectPopup from '@/components/ProjectPopup'
import Toast from '@/native/vant/toast/toast'

export default {
  components: {
    ProjectPopup
  },
  data () {
    return {
      show: true,
      infoData: {
        name: '',
        phonenumber: ''
      }
    }
  },
  computed: {

  },
  methods: {
    subscribe () {
      wx.requestSubscribeMessage({
        tmplIds: ['mq-BXBP1IfqMxhMHrf2TctaGgoaXm6QYwhVMmF-e59A', '7AcFL3z3GVYV2-qj8toBCRy192HJ1iINORrk1vyy73c'],
        success (res) {
          console.log(res)
        },
        fail (err) {
          console.log(err)
        }
      })
      Toast('您已授权')
      console.log(this.infoData)
    },
    submit () {
      console.log('submit')
      wx.switchTab({
        url: '/pages/home/index',
        success: function (res) {
          // success
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .content {
    margin: 32px;
    margin-top: 60px;
    color: $font-color--primary;
    .title {
      font-size: 18px;
      font-weight: bold;
    }
    .tips {
      padding: 4px 0;
      font-size: 13px;
      color: $font-color--secondary;
    }
    .field-item {
      margin: 10px 0;
    }
    .btn-wrap {
      .subscribe {
        margin: 10px 0;
      }
      text-align: right;
    }
  }

</style>
