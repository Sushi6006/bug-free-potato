// pages/authorization/authorization.js
Page({
  data:{
    userInfo:{},
    showAuth:true,
    presImgUrl:"https://www.foxitsoftware.com/blog/wp-content/uploads/2016/12/Is-CCD-the-patient-data-exchange-standard-to-rule-them-all-in-healthcare.png"
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