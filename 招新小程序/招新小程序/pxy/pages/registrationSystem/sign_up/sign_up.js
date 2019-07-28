// miniprogram/pages/sign_up/sign_up.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArray:[{
      "id": "1",
      "text": "JS",
    },
    {
      "id": "2",
      "text": "JAVA",
    },
    {
      "id": "3",
      "text": "Python",
    },
    {
      "id":"4",
      "text": "秘书处",
    },
    {
      "id":"5",
      "text": "前端"
    },
    {
      "id":"6",
      "text": "设计"
    }
    ],
    
  array:['软件学院','化工学院','计算机学院'],
 objectArray :[
  {
    id: 0,
    name: '软件学院'
  },
  {
    id: 1,
    name: '化工学院'
  },
  {
    id: 2,
    name: '计算机学院'
  }
  ],

  directionArr:['开发','设计','秘书处'],
  objectArray:[
    {
      id: 0,
      name: '开发'
    },{
      id:1,
      name:'设计'
    },{
      id:2,
      name: '秘书处'
    }
  ],
  
  data: '2016-09-01',
  src: [],
   warn: "",
   sex:"",
   name: "",
   number: "",
   qq: "",
   mail: "",
   floor: "",
   idcard: ""
},
//选择方向

  pickerChangeDirection: function (e) {
    console.log('该学生所选的方向为', this.data.directionArr[e.detail.value])
    this.setData({
      direction: e.detail.value
    })
  },
  
//选择学院

  
  bindPickerChange: function (e) {
    console.log('该学生所在的学院为', this.data.array[e.detail.value])
    this.setData({
       index: e.detail.value
    })
  },

  //修改生日

  bindDateChange: function (e) {
    console.log('该学生的生日为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

//选择图片

  chooseImg: function(){
     var _this = this;
     wx.chooseImage({
       count: 1,
       sizeType: ['original', 'compressed'],
       sourceType: ['album', 'camera'],
       success: function(res){
            _this.setData({
                 src: res.tempFilePaths
            })
       }
  })
 },          
 

  

 //跳转到提交申请书页面
  goToApply: function (param) {
    wx.navigateTo({
      url: '/pages/apply/apply',
    })
  },

formSubmit: function(e){
   console.log('携带数据为:',e.detail.value)
   var { number, qq, mail, floor, sex, name} = e.detail.value;
   if (!number || !mail){
        this.setData({
          warn: "手机号或邮箱为空！",
        })
        return;
   }
   this.setData({
     warn: "",
    sex,
    name,
    number,
    qq,
    mail,
    floor,
    idcard,
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