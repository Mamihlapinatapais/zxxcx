// components/select/select.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {
      multiArray : Array,
      multiIndex : Array

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
      bindMultiPickerChange(e){
        // console.log(e.detail.value)
        this.setData({
          multiIndex  : e.detail.value
        })
      }
    }
})