// pages/1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    identity: -1,
    major: -1,
    name: '',
    id: -1,
    school: -1,
    identities: [
      { name: 0, value: '师傅', selected: false },
      { name: 1, value: '陪练', selected: false }
    ],
    show: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['体育学院', '工商管理学院', '食品科学与工程学院'], //下拉列表的数据
    majorTitle: '学院',
    schools: [
      { name: 0, value: '五山校区', selected: false },
      { name: 1, value: '大学城校区', selected: false },
      { name: 2, value: '国际校区', selected: false }
    ],
    disabled: true,  //下一步按钮不可用
    arrow: '../../../icons/down.png',
    finish: false, //是否填完所有信息
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
  // 获取身份 0师傅，1陪练
  getIdentity (e) {
    console.log(e)
    var that = this;
    var identity = e.currentTarget.dataset.index
    if (identity == 0) {
      that.setData({
        identity: identity,
        'identities[0].selected': true,
        'identities[1].selected': false
      })
    } else if (identity == 1) {
      that.setData({
        identity: identity,
        'identities[0].selected': false,
        'identities[1].selected': true
      })
    }
    this.ifFinish()
  },
  // 获取姓名和学号
  getName (e) {
    var name = e.detail.value
    this.setData({
      name: name
    })
    this.ifFinish()
  },
  getId (e) {
    var id = e.detail.value
    this.setData({
      id: id
    })
    this.ifFinish()
  },
  // 点击下拉显示框
  selectTap() {
    var arrow = this.data.show ? '../../../icons/down.png' : '../../../icons/up.png'
    this.setData({
      show: !this.data.show,
      arrow: arrow
    })
  },
  // 点击下拉列表,获取学院
  optionTap(e) {
    console.log(e)
    var arrow = this.data.show ? '../../../icons/down.png' : '../../../icons/up.png'
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      major: Index,
      majorTitle: this.data.selectData[Index],
      show: !this.data.show,
      arrow: arrow
    })
    this.ifFinish()
  },
  // 获取学校 
  getSchool (e) {
    console.log(e)
    var that = this;
    var school = e.currentTarget.dataset.index
    switch (school) {
      case 0: 
        that.setData({
          school: school,
          'schools[0].selected': true,
          'schools[1].selected': false,
          'schools[2].selected': false
        })
        break
      case 1:
        that.setData({
          school: school,
          'schools[0].selected': false,
          'schools[1].selected': true,
          'schools[2].selected': false
        })
        break
      case 2:
        that.setData({
          school: school,
          'schools[0].selected': false,
          'schools[1].selected': false,
          'schools[2].selected': true
        })
        break
    }
    this.ifFinish()
  },
  ifFinish () {
    if (this.data.identity !== -1 && this.data.name !== '' && this.data.id !== 0 && this.data.major !== -1 && this.data.school !== -1) {
      console.log('ok')
      this.setData({
        finish: true
      })
    }
  },
  toNext () {
    wx.redirectTo({
      url: '../2/2'
    })
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