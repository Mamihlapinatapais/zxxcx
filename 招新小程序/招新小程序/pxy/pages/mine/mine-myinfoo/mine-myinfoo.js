// pages/myPage/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    more: '/images/more.png',
    avatar: '/images/avatar.png',
    detail: {
      user_vxName: 'lala',
      user_sex: '男',
      user_name: '威威',
      user_birthday: '2000-04-03',
      user_phoneNumber: '12345678945',
      user_qqNumber: '7894561234',
      user_email: '7894561234@qq.com',
      user_college: '啊圣诞袜阿达',
      user_Proclass: 'XX专业1909',
      user_dorm: '87号楼404',
      user_studentId: '2019006464'
    },
    array: ['男', '女'],
    index1: 0,
    index2: 0,
    index3: 0,
    acArray: ['艺术学院', '软件学院', '地工'],
    user_Proclass: ['软件专业1929', '物流管理专业1919', '会计学专业1958']
  },
 
  // 性别picker
  bindPickerChange: function(e) {
    var that = this;
    console.log(e)
    this.setData({
      index1: e.detail.value,
      "detail.user_sex": that.data.array[e.detail.value]
    })
  },
  // 学院picker
  bindAcPickerChange: function(e) {
    var that = this;
    this.setData({
      index2: e.detail.value,
      "detail.user_college": that.data.acArray[e.detail.value]
    })
  },
  // 专业班级picker
  bindclassPickerChange: function(e) {
    var that = this;
    this.setData({
      index3: e.detail.value,
      "detail.user_Proclass": that.data.user_Proclass[e.detail.value]
    })
  },
  // 日期picker
  bindDateChange(e) {
    var that = this;
    console.log(e)
    this.setData({
      "detail.user_birthday": e.detail.value
    })
  },
  // 提交表单
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})