// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logoUrl:'',
    username:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    
    wx.getUserInfo({
      success:function(res){
        // var logo = res.avatarUrl;
        // var name = res.nickName;
        that.setData({
          logoUrl: res.userInfo.avatarUrl,
          username: res.userInfo.nickName
        })
        // console.log(that.data.username)
        console.log(res)
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})