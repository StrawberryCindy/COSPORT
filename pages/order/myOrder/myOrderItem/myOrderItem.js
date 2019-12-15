// pages/order/myOrder/myOrderItem/myOrderItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myOrderItemData: {
      type: Object,
      value: {
        date: "2019年12月3日",
        position: "五山校区北区篮球场五山校区北区篮球场五山校区北区篮球场五山校区北区篮球场五山校区北区篮球场",
        studentName: "未命名",
        status: '1'
      }
    },
    identity: {
      type:String,
      value: 'coach'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hintText: '',
    isShowButton: false,
    isShowAccept: false,
    status: '0',
    buttonText: '评价'
  },

  attached () {
    this.data.status = this.properties.myOrderItemData.status;
    console.log(this.data.status)
    this.hintText ()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    hintText () {
      var text='';
      if (this.data.status === '0') {
        if (this.properties.identity === 'coach') {
          text = '待收徒';
          this.setData({
            isShowAccept: true,
            isShowButton: false
          })
        } else {
          text="待审核";
        }
      } else if (this.data.status === '1') {
        text = '未上课';
        this.setData({
          isShowAccept: false,
          isShowButton: false
        })
      } else if (this.data.status === '2') {
        text = '在上课';
        this.setData({
          isShowAccept: false,
          isShowButton: false
        })
      } else if (this.data.status === '3') {
        text = '待评价';
        if(this.properties.identity === 'coach') {
          this.setData({
            isShowAccept: false,
            isShowButton: false
          })
        } else {
          this.setData({
            isShowAccept: false,
            isShowButton: true
          })
          this.setData({
            buttonText: '评价'
          })
        }
      } else if (this.data.status === '4') {
        text = '已完成';
        this.setData({
          isShowAccept: false,
          isShowButton: true
        })
        this.setData({
          buttonText: '查看评价'
        })
      } else {
        text = this.properties.identity === 'coach' ? '已拒绝' : '师傅拒绝'
        this.setData({
          isShowAccept: false,
          isShowButton: false
        })
      }
      this.setData({
        hintText: text
      })
      console.log('2')
    },
    accept () {
      this.setData({
        status: '1'
      })
      console.log(this.data.status)
      this.hintText();
    },
    refuse() {
      this.setData({
        status: '3'
      })
      console.log(this.data.status)
      this.hintText();
    }
  }
})
