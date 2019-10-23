<config lang="json">
{
  navigationBarTitleText: 'vuex示例',
  usingComponents: {

  }
}
</config>

<template>
  <div id="app">
    Clicked: {{ $store.state.counter.count }} times, count is {{ evenOrOdd }}.
    <button @click="increment()|test()">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <button @click="navigatorTab">切换tab</button>
    globalData:{{ globalData }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  data () {
    return {}
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ]),
    test: function () {
      this.globalData['a']++
    },
    navigatorTab () {
      wx.switchTab({
        url: '/pages/my/my',
        success: function (res) {
          console.log('success')
        },
        fail: function () {
          // fail
        },
        complete: function () {
          // complete
        }
      })
    }
  },
  created () {
    var appInstance = getApp()
    this.globalData = appInstance.globalData
  }
}
</script>
