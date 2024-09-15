<template>
  <view class="profile-page">
    <!-- 背景图 -->
    <view class="background-overlay"></view>

    <!-- 用户信息展示 -->
    <view class="user-info">
      <image class="user-avatar" />
<!--      <image class="user-avatar" src="@/assets/home.png" />-->
      <view class="user-details">
        <text class="user-name">张三</text>
        <text class="user-phone">手机号：18888888888</text>
      </view>
      <button class="edit-btn" @tap="editProfile">编辑资料</button>
    </view>

    <!-- 功能列表 -->
    <scroll-view class="function-list" scroll-y>
      <!-- 我的功能 -->
      <view class="section-title">我的功能</view>
      <view class="function-item" @tap="viewOrders">
        <image  class="function-icon" />
<!--        <image src="@/assets/home.png" class="function-icon" />-->
        <text class="function-text">我的订单</text>
      </view>
      <view class="function-item" @tap="viewRitualServices">
        <image class="function-icon" />
<!--        <image src="@/assets/home.png" class="function-icon" />-->
        <text class="function-text">我的代祭服务</text>
      </view>
      <view class="function-item" @tap="viewSettings">
        <image  class="function-icon" />
<!--        <image src="@/assets/home.png" class="function-icon" />-->
        <text class="function-text">设置</text>
      </view>

      <!-- 常用功能 -->
      <view class="section-title">常用功能</view>
      <view class="function-item" @tap="contactSupport">
        <image class="function-icon" />
<!--        <image src="@/assets/home.png" class="function-icon" />-->
        <text class="function-text">联系客服</text>
      </view>
      <view class="function-item" @tap="viewHelp">
        <image  class="function-icon" />
<!--        <image src="@/assets/home.png" class="function-icon" />-->
        <text class="function-text">帮助与反馈</text>
      </view>

      <!-- 登出按钮 -->
      <button class="logout-btn" @tap="logout">退出登录</button>
    </scroll-view>
  </view>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Taro from '@tarojs/taro';

export default defineComponent({
  name: 'ProfilePage',
  methods: {
    editProfile() {
      Taro.showToast({ title: '跳转到编辑资料页面', icon: 'none' });
    },
    viewOrders() {
      Taro.navigateTo({ url: '/pages/orders/index' });
    },
    viewRitualServices() {
      Taro.navigateTo({ url: '/pages/ritual-services/index' });
    },
    viewSettings() {
      Taro.navigateTo({ url: '/pages/settings/index' });
    },
    contactSupport() {
      Taro.makePhoneCall({ phoneNumber: '400-888-8888' });
    },
    viewHelp() {
      Taro.navigateTo({ url: '/pages/help/index' });
    },
    logout() {
      Taro.showToast({ title: '退出登录成功', icon: 'success' });
    },
  },
});
</script>


<style lang="scss">
/* 引入中国风字体 */
//@font-face {
//  font-family: 'ZCOOLXiaoWei';
//  src: url('/assets/fonts/ZCOOLXiaoWei-Regular.ttf') format('truetype');
//}

.profile-page {
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('http://liyue:8000/files/membership-page.png'); /* 请替换为您的背景图片 */
  background-size: cover;
  background-position: center center;
  z-index: -1;
}

/* 用户信息展示部分 */
.user-info {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #d4af37; /* 金色边框 */
  margin-right: 15px;
}

.user-details {
  flex-grow: 1;
}

.user-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  //font-family: 'ZCOOLXiaoWei', sans-serif;
}

.user-phone {
  font-size: 16px;
  color: #666;
}

.edit-btn {
  padding: 8px 15px;
  background-color: #c0301c; /* 中国红 */
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  //font-family: 'ZCOOLXiaoWei', sans-serif;
}

/* 功能列表 */
.function-list {
  flex: 1;
  padding: 10px 0;
  overflow-y: auto;
}

.section-title {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  color: #c0301c; /* 中国红 */
  //font-family: 'ZCOOLXiaoWei', sans-serif;
  border-left: 5px solid #c0301c;
  background-color: rgba(255, 255, 255, 0.9);
}

.function-item {
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #e0e0e0;
}

.function-icon {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}

.function-text {
  font-size: 18px;
  color: #333;
  //font-family: 'ZCOOLXiaoWei', sans-serif;
}

/* 登出按钮 */
.logout-btn {
  width: 90%;
  margin: 20px auto;
  padding: 12px;
  background-color: #ff4d4f;
  color: #fff;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  border: none;
  //font-family: 'ZCOOLXiaoWei', sans-serif;
}
</style>

