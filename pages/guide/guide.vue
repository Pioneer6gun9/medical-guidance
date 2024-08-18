<template>
  <view class="app">
    <view class="header">
      <view class="profile">
        <image class="avatar" src="/static/nurse-white.png" mode="aspectFit"></image>
        <view class="basic-info">
          <text>{{ gender }} | {{ age }}岁</text>
        </view>
      </view>
    </view>

    <scroll-view class="scroll-view" scroll-y="true">
      <!-- 顶部文本框 -->
      <view class="chat-box">
        <view class="message-bubble">
          <text class="greeting-text">hi~我是AI导诊助手小觅，可以为您提供人工智能医疗服务哦~</text>
          <view class="service-icons">
            <view class="service-item">
              <image class="service-icon" src="/static/icon1.png" mode="aspectFit" />
              <text>智能导诊</text>
            </view>
            <view class="service-item">
              <image class="service-icon" src="/static/icon2.png" mode="aspectFit" />
              <text>智能问病</text>
            </view>
            <view class="service-item">
              <image class="service-icon" src="/static/icon3.png" mode="aspectFit" />
              <text>智能问药</text>
            </view>
            <view class="service-item">
              <image class="service-icon" src="/static/icon4.png" mode="aspectFit" />
              <text>疫苗查询</text>
            </view>
            <view class="service-item">
              <image class="service-icon" src="/static/icon5.png" mode="aspectFit" />
              <text>科室查询</text>
            </view>
            <view class="service-item">
              <image class="service-icon" src="/static/icon6.png" mode="aspectFit" />
              <text>指标百科</text>
            </view>
          </view>
        </view>
      </view>
      
      <!-- 对话框 -->
      <view class="chat-box">
        <view v-for="(message, index) in messages" :key="index" :class="{'user-message': message.isUser, 'ai-message': !message.isUser}">
          <view class="message-bubble">
            <text>{{ message.content }}</text>
            <view v-if="message.showCommonWords" class="common-words">
              <text v-for="(word, wordIndex) in commonWords" :key="wordIndex" @click="sendCommonWord(word)" class="word">
                {{ word }}
              </text>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    
    <view class="input-area">
      <image class="mic-icon" src="/static/mic.png" mode="aspectFit"></image>
      <view class="input-wrapper">
        <input v-model="inputMessage" type="text" placeholder="请输入症状/疾病/药品/疫苗..." @keyup.enter="sendMessage"/>
      </view>
      <image class="send-icon" @click="sendMessage" src="/static/submit.png" mode="aspectFit"></image>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const mainColor = '#51A99B';
const gender = '女';
const age = 32;

const messages = ref([
  { content: '您可以详细描述症状，我将为您推荐可挂号的科室或医生', showCommonWords: true, isUser: false }
]);

const commonWords = ref(['感冒流鼻涕', '最近睡眠不好', '经常恶心头晕']);
const inputMessage = ref('');

const sendMessage = () => {
  if (inputMessage.value.trim()) {
    messages.value.push({ content: inputMessage.value, isUser: true });
    simulateAiResponse();
    inputMessage.value = '';
  }
};

const simulateAiResponse = () => {
  setTimeout(() => {
    messages.value.push({ content: '这是AI的回复。', isUser: false });
  }, 1000);
};

const sendCommonWord = (word) => {
  messages.value.push({ content: word, isUser: true });
  simulateAiResponse();
};
</script>

<style scoped>
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
}

.header {
  background-color: #51A99B;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.profile {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.basic-info {
  color: white;
  font-size: 16px;
}

.scroll-view {
  flex: 1;
  padding-bottom: calc(110px + env(safe-area-inset-bottom));
  background-color: #f3f3f3;
}

.top-box {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.greeting-text {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.service-icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 28px; 
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.service-icon {
  width: 40px; /* 设置图标的宽度 */
  height: 40px; /* 设置图标的高度 */
}

.service-item text {
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}

.chat-box {
  padding: 16px;
  background-color: #f3f3f3;
  margin: 10px;
  border-radius: 8px;
}

.user-message, .ai-message {
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
}

.ai-message {
  justify-content: flex-start;
}

.message-bubble {
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  max-width: 75%;
}

.user-message .message-bubble {
  background-color: #51A99B;
  color: white;
}

.common-words {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

.word {
  color: #51A99B;
  cursor: pointer;
  margin-top: 5px;
  display: block;
}

.input-area {
  position: fixed;
  bottom: calc(50px + env(safe-area-inset-bottom));
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f8f8f8;
  border-top: 1px solid #ddd;
}

.mic-icon {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 25px;
  padding: 0 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

input {
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 0;
  font-size: 16px;
  color: #333;
}

input::placeholder {
  color: #aaa;
}

.send-icon {
  width: 40px;
  height: 40px;
  margin-left: 10px;
}
</style>
