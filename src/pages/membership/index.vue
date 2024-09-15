<template>
  <view class="membership-page">
    <!-- 背景图 -->
    <view class="background-overlay"></view>

    <!-- 会员信息 -->
    <view class="member-info">
      <image class="member-avatar" />
<!--      <image class="member-avatar" src="@/assets/home.png" />-->
      <view class="member-details">
        <text class="member-name">张三</text>
        <text class="member-level">{{ membershipLevel }}</text>
      </view>
      <view class="remaining-services">
        <text class="remaining-label">剩余代祭次数：</text>
        <text class="remaining-count">{{ remainingTimes }}</text>
      </view>
    </view>

    <!-- 会员特权 -->
    <view class="section-title">会员专属特权</view>
    <scroll-view class="privilege-section" scroll-y>
      <view
        class="privilege-card"
        v-for="(privilege, index) in privileges"
        :key="index"
      >
        <image class="privilege-icon" :src="privilege.icon" />
        <view class="privilege-details">
          <text class="privilege-title">{{ privilege.title }}</text>
          <text class="privilege-description">
            {{ privilege.description }}
          </text>
        </view>
      </view>
    </scroll-view>

    <!-- 升级会员/充值代祭次数 -->
    <view class="buttons-section">
      <button class="action-btn" @tap="upgradeMembership">
        升级会员
      </button>
      <button class="action-btn" @tap="rechargeTimes">
        充值代祭次数
      </button>
    </view>

    <!-- 会员福利 -->
    <view class="section-title">会员福利</view>
    <scroll-view class="benefits-section" scroll-y>
      <view
        class="benefit-card"
        v-for="(benefit, index) in benefits"
        :key="index"
      >
        <!-- 新增的图标元素 -->
        <image class="benefit-icon" :src="benefit.icon" />
        <view class="benefit-details">
          <text class="benefit-title">{{ benefit.title }}</text>
          <text class="benefit-description">{{ benefit.description }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MembershipPage',
  data() {
    return {
      membershipLevel: '钻石会员',
      remainingTimes: 5,
      privileges: [
        {
          title: '每月3次免费代祭',
          description: '钻石会员每月享有3次免费代祭服务',
          // icon: require('@/assets/home.png'),
        },
        {
          title: '专属定制祭品',
          description: '享有个性化定制的祭品服务',
          // icon: require('@/assets/home.png'),
        },
        {
          title: '优先响应客服',
          description: '享受7x24小时优先响应客服服务',
          // icon: require('@/assets/home.png'),
        },
      ],
      benefits: [
        {
          title: '会员专属折扣',
          description: '所有代祭服务享受8折优惠',
          // icon: require('@/assets/home.png'),
        },
        {
          title: '赠送生日礼品',
          description: '会员生日月享受免费礼品',
          // icon: require('@/assets/home.png'),
        },
        {
          title: '参与会员专属活动',
          description: '定期参加线上线下会员活动',
          // icon: require('@/assets/home.png'),
        },
      ],
    };
  },
  methods: {
    upgradeMembership() {
      // 升级会员的逻辑
      Taro.showToast({
        title: '升级会员功能开发中',
        icon: 'none',
      });
    },
    rechargeTimes() {
      // 充值代祭次数的逻辑
      Taro.showToast({
        title: '充值功能开发中',
        icon: 'none',
      });
    },
  },
});
</script>


<style lang="scss">
/* 引入中国风字体（需在项目中引入对应字体文件） */


.membership-page {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  overflow: hidden;
}

/* 背景覆盖层 */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('http://liyue:8000/files/membership-page.png'); /* 替换为您的背景图片路径 */
  background-size: cover;
  background-position: center center;
  z-index: -1;
  filter: brightness(0.8); /* 调整亮度，突出前景内容 */
}

/* 会员信息部分 */
.member-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9); /* 半透明背景 */
  border-bottom: 1px solid #e0e0e0;
}

.member-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #d4af37; /* 金色边框 */
}

.member-details {
  flex: 1;
  margin-left: 15px;
}

.member-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.member-level {
  font-size: 18px;
  color: #d4af37; /* 金色 */
}

.remaining-services {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.remaining-label {
  font-size: 16px;
  color: #666;
}

.remaining-count {
  font-size: 28px;
  font-weight: bold;
  color: #c0301c; /* 中国红 */
}

/* 标题部分 */
.section-title {
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
  padding: 0 20px;
  color: #333;
  border-left: 5px solid #c0301c; /* 左侧红色边框 */
}

/* 会员特权部分 */
.privilege-section {
  flex: 1;
  padding: 0 20px;
  margin-bottom: 10px;
  overflow-y: auto;
}

.privilege-card {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
}

.privilege-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.privilege-details {
  flex: 1;
}

.privilege-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.privilege-description {
  font-size: 14px;
  color: #666;
}

/* 按钮部分 */
.buttons-section {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
}

.action-btn {
  width: 48%;
  padding: 12px;
  background-color: #c0301c; /* 中国红 */
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 会员福利部分 */
/* 福利卡片样式 */
.benefit-card {
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #e0e0e0;
}

/* 福利图标样式 */
.benefit-icon {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

/* 福利详情样式 */
.benefit-details {
  flex: 1;
}

/* 福利标题样式 */
.benefit-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

/* 福利描述样式 */
.benefit-description {
  font-size: 16px;
  color: #666;
}

</style>
