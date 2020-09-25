// miniprogram/pages/prescription-detail.js
// Page({

//   /**
//    * Page initial data
//    */
//   data: {

//   },

//   /**
//    * Lifecycle function--Called when page load
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * Lifecycle function--Called when page is initially rendered
//    */
//   onReady: function () {

//   },

//   /**
//    * Lifecycle function--Called when page show
//    */
//   onShow: function () {

//   },

//   /**
//    * Lifecycle function--Called when page hide
//    */
//   onHide: function () {

//   },

//   /**
//    * Lifecycle function--Called when page unload
//    */
//   onUnload: function () {

//   },

//   /**
//    * Page event handler function--Called when user drop down
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * Called when page reach bottom
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * Called when user click on the top right corner to share
//    */
//   onShareAppMessage: function () {

//   }
// })
Component({
  externalClasses: ['i-class'],

  options: {
      multipleSlots: true
  },

  properties: {
      full: {
          type: Boolean,
          value: false
      },
      thumb: {
          type: String,
          value: ''
      },
      title: {
          type: String,
          value: ''
      },
      extra: {
          type: String,
          value: ''
      }
  }
});
