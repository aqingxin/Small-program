//index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
    data: {
      newList:'',
      show:false
    },

    onLoad: function () {
      var that = this;
      wx.request({
        url: 'http://music.163.com/api/playlist/detail?id=1978921795',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          that.setData({
            newList: res.data.result.tracks,
            show:true
          })
        }
      })
    },    
    detail:function(event){
      wx.setStorage({
        key: 'pic',
        data: event.currentTarget.dataset['pic'],
      })
    } 
    
})
