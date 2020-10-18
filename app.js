//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res)
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          data:{
            appid: 'wx3eeaf9586baaa9af',
            secret: 'de0ea92422526731c08f26699cfba4c2',
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          success: res =>{
            console.log(res)
            this.globalData.openId = res.data.openid
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
      
    })
    
  },
  globalData: {
    userInfo: null,
    user: null,
    token:null,
    shareList:null,
    openId: '',
    myShareList:null
  }
})