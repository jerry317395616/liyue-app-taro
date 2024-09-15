<template>
  <view class="document-page">
    <!-- 城隍表文 -->
    <view class="document-section">
      <view class="document-title">城隍表文</view>
      <view class="document-content">
        <view class="document-text">
          <text>天运 年 月 日吉时奉上：</text>
          <text>奉上金元宝</text>
        </view>
        <view class="document-main-content">
          <text>城隍表文内容...</text>
        </view>
        <view class="document-form">
          <view class="form-item">
            <text>阳上人姓名：</text>
            <input class="input" placeholder="请填写阳上人姓名" />
          </view>
          <view class="form-item">
            <text>居住地址：</text>
            <input class="input" placeholder="请填写居住地址" />
          </view>
        </view>
        <view class="product-info">
          <image src="/assets/gold-ingot.png" class="gold-image"></image>
          <view class="product-controls">
            <button class="control-btn">-</button>
            <text class="product-quantity">20</text>
            <button class="control-btn">+</button>
          </view>
        </view>
      </view>
    </view>

    <!-- 土地表文 -->
    <view class="document-section">
      <view class="document-title">土地表文</view>
      <view class="document-content">
        <view class="document-text">
          <text>天运 年 月 日吉时奉上：</text>
          <text>奉上金元宝</text>
        </view>
        <view class="document-main-content">
          <text>土地表文内容...</text>
        </view>
        <view class="document-form">
          <view class="form-item">
            <text>阳上人姓名：</text>
            <input class="input" placeholder="请填写阳上人姓名" />
          </view>
          <view class="form-item">
            <text>居住地址：</text>
            <input class="input" placeholder="请填写居住地址" />
          </view>
        </view>
        <view class="product-info">
          <image src="/assets/gold-ingot.png" class="gold-image"></image>
          <view class="product-controls">
            <button class="control-btn">-</button>
            <text class="product-quantity">20</text>
            <button class="control-btn">+</button>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部按钮 -->
    <view class="buttons-section">
      <button class="action-btn">表文功能（用于表文显示）</button>
      <button class="action-btn">生成表文转入订单</button>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DocumentPage',
  methods: {
    // 可以在这里定义生成订单或其他功能的逻辑
  }
})
</script>

<style lang="scss">
.document-page {
  padding: 10px;
  background-color: #f5f5f5;
}

.document-section {
  background-color: #ffd700;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.document-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.document-content {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
}

.document-text {
  margin-bottom: 10px;
  font-size: 16px;
  color: #333;
}

.document-main-content {
  margin: 20px 0;
  font-size: 18px;
  line-height: 1.5;
  color: #333;
}

.document-form {
  margin-top: 15px;
}

.form-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.input {
  flex: 1;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
}

.product-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.gold-image {
  width: 30px;
  height: 30px;
}

.product-controls {
  display: flex;
  align-items: center;
}

.control-btn {
  background-color: #ddd;
  border: none;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
}

.product-quantity {
  margin: 0 10px;
  font-size: 16px;
}

.buttons-section {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.action-btn {
  width: 48%;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
}
</style>
