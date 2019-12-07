// components/downMenu/downMenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    downMenuData: {
      type: Array,
      value: [
        '项目1',
        '项目2',
        '项目3',
        '项目4',
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataActive: ""
  },

  /**
   * 组件的方法列表
   */
  attached () {
    this.setData({
      dataActive: this.properties.downMenuData[0]
    })
  },
  methods: {
    hindDownMenuItem () { // 注意修改元素的值,必须调用 setData, 不然无法修改
      this.setData({
        isDownMenuItem: !this.data.isDownMenuItem
      })
    },
    selectDownMenuItem (event) {
      this.setData({
        dataActive: this.properties.downMenuData[event.currentTarget.dataset.index],
        isDownMenuItem: !this.data.isDownMenuItem
      })
      this.triggerEvent('downMenuVal', { downMenuVal: this.data.dataActive });
    }
  }
})
