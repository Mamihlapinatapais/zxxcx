// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    avatar: "/images/avatar.png",
    more: "/images/more.png",
    sexLogo: "/images/girl.png",
    nickName: "昵称啊",
    wxNum: '123456789',
    myNewsIcon: "/images/my-news.png",
    aboutIcon: "/images/my-about.png"

  },

  goTopersonInfo() {
    wx.navigateTo({
      url: '/pages/mine/mine-myinfoo/mine-myinfoo'
    })
  },

  goTomineinfo() {
    wx.navigateTo({
      url: '/pages/mine/mine-mineinfo/mine-mineinfo'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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