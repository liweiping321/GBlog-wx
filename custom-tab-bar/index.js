//获取应用实例
const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    animation: false,
    list: [
			{
				pagePath: "/pages/index/index",
				iconPath: "/images/icon/home.svg",
				selectedIconPath: "/images/icon/home-hover.svg",
				text: "首页"
			},
      {
        pagePath: "/pages/type/index",
        iconPath: "/images/icon/type.svg",
        selectedIconPath: "/images/icon/type-hover.svg",
        text: "分类"
      },
      {
        pagePath: "/pages/tag/index",
        iconPath: "/images/icon/photo.svg",
        selectedIconPath: "/images/icon/photo-hover.svg",
        text: "面试题"
      },
			{
				pagePath: "/pages/about/home/index",
				iconPath: "/images/icon/about.svg",
				selectedIconPath: "/images/icon/about-hover.svg",
				text: "关于"
			}
		],
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX
  },
  attached() {},
  methods: {
    switchTab(e) {
      var that = this
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: path
        })
      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: path
        })
        this.setData({
          selected: index,
          animation: 'slide-top'
        })
        setTimeout(function() {
          that.setData({
            animation: ''
          })
        }, 3000)
      }
    }
  }
})