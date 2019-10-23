
<script>

export default {
  onLaunch (options) {
    this.$options.promisify(wx.getStorage)({ key: 'session' }).then(value => {
      this.$options.promisify(wx.switchTab)({ url: '/pages/home/index' })
    }).catch(reason => {
      console.log(reason, 'reason')
      this.$options.login()
      // fail
    })
    wx.request({
      url: 'http://m.maoyan.com/ajax/comingList?ci=20&token=&limit=10',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res, 'res')
      },
      fail: function (err) {
        console.log(err, 'err')
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onShow (options) {
    // Do something when show.
    console.log('App onShow')
  },
  onHide () {
    // Do something when hide.
    console.log('App onHide')
  },
  onError (msg) {
    console.log('App onError')
    console.log(msg)
  },
  promisify (original) {
    return function (opt) {
      return new Promise((resolve, reject) => {
        opt = Object.assign({
          success: resolve,
          fail: reject
        }, opt)
        original(opt)
      })
    }
  },
  login () {
    this.promisify(wx.login)().then((res) => {
      console.log(res.code)
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss">
  page {
    color: $font-color--primary;
    background-color: $background-color--main;
  }
</style>
