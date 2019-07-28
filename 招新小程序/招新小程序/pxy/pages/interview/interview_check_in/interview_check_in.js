// pages/interview/interview_check_in/interview_check_in.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aData : "文案提示新生做好面试准备",
    bData : "具体面试时间安排会由于人数限制做出调整",
    cData : "面试时间安排",
    time : "8.00-10.00",
    date : "10.01号",
    week : "星期二",
    location : "行远楼B123",

    status : 1

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
  scan : function(){
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)
        if(res.result) {
          
        }

        wx.showToast({
          title: '签到成功',
          icon: 'success',
          duration: 2000
        })

        wx.wx.redirectTo({
          url: ''
        })
      }
    })
  }
})