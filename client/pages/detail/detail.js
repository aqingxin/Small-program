Page({
  data:{
    songId:'',
    name:'',
    pic:'',
    singer:'',
    comment:'',
    newComment:'',
    iconUrl:'images/pause.png',
    play:true,
    src:'',
    show:true
  },
  onReady:function(e){
    this.audioCtx = wx.createAudioContext('myAudio');
  },
  onLoad:function(option){
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    var that=this;
    wx.getStorage({
      key: 'pic',
      success: function(res) {
        // console.log(res)
        that.setData({
          pic:res.data
        })
      },

    }),
    that.setData({ 
      songId:option.id,
      name:option.name,
      // pic:option.pic,
      singer:option.singer,
      src: `http://music.163.com/song/media/outer/url?id=${option.id}.mp3`
    }),
    backgroundAudioManager.title=this.data.name;
    backgroundAudioManager.epname=this.data.name;
    backgroundAudioManager.singer=this.data.singer;
    backgroundAudioManager.coverImgUrl=this.data.pic;
    backgroundAudioManager.src=this.data.src;
    wx.request({
      url: 'http://music.163.com/api/v1/resource/comments/R_SO_4_' + that.data.songId,
      data:{
        offset:'0'
      },
      success:function(res){
        that.setData({
          comment:res.data.hotComments,
          newComment: res.data.comments,
          show:true
        })
      }
    }),
    wx.request({
      url: 'http://music.163.com/outchain/player?type=2&id='+ that.data.songId+'&auto=1',
      success: function (res) {
        // console.log(res)
      }
    })
  },
  switchs:function(){
    var that=this;
    that.data.play = !that.data.play;
    if (that.data.play==false){
      that.setData({
        iconUrl:'images/play.png'
      })
      wx.pauseBackgroundAudio();
    }
    if (that.data.play == true){
      that.setData({
        iconUrl: 'images/pause.png'
      })
      wx.playBackgroundAudio();
    }
  }
})
