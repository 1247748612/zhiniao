import App from './App'
import Vue from 'vue'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import Vuex from 'vuex'

Vue.use(VHtmlPlugin)
Vue.use(Vuex)

const store = require('./store').default
Vue.prototype.$store = store

const app = new Vue(App)

app.$mount()

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/BindInfo/index',
      'pages/home/index',
      'pages/task/index',
      'pages/profile/profile',
      'pages/ProjectDetail/index',
      'pages/AddChildTask/index',
      'pages/comment/index',
      'pages/UserInfoAuth/index',
      'pages/DesinatedPerson/index',
      'pages/DeleteChild/index'
    ],
    tabBar: {
      color: '#333',
      selectedColor: '#409eff',
      backgroundColor: '#fff',
      list: [{
        pagePath: 'pages/home/index',
        text: '主页',
        iconPath: 'native/tabbar/home.png',
        selectedIconPath: 'native/tabbar/home-selected.png'
      }, {
        pagePath: 'pages/task/index',
        text: '发布',
        iconPath: 'native/tabbar/task.png',
        selectedIconPath: 'native/tabbar/task-selected.png'
      }, {
        pagePath: 'pages/profile/profile',
        text: '个人',
        iconPath: 'native/tabbar/account.png',
        selectedIconPath: 'native/tabbar/account-selected.png'
      }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '知鸟科技协作管理',
      navigationBarTextStyle: 'black'
    }
  } // wxb71c11ec91a75e4f
}

wx.getSetting({
  success (res) {
    if (!res.authSetting['scope.userInfo']) {
      wx.authorize({
        scope: 'scope.userInfo',
        success () {
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
            },
            fail: function () {
              // fail
            },
            complete: function () {
              // complete
            }
          })()
        }
      })
    }
  }
})
