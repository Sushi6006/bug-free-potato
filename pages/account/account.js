
// pages/bus/bus.js
Page({

  data: {
      userInfo:{},
      showAuth:true,
      en:true
  },

  auth:function(e){
    this.setData({
      userInfo:e.detail.userInfo,
      showAuth:false
    });
    var app=getApp();
    app.globalData.showAuth=false;
  },

  onLoad:function(){
    var that=this;
    var appInstance = getApp();
    that.setData({
      en:(appInstance.globalData.language=="en"),
      showAuth:(appInstance.globalData.showAuth)
    })
    wx.getSetting({
      success(res){
        if(res.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            lang:that.data.en?"en":"zh_CN",
            success: function(res) {
              that.setData({
                userInfo:res.userInfo,
                showAuth:false
              });
            }
          })
        }
      }
    });
  },
  changeLanguage:function(){
    var that=this;
    var app = getApp();
    var target = ((app.globalData.language=="en")?"zh":"en");
    app.globalData.language= target
    that.setData({
      en:(app.globalData.language=="en")
    });
  }
})