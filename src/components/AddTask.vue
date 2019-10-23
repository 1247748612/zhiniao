<!-- 组件说明 -->
<template>
  <div>
    <template v-if="type !== ''">
      <van-cell title="主项目" value="万科项目" :border="false"></van-cell>
      <project-picker title="选择部门" :content-list="deparmentList" @get-value="getDeparment" :show.sync="deparmentPickerShow"></project-picker>

      <van-cell clickable title="指定子项目" label="如果指定了子项目则为创建子项目下的任务" is-link :value="formData.childProject" @click="opeChildProjectPicker" :border="false"></van-cell>
      <project-picker title="选择子项目" :content-list="childProjectList" @get-value="getChildProject" :show.sync="childProjectPickerShow"></project-picker>
    </template>

    <van-field
      :value="formData.name"
      :placeholder="addMode === 0 ? '请输入项目名' : '请输入任务名'"
      :border="false"
      clearable
      required
      show-toolbar
    ></van-field>

    <split-line></split-line>

    <van-cell clickable title="开始时间" is-link :value="startTime" :border="false" @click="openPicker('start')"></van-cell>
    <!-- <van-cell clickable title="截止时间" is-link :value="endTime" @click="openPicker('end')" :border="false"></van-cell> -->

    <split-line></split-line>

    <van-cell title="发起人" value="邓清" :border="false"></van-cell>

    <template v-if="type !== ''">
      <split-line></split-line>
      <van-cell v-if="addMode === 0" clickable title="指定部门" is-link @click="openDeparmentPicker" :value="formData.deparment" :border="false"></van-cell>
      <van-cell v-else clickable title="指定负责人" is-link @click="openDeparmentPicker" :value="formData.deparment" :border="false"></van-cell>
    </template>

    <split-line></split-line>

    <van-field
      :value="formData.describe"
      label="描述"
      type="textarea"
      placeholder="请输入简单描述"
      autosize
      :border="false"
    />
    <!-- 日期选择器底部弹窗 -->
    <datetime-picker type="date" :show.sync="pickerShow" :value.sync="currentPickerTime"></datetime-picker>

    <!-- 部门选择器底部弹窗 -->

    <van-button color="#409eff" size="large" type="primary" @click="submit">提交</van-button>
  </div>
</template>

<script>
import SplitLine from '@/components/SplitLine'
import DatetimePicker from '@/components/DatetimePicker'
import ProjectPicker from '@/components/ProjectPicker'
import { formatTime } from '@/utils/utils'

export default {
  components: {
    DatetimePicker,
    ProjectPicker,
    SplitLine
  },
  props: {
    type: {
      type: 'String',
      default: ''
    }
  },
  data () {
    return {
      deparmentList: ['编辑部', '市场部', '人事部', '设计部', '程序部'],
      childProjectList: ['无', '子项目1', '子项目2', '子项目3', '子项目4'],
      staffList: {
        '编辑部': ['李康', '赵四', '王五', '她六', '七八'],
        '市场部': ['李康', '赵四', '王五', '她六', '七八'],
        '人事部': ['李康', '赵四', '王五', '她六', '七八'],
        '程序部': ['李康', '赵四', '王五', '她六', '七八'],
        '设计部': ['李康', '赵四', '王五', '她六', '七八']
      },
      formData: {
        name: '',
        startTime: new Date().getTime(),
        endTime: new Date().getTime(),
        deparment: '',
        childProject: '',
        describe: ''
      },
      pickerShow: false,
      childProjectPickerShow: false,
      deparmentPickerShow: false,
      currentPicker: '',
      addMode: 0 // 0 为创建子项目, 1 为创建项目中的子任务
    }
  },
  computed: {
    currentPickerTime: {
      get () {
        return this.currentPicker === 'start' ? this.formData.startTime : this.formData.endTime
      },
      set (value) {
        if (this.currentPicker === 'start') {
          this.formData.startTime = value.detail
        } else {
          this.formData.endTime = value.detail
        }
      }
    },
    startTime () {
      return formatTime(this.formData.startTime, '', 4)
    },
    endTime () {
      return formatTime(this.formData.endTime, '', 4)
    }
  },
  methods: {
    closePicker () {
      this.pickerShow = false
    },
    confirmPicker (value) {
      this.currentPickerTime = value
      this.pickerShow = false
    },
    openPicker (type) {
      this.currentPicker = type
      this.pickerShow = true
    },
    openDeparmentPicker () {
      this.deparmentPickerShow = true
    },
    opeChildProjectPicker () {
      this.childProjectPickerShow = true
    },
    getDeparment (e) {
      this.formData.deparment = e
    },
    getChildProject (e) {
      console.log(e)
      if (e === '无') {
        this.addMode = 0
      } else {
        this.addMode = 1
      }
      this.formData.childProject = e
    },
    submit () {
      console.log('wwww')
      wx.navigateTo({
        url: '../ProjectDetail/index',
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

<style lang="scss" scoped>
//@import url()
  .add-project-name {
    width: 100%;
  }
</style>
