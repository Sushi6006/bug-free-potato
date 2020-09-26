Page({
  data: {
    statusType: [
      {
        status: 9999,
        label: 'All'
      },
      {
        status: 0,
        label: 'Unpaid'
      },
      {
        status: 1,
        label: 'Confirmed'
      },
      {
        status: 2,
        label: 'On its way'
      },
      {
        status: 3,
        label: 'Delivered'
      },
    ],
    status: 9999,
    badges: [0, 0, 0, 0, 0]
  },
  statusTap: function(e) {
    const status = e.currentTarget.dataset.status;
    this.setData({
      status
    });
    this.onShow();
  },
  onLoad: function(options) {
    if (options && options.nav_status) {
      if (options.type == 99) {
        this.setData({
          hasRefund: true
        });
      } else {
        this.setData({
          status: options.nav_status
        });
      }      
    }
  },
  getOrderStatistics() {
    WXAPI.orderStatistics(wx.getStorageSync('token')).then(res => {
      if (res.code == 0) {
        const badges = this.data.badges;
        badges[1] = 1
        badges[2] = 2
        badges[3] = 3
        badges[4] = 4
        this.setData({
          badges
        })
      }
    })
  },
  
  doneShow() {
    // 获取订单列表
    var that = this;
    var postData = {
      token: wx.getStorageSync('token')
    };
    if (this.data.hasRefund) {
      postData.hasRefund = true
    }
    if (!postData.hasRefund) {
      postData.status = that.data.status;
    }
    if (postData.status == 9999) {
      postData.status = ''
    }
    this.getOrderStatistics();
    WXAPI.orderList(postData).then(function(res) {
      if (res.code == 0) {
        that.setData({
          orderList: orderList,
          logisticsMap:logisticsMap,
          goodsMap: goodsMap
        });
      } else {
        that.setData({
          orderList: null,
          logisticsMap: {},
          goodsMap: {}
        });
      }
    })
  },

  
  })