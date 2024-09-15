<template>
  <view class="ritual-page">
    <!-- 背景图 -->
    <view class="background-overlay"></view>
    <view v-for="(page, pageIndex) in pageList" :key="pageIndex" class="page-section">
      <!-- 表单部分 -->
      <view class="form-section">
        <!-- 右上角序号 -->
        <view class="form-header">
          <text class="form-index">{{ pageIndex + 1 }}</text>
        </view>
        <!-- 表单项 -->
        <view class="form-item">
          <text class="label">阳上人：</text>
          <input class="input" v-model="page.formData.yangShangRen" placeholder="如果多人姓名请用‘#’号隔开" />
        </view>
        <view class="form-item">
          <text class="label">地址：</text>
          <input class="input" v-model="page.formData.address" placeholder="请精确到市区" />
        </view>
        <view class="form-item">
          <text class="label">已逝亲人：</text>
          <input class="input" v-model="page.formData.deceased" placeholder="如爷爷张宝宝" />
        </view>
        <view class="form-item">
          <text class="label">安葬地址：</text>
          <input class="input" v-model="page.formData.burialAddress" placeholder="请尽量填写精确地址" />
        </view>
      </view>

      <!-- 表文功能按钮 -->
      <view class="button-section">
        <button class="action-btn" @tap="generateDocument(pageIndex)">生成表文</button>
      </view>

      <!-- 商品展示区域 -->
      <view class="products-section">
        <view class="products-header">
          <text class="header-title">常用品</text>
          <text class="header-subtitle">| 其他</text>
        </view>
        <view class="products-grid">
          <view class="product-card" v-for="(product, index) in page.products" :key="index">
            <image class="product-image" :src="product.image" />
            <text class="product-name">{{ product.name }}</text>
            <view class="product-controls">
              <button class="control-btn" @tap="decreaseQuantity(pageIndex, index)">-</button>
              <text class="product-quantity">{{ product.quantity }}</text>
              <button class="control-btn" @tap="increaseQuantity(pageIndex, index)">+</button>
            </view>
          </view>
        </view>
      </view>

      <!-- 寄语部分 -->
      <view class="message-section">
        <text class="message-label">寄语：</text>
        <textarea class="message-input" v-model="page.message" placeholder="用于缅怀，不作为表文显示"></textarea>
      </view>

      <!-- 底部操作按钮 -->
      <view class="buttons-section">
        <button class="action-btn" @tap="addPage">继续添加表文</button>
        <button class="action-btn" @tap="submitOrder">生成表文转入订单</button>
      </view>
    </view>
    <!-- 动态页面块区域 -->
    <scroll-view class="page-list" scroll-y>

    </scroll-view>
  </view>
</template>




<script lang="ts">
import { defineComponent, ref } from 'vue';
import Taro from '@tarojs/taro';

export default defineComponent({
  name: 'RitualPage',
  setup() {
    // 创建新页面的函数
    const createNewPage = () => ({
      formData: {
        yangShangRen: '',
        address: '',
        deceased: '',
        burialAddress: '',
      },
      products: [
        {
          name: '金元宝',
          quantity: 1,
          image: '/assets/gold-ingot.png',
        },
        {
          name: '银元宝',
          quantity: 1,
          image: '/assets/silver-ingot.png',
        },
        {
          name: '香烛',
          quantity: 1,
          image: '/assets/incense.png',
        },
        {
          name: '纸钱',
          quantity: 1,
          image: '/assets/paper-money.png',
        },
      ],
      message: '', // 新增的寄语属性
    });

    // 页面列表
    const pageList = ref([createNewPage()]); // 初始一个页面

    // 添加新页面
    const addPage = () => {
      pageList.value.push(createNewPage());
    };

    // 增加商品数量
    const increaseQuantity = (pageIndex: number, productIndex: number) => {
      pageList.value[pageIndex].products[productIndex].quantity += 1;
    };

    // 减少商品数量
    const decreaseQuantity = (pageIndex: number, productIndex: number) => {
      if (pageList.value[pageIndex].products[productIndex].quantity > 0) {
        pageList.value[pageIndex].products[productIndex].quantity -= 1;
      }
    };

    // 生成表文
    const generateDocument = (pageIndex: number) => {
      // 在这里处理生成表文的逻辑
      Taro.navigateTo({
        url: `/pages/document/index?pageIndex=${pageIndex}`,
      });
    };

    // 提交订单
    const submitOrder = () => {
      // 在这里处理提交订单的逻辑
      Taro.showToast({
        title: '订单提交成功',
        icon: 'success',
      });
    };

    return {
      pageList,
      addPage,
      increaseQuantity,
      decreaseQuantity,
      generateDocument,
      submitOrder,
    };
  },
});
</script>




<style lang="scss">

.ritual-page {
  position: relative;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  //background-image: url('/assets/ritual-background.png'); // 请替换为您的背景图片
  background-size: cover;
  background-position: center center;
  z-index: -1;
}

.page-list {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

.page-section {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;
}

.form-section {
  margin-bottom: 20px;
}

.form-header {
  position: absolute;
  right: 10px;
  top: 10px;
}

.form-index {
  font-size: 18px;
  background-color: #c0301c; // 中国红
  color: white;
  padding: 4px 8px;
  border-radius: 50%;
}

.form-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.label {
  width: 80px;
  font-size: 16px;
  color: #333;
}

.input {
  flex: 1;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  font-size: 16px;
  color: #666;
  background: transparent;
}

.products-section {
  margin-bottom: 20px;
}

.products-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.header-title {
  font-size: 18px;
  font-weight: bold;
  color: #c0301c; // 中国红
  border-left: 4px solid #c0301c;
  padding-left: 10px;
}

.header-subtitle {
  margin-left: 10px;
  font-size: 16px;
  color: #666;
}

.products-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product-card {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 10px;
  width: calc(50% - 10px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
}

.product-name {
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
}

.product-controls {
  display: flex;
  align-items: center;
}

.control-btn {
  background-color: #c0301c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  border-radius: 5px;
}

.product-quantity {
  margin: 0 10px;
  font-size: 16px;
  color: #333;
}

.message-section {
  padding: 0 10px;
  margin-bottom: 20px;
}

.message-label {
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
}

.message-input {
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.9);
}

.buttons-section {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 20px;
}

.action-btn {
  width: 48%;
  background-color: #c0301c; // 中国红
  color: #fff;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  border: none;
}

</style>



