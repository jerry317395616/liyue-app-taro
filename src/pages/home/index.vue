<template>
  <view>
    <!-- 背景视频 -->
    <view class="background" v-if="backgroundVideoUrl">
      <video
        id="backgroundVideo"
        class="background-video"
        :src="backgroundVideoUrl"
        :autoplay="true"
        muted
        :loop="true"
        objectFit="cover"
        showCenterPlayBtn="false"
        controls="false"
      ></video>
    </view>

    <!-- Logo 图片 -->
    <view class="logo-container">
      <image class="logo-image" :src="logoUrl" mode="widthFix"></image>
    </view>

    <!-- 卡片区域 -->
    <view class="card-container">
      <view class="card large" :style="{ backgroundImage: `url(${cards})` }"></view>
      <view class="card small" :style="{ backgroundImage: `url(${cards})` }"></view>
      <view class="card small" :style="{ backgroundImage: `url(${cards})` }"></view>
      <view class="card large" :style="{ backgroundImage: `url(${cards})` }"></view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import request from '../../service/api'
import Taro from '@tarojs/taro'

interface Card {
  size: 'large' | 'small'
  backgroundImage: string
}

export default defineComponent({

  name: 'LyHome',
  setup() {
    const BASE_URL = process.env.TARO_APP_BASE_URL
    const backgroundVideoUrl = ref<string>('')
    const logoUrl = ref<string>('')
    const cards = ref<string>([])
    const loading = ref<boolean>(true)
    const fetchHomepageSettings = async () => {
      try {
        const response = await request('/api/resource/Ly Homepage Settings', 'GET', {
          fields: ['*'],
          filters: [
            ['Ly Homepage Settings', 'enabled', '=', '1']
          ]
        })

        // 根据实际 API 响应结构解析数据
        const data = response.data[0];
        console.log('首页配置',data)
        backgroundVideoUrl.value = `${BASE_URL}/${data.bg_video}`; // 背景视频 URL
        logoUrl.value = `${BASE_URL}/${data.logo_image}`; // logo 图片 URL
        cards.value = `${BASE_URL}/${data.bg_image}`; // 背景图片 URL
      } catch (error) {
        Taro.showToast({
          title: '首页设置加载失败',
          icon: 'none'
        })
        console.error('首页设置加载失败：', error)
      } finally {
        loading.value = false
      }
    }

    onMounted(() => {
      fetchHomepageSettings()
    })

    return {
      backgroundVideoUrl,
      logoUrl,
      cards,
      loading
    }
  }
})
</script>

<style lang="scss">
.home {
  position: relative;
  width: 100%;
  height: 100%;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Logo 样式 */
.logo-container {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* 控制距离顶部的距离 */
  z-index: 1; /* 确保 logo 位于背景之上 */
}

.logo-image {
  width: 500px; /* 根据需要调整 logo 大小 */
  height: 500px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;
  padding: 0 10px;
}

.card {
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 10px;
}

.large {
  width: 100%;
  height: 220px;
}

.small {
  width: 48%;
  height: 200px;
}

.card {
  //background-image: url('http://liyue:8000/files/material-item5.png'); /* 替换为您的图片路径 */
  background-size: 100% 100%; /* 拉伸图片以适应卡片宽高 */
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
