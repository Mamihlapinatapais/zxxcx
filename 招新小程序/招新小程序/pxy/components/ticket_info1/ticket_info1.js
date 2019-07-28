// components/ticket_info/ticket_info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    textone : String,
    List : Array,
    Index : Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindcollegerChange(e){
      this.setData({
        Index : e.detail.value
      })
    }
  }
})
