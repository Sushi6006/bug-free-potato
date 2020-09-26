// pages/authorization/authorization.js
Page({
  data:{
    userInfo:{},
    showAuth:true,
    en:true,
  },

  auth:function(e){
    this.setData({
      userInfo:e.detail.userInfo,
      showAuth:false
    });
  },

  onLoad:function(){
    var that=this;
    wx.getSetting({
      success(res){
        if(res.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            success: function(res) {
              that.setData({
                userInfo:res.userInfo,
                showAuth:false
              })
            }
          })
        }
      }
    });
    var appInstance = getApp();
    that.setData({
      en:(appInstance.globalData.language=="en")
    })
  },

  changeLanguage:function(){
    var app = getApp();
    var target = ((app.globalData.language=="en")?"zh":"en");
    app.globalData.language= target
    this.setData({
      en:(app.globalData.language=="en")
    })
  }
})