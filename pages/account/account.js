
// pages/bus/bus.js
Page({

data: {
    userInfo:{},
    showAuth:true,
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
    })
  }

})