export default defineAppConfig({
  pages: [
    // 'pages/index/index',
    'pages/home/index',
    'pages/membership/index',
    'pages/ritual/index',
    'pages/orders/index',
    'pages/profile/index',
    'pages/document/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#8a8a8a", // 未选中时按钮颜色
    selectedColor: "#1c1c1c", // 选中时按钮颜色
    backgroundColor: "#ffffff", // 底部栏背景色
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
        // iconPath: "assets/home.png",
        // selectedIconPath: "assets/home-active.png"
      },
      {
        pagePath: "pages/membership/index",
        text: "会员",
        // iconPath: "assets/membership.png",
        // selectedIconPath: "assets/membership-active.png"
      },
      {
        pagePath: "pages/ritual/index",
        text: "祭祀",
        // iconPath: "assets/ritual.png",
        // selectedIconPath: "assets/ritual-active.png"
      },
      {
        pagePath: "pages/orders/index",
        text: "订单",
        // iconPath: "assets/orders.png",
        // selectedIconPath: "assets/orders-active.png"
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        // iconPath: "assets/profile.png",
        // selectedIconPath: "assets/profile-active.png"
      }
    ]
  }
})
