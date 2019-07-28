// pages/interview/interview_result_success/interview_result_success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name : "小黑",
    group_number : "1234567890"
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

  },
  result : function(){
    wx.navigateTo({
      url: '../result/result'
    })
  },

  copy: function (e) {
    var that = this;
    wx.setClipboardData({
     //准备复制的数据
      data: that.data.group_number,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
      }
    });
  }
})
