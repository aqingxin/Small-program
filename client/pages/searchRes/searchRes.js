// pages/searchRes/searchRes.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')


Page({

  data:{
    resList:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getStorage({
      key: 'resList',
      success: function(res) {
        that.setData({
          resList:res.data
        })
      },
    })
  },
  detail:function (event){
    wx.setStorage({
      key: 'pic',
      data: event.currentTarget.dataset['pic'],
    })
  }

})
