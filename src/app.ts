
import { createApp } from 'vue'
import Taro from '@tarojs/taro'
import './app.scss'


// 更新 tabBar 图标的函数
const updateTabBarIcons = async () => {
  try {
    // 发起网络请求，获取图标路径
    const response = await Taro.request({
      url: process.env.TARO_APP_BASE_URL+"/api/resource/Ly TabBar Settings", // 替换为你的接口地址
      method: 'GET',
      data:{
        fields: ['*'],
        // filters: [
        //   ['Ly Homepage Settings', 'enabled', '=', '1']
        // ]
      },
      header: {
        'Content-Type': 'application/json',
        // 可以添加其他请求头，如 Authorization
        'Authorization': 'token 7f6546a02c53292:8e189362e983528'
      }
    });

    console.log('图标', response.data)
    const {
      home_icon,
      homeActiveIcon,
      membership_icon,
      membershipActiveIcon,
      ritual_icon,
      ritualActiveIcon,
      orders_icon,
      ordersActiveIcon,
      profile_icon,
      profileActiveIcon
    } = response.data.data[0];

    // 动态设置 tabBar 图标
    Taro.setTabBarItem({
      index: 0, // 首页
      iconPath: process.env.TARO_APP_BASE_URL+"/"+home_icon,
      selectedIconPath: process.env.TARO_APP_BASE_URL+"/"+home_icon
    });
    Taro.setTabBarItem({
      index: 1, // 会员
      iconPath: process.env.TARO_APP_BASE_URL+"/"+membership_icon,
      selectedIconPath: process.env.TARO_APP_BASE_URL+"/"+membership_icon
    });
    Taro.setTabBarItem({
      index: 2, // 祭祀
      iconPath: process.env.TARO_APP_BASE_URL+"/"+ritual_icon,
      selectedIconPath: process.env.TARO_APP_BASE_URL+"/"+ritual_icon
    });
    Taro.setTabBarItem({
      index: 3, // 订单
      iconPath: process.env.TARO_APP_BASE_URL+"/"+orders_icon,
      selectedIconPath: process.env.TARO_APP_BASE_URL+"/"+orders_icon
    });
    Taro.setTabBarItem({
      index: 4, // 我的
      iconPath: process.env.TARO_APP_BASE_URL+"/"+profile_icon,
      selectedIconPath: process.env.TARO_APP_BASE_URL+"/"+profile_icon
    });
  } catch (error) {
    console.error('获取 tabBar 图标失败：', error);
  }
};

const App = createApp({
  onShow (options) {
    console.log('App onShow.')
    // 应用启动时调用更新 tabBar 图标的函数
    updateTabBarIcons();
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
