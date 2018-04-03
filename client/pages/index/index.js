//index.js
// var qcloud = require('../../vendor/wafer2-client-sdk/index')
// var config = require('../../config')
// var util = require('../../utils/util.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        imgSrc:'images/bg.jpg',
        imgMode:'aspectFit',
        newList:'',
        Value:'',
        show:false,
        // sRes:true,
        resList:''
    },

    onLoad:function(){
      var that=this;
      wx.request({
        url: 'http://music.163.com/api/playlist/detail?id=3778678',
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // console.log(res);
          that.setData({
            newList: res.data.result.tracks,
            show: true,
          })
        }
      })
    },

    searchValue:function(e){
      this.setData({
        Value: e.detail.value.replace(/\'/g, ""),
      })
      
      
    },
    detail: function (event){
      wx.setStorage({
        key: 'pic',
        data: event.currentTarget.dataset['pic'],
      })
    },

    search:function(e){
      var that=this;
      that.setData({
        
        // sRes:false
      })
      // that.data.show=false;
      wx.request({
        url: `http://music.163.com/api/search/get/?s=${that.data.Value}&limit=20&type=1&offset=0`,
        headers: {
          'Content-Type': 'application/json'
        },
        method:'POST',
        // data:{
        //   s: that.data.Value,
        //   limit:20,
        //   type:1,
        //   offset:0
        // },
        success: function (res) {
          that.setData({
            resList: res.data.result.songs
          })
            console.log(res)
          wx.setStorage({
            key:'resList',
            data: res.data.result.songs
          })
          wx.navigateTo({
            url: "../../pages/searchRes/searchRes",
          })
        }
      })
    }

})
