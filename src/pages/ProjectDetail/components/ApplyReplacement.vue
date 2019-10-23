<!-- 组件说明 -->
<template>
  <div class="replacement-wrapper">
    <project-popup :show.sync="changePopup">
      <div class="reason-wrap">
        <div class="title">申请更换原因反馈</div>
        <van-field
          clickable
          autosize
          :value="content"
          type="textarea"
          placeholder="请输入反馈原因..."
          maxlength="120"
          input-class="textarea-style"
          @input="getValue"
        />
        <div class="length">
          <span>{{content.length}}/120</span>
        </div>
        <div class="btn-wrap">
          <van-button @click="replace" icon="records" color="#409eff">申请更换</van-button>
        </div>
      </div>
    </project-popup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ProjectPopup from '@/components/ProjectPopup'
export default {
  components: {
    ProjectPopup
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
    ...mapGetters(['replacePopup']),
    changePopup: {
      get () {
        return this.replacePopup
      },
      set () {
        this.changeReplacePopup()
      }
    }
  },
  methods: {
    ...mapActions('ProjectDetail', ['changeReplacePopup', 'changeConfirmPopup']),
    getValue (e) {
      this.content = e.detail
    },
    replace () {
      this.changeReplacePopup()
    }
  }
}
</script>

<style lang="scss" scoped>
//@import url()
  .reason-wrap {
    margin: 34px 10px 10px;
    .title {
      font-size: 16px;
      padding: 4px;
      margin-bottom: 8px;
      text-align: center;
      border-bottom: 1px solid $border-color--two;
    }
    .length {
      margin-top: 4px;
      text-align: right;
    }
    .btn-wrap {
      margin: 24px 0;
      text-align: center;
    }
  }

</style>
