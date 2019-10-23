<!-- 组件说明 -->
<template>
  <div class="task-desinated-wrapper">
    <van-cell-group :title="title">
      <van-cell title="选择任务" @click="selectTask" label="这里只会展示没有指定人员或指定人员未同意的任务" :value="valueObject.task" is-link />
      <van-cell title="选择负责人" @click="selectMaster" label="因为子项目选择了部门则这里会根据部门展示部门下的所有员工" :value="valueObject.master" is-link />
      <project-picker @get-value="getValue" :title="pickerTitle" :content-list="contentObject[selectMode]" :show.sync="pickerShow"></project-picker>
    </van-cell-group>
  </div>
</template>

<script>
import ProjectPicker from '@/components/ProjectPicker'

export default {
  components: {
    ProjectPicker
  },
  props: {
    title: {
      type: 'String',
      default: ''
    }
  },
  data () {
    return {
      selectMode: 'task', // task 选择任务模式的picker master 选择负责人的模式
      pickerShow: false,
      contentObject: {
        task: [
          '任务1',
          '任务2',
          '任务3',
          '任务4'
        ],
        master: [
          '邓清1',
          '邓清2',
          '邓清3',
          '邓清4'
        ]
      },
      valueObject: {
        task: '',
        master: ''
      }
    }
  },
  computed: {
    pickerTitle () {
      return this.selectMode === 'task' ? '选择任务' : '选择负责人'
    }
  },
  methods: {
    selectTask () {
      this.pickerShow = true
      this.selectMode = 'task'
    },
    selectMaster () {
      this.pickerShow = true
      this.selectMode = 'master'
    },
    getValue (e) {
      this.valueObject[this.selectMode] = e
      this.$emit('get-value', this.valueObject)
    }
  }
}
</script>

<style lang='scss' scoped>
//@import url()
  .task-desinated-wrapper {
    // margin: 10px 0;
  }
</style>
