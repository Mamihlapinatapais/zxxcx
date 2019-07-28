// pages/rush/rush_index/rush_index.js

var total_micro_second = 2 * 24 * 60 * 60 * 1000;

/* 毫秒级倒计时 */
function count_down(that) {
  // 渲染倒计时时钟
  that.setData({
    clock: date_format(total_micro_second)
  });

  if (total_micro_second <= 0) {
    that.setData({
      clock: "已经截止"
    });
    // timeout则跳出递归
    return;
  }
  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that);
  }, 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {

  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600 );
  // 天数
  var day = Math.floor(hr / 24);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
  // 毫秒位，保留2位
  // var micro_sec = fill_zero_prefix(Math.floor((micro_second % 1000) / 10));

  return day + "天" +  hr + "小时" + min + "分" + sec + "秒" + "后可抢";


  // + micro_sec
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}




Page({

  /**
   * 页面的初始数据
   */
  data: {
    aData : "云顶书院19届招生宣讲会",
    bData : "07.01-07.03 共三场 100人/场",
    
    List : [
    ['10.01'],
    ["17.30-18.30","12.30-13.30"]
     ],
    Index: [0,0],


    nametype : "姓名",
    name : "小黑",
    IDtype : "学号",
    ID : "2019001111",




    windowHeight: 654,
    maxtime: "",
    isHiddenLoading: true,
    isHiddenToast: true,
    dataList: {},
    countDownDay: 0,
    countDownHour: 0,
    countDownMinute: 0,
    countDownSecond: 0,



    status : 1,

    whether_to_disable : false


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData( {
      windowHeight: wx.getStorageSync( 'windowHeight' )
    });


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var totalSecond = 1568520000 - Date.parse(new Date())/1000;
 
    var interval = setInterval(function () {
      // 秒数
      var second = totalSecond;
 
      // 天数位
      var day = Math.floor(second / 3600 / 24);
      var dayStr = day.toString();
      if (dayStr.length == 1) dayStr = '0' + dayStr;
 
      // 小时位
      var hr = Math.floor((second - day * 3600 * 24) / 3600);
      var hrStr = hr.toString();
      if (hrStr.length == 1) hrStr = '0' + hrStr;
 
      // 分钟位
      var min = Math.floor((second - day * 3600 *24 - hr * 3600) / 60);
      var minStr = min.toString();
      if (minStr.length == 1) minStr = '0' + minStr;
 
      // 秒位
      var sec = second - day * 3600 * 24 - hr * 3600 - min*60;
      var secStr = sec.toString();
      if (secStr.length == 1) secStr = '0' + secStr;
 
      this.setData({
        countDownDay: dayStr,
        countDownHour: hrStr,
        countDownMinute: minStr,
        countDownSecond: secStr,
      });
      totalSecond--;
      if (totalSecond < 0) {
        clearInterval(interval);
        wx.showToast({
          title: '抢票开始',
        });
        this.setData({
          countDownDay: '00',
          countDownHour: '00',
          countDownMinute: '00',
          countDownSecond: '00',
        });
      }
    }.bind(this), 1000);

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



  // 路由
  details : function(){
    wx.navigateTo({
      url: '../rush_details/rush_details'
    })
  },
  view_tickets : function(){
    wx.navigateTo({
      url: '../rush_ticket/rush_ticket'
    })
  },

  // 加载抢票  抢票中
  show_status :  function(){
    wx.showLoading({
        title: '抢票中',
      })
      setTimeout(function(){
        wx.hideLoading()
      },2000),
    // wx.showToast({
    //   title: '抢票成功',
    //   mask: true,
    //   icon: 'success',
    //   })
    wx.showToast({
      title: '票被抢完了',
      mask: true,
      image:'../../../images/fail.png',
      icon: 'success'
      })
  },


}) 