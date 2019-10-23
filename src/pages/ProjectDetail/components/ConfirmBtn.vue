<!-- 组件说明 -->
<template>
  <div class="replacement-wrapper">
    <project-popup :show.sync="changePopup" :round="true">
      <div class="content">
        <div class="title">请做出选择</div>
        <div class="tips">注：点击同意之后无法更换</div>
        <div class="btn-wrap">
          <van-button @click="agree" color="#409eff" size="small" type="primary">同意</van-button>
          <van-button @click="replace" size="small" color="#409eff" type="primary">申请更换</van-button>
        </div>
      </div>
    </project-popup>
    <apply-replacement></apply-replacement>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ApplyReplacement from './ApplyReplacement'
import ProjectPopup from '@/components/ProjectPopup'
export default {
  components: {
    ProjectPopup,
    ApplyReplacement
  },
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      content: '',
      sync: false,
      commentStyle: 'height: 100px;'
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters(['confirmPopup']),
    changePopup: {
      get () {
        return this.confirmPopup
      },
      set () {
        this.changeConfirmPopup()
      }
    }
  },
  methods: {
    ...mapActions('ProjectDetail', ['changeConfirmPopup', 'changeReplacePopup']),
    getValue (e) {
      this.content = e.detail
    },
    agree () {
      this.changeConfirmPopup()
    },
    replace () {
      this.changeReplacePopup()
      this.changeConfirmPopup()
    }
  }
}
</script>

<style lang="scss" scoped>
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
      padding: 4px;
      font-size: 13px;
      color: $font-color--secondary;
    }
    .btn-wrap {
      display: flex;
      justify-content: space-between;
      margin: 18px 0;
    }
  }
</style>
