<template>
  <view class="container">
    <view class="header">
      <text class="title">常见病例与挂科室</text>
    </view>
    <view class="content">
      <view class="section" v-for="(section, index) in sections" :key="index">
        <view class="section-header">
          <text class="section-title">{{ section.name }}</text>
        </view>
        <view class="case-list">
          <view class="case-item" v-for="(caseItem, index) in section.cases" :key="index">
            <text class="case-name">{{ caseItem.name }}</text>
            <text class="case-department">{{ caseItem.department }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    name: '内科',
    cases: [
      { name: '感冒', department: '呼吸内科' },
      { name: '高血压', department: '心血管内科' },
      { name: '糖尿病', department: '内分泌科' },
    ]
  },
  {
    name: '外科',
    cases: [
      { name: '阑尾炎', department: '普外科' },
      { name: '骨折', department: '骨科' },
      { name: '脑出血', department: '神经外科' },
    ]
  },
  // 可以根据需要继续添加其他科室和病例
])
</script>

<style scoped>
.container {
  padding: 20rpx;
  background-color: #f5f5f5;
}

.header {
  background-color: #68A79B;
  padding: 30rpx;
  border-radius: 20rpx;
  text-align: center;
  margin-bottom: 20rpx;
}

.title {
  color: #ffffff;
  font-size: 36rpx;
  font-weight: bold;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.section {
  background-color: #ffffff;
  border-radius: 20rpx;
  padding: 20rpx;
}

.section-header {
  border-bottom: 2rpx solid #68A79B;
  padding-bottom: 10rpx;
  margin-bottom: 10rpx;
}

.section-title {
  color: #68A79B;
  font-size: 32rpx;
  font-weight: bold;
}

.case-list {
  display: flex;
  flex-direction: column;
  gap: 10rpx;
}

.case-item {
  display: flex;
  justify-content: space-between;
  padding: 10rpx;
  background-color: #f5f5f5;
  border-radius: 10rpx;
}

.case-name {
  color: #333333;
  font-size: 28rpx;
}

.case-department {
  color: #68A79B;
  font-size: 28rpx;
}
</style>
