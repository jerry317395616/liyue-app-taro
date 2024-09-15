<template>
  <view class="orders-page">
    <!-- 背景图 -->
    <view class="background-overlay"></view>

    <!-- 页面标题 -->
    <view class="page-header">
      <text class="page-title">我的订单</text>
    </view>

    <!-- 订单列表 -->
    <scroll-view class="order-list" scroll-y>
      <view class="order-card" v-for="(order, index) in orders" :key="index">
        <!-- 订单信息 -->
        <view class="order-header">
          <text class="order-number">订单编号：{{ order.orderNumber }}</text>
          <text class="order-status">{{ order.status }}</text>
        </view>
        <view class="order-body">
          <text class="order-date">祭祀日期：{{ order.date }}</text>
          <text class="order-content">祭品内容：{{ order.content }}</text>
        </view>

        <!-- 订单操作按钮 -->
        <view class="order-footer">
          <button class="action-btn" @tap="viewOrderDetails(order)">查看详情</button>
          <button
            v-if="order.status === '已完成'"
            class="action-btn"
            @tap="orderAgain(order)"
          >
            再次下单
          </button>
        </view>
      </view>
    </scroll-view>
  </view>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Taro from '@tarojs/taro';

export default defineComponent({
  name: 'OrdersPage',
  data() {
    return {
      orders: [
        {
          orderNumber: '202309120001',
          status: '已完成',
          date: '2023-09-12',
          content: '金元宝、香烛、纸钱',
        },
        {
          orderNumber: '202309110002',
          status: '进行中',
          date: '2023-09-11',
          content: '银元宝、长明灯、香烛',
        },
        {
          orderNumber: '202309100003',
          status: '已取消',
          date: '2023-09-10',
          content: '纸钱、香炉、花圈',
        },
      ],
    };
  },
  methods: {
    viewOrderDetails(order) {
      // 查看订单详情
      Taro.navigateTo({
        url: `/pages/order-details/index?orderNumber=${order.orderNumber}`,
      });
    },
    orderAgain(order) {
      // 再次下单逻辑
      Taro.showToast({
        title: '再次下单功能开发中',
        icon: 'none',
      });
    },
  },
});
</script>


<style lang="scss">
.orders-page {
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('http://liyue:8000/files/membership-page.png'); // 请替换为您的背景图片
  background-size: cover;
  background-position: center center;
  z-index: 0;
}

/* 页面标题 */
.page-header {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
  z-index: 1;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  color: #c0301c; /* 中国红 */

}

/* 订单列表样式 */
.order-list {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
}

.order-card {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  position: relative;
}

.order-card::before {
  content: '';
  position: absolute;
  top: 10px;
  left: -5px;
  width: 5px;
  height: calc(100% - 20px);
  background-color: #c0301c; /* 左侧红色装饰条 */
  border-radius: 2px;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.order-number {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.order-status {
  font-size: 16px;
  color: #d4af37; /* 金色 */
}

.order-body {
  margin-bottom: 15px;
}

.order-date,
.order-content {
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
}

.order-footer {
  display: flex;
  justify-content: flex-end;
}

.action-btn {
  background-color: #c0301c; /* 中国红 */
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 10px;
  border: none;

}


</style>
