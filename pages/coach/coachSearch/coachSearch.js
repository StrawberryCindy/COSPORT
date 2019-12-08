// pages/coach/coachSearch/coachSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    falseData: {
      sport: "篮球",
      school: "华工",
      schoolArea: "五山校区"
    },
    downMenuData :{
      width: "200rpx",
      items: [
      "高水平运动员",
      "有基础陪练"
      ]
    },
    downMenuVal: "高水平运动员",
    showCardDatas: [

    ],
    coachCardDatas: [
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      },
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      },
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      },
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      },
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      },
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      },
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      },
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "未命名",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      } 
    ],
    parnterCardDatas: [
      {
        imgUrl: "../../../../images/head.jpeg",
        name: "基础陪练",
        rank: "一",
        honer: "在省级广东省运动会中获得冠军,我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉我有很多荣誉"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      showCardDatas: this.data.coachCardDatas
    })
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
  downMenuVal (e) {
    this.setData({
      downMenuVal: e.detail.downMenuVal
    })
    if (this.data.downMenuVal === "高水平运动员") {
      this.setData({
        showCardDatas: this.data.coachCardDatas
      })
    } else {
      this.setData({
        showCardDatas: this.data.parnterCardDatas
      })
    }
    console.log(this.data.downMenuVal);
  }
})