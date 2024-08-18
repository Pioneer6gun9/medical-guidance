"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const gender = "女";
const age = 32;
const _sfc_main = {
  __name: "guide",
  setup(__props) {
    const messages = common_vendor.ref([
      { content: "您可以详细描述症状，我将为您推荐可挂号的科室或医生", showCommonWords: true, isUser: false }
    ]);
    const commonWords = common_vendor.ref(["感冒流鼻涕", "最近睡眠不好", "经常恶心头晕"]);
    const inputMessage = common_vendor.ref("");
    const sendMessage = () => {
      if (inputMessage.value.trim()) {
        messages.value.push({ content: inputMessage.value, isUser: true });
        simulateAiResponse();
        inputMessage.value = "";
      }
    };
    const simulateAiResponse = () => {
      setTimeout(() => {
        messages.value.push({ content: "这是AI的回复。", isUser: false });
      }, 1e3);
    };
    const sendCommonWord = (word) => {
      messages.value.push({ content: word, isUser: true });
      simulateAiResponse();
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.t(gender),
        c: common_vendor.t(age),
        d: common_assets._imports_1,
        e: common_assets._imports_2,
        f: common_assets._imports_3,
        g: common_assets._imports_4,
        h: common_assets._imports_5,
        i: common_assets._imports_6,
        j: common_vendor.f(messages.value, (message, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(message.content),
            b: message.showCommonWords
          }, message.showCommonWords ? {
            c: common_vendor.f(commonWords.value, (word, wordIndex, i1) => {
              return {
                a: common_vendor.t(word),
                b: wordIndex,
                c: common_vendor.o(($event) => sendCommonWord(word), wordIndex)
              };
            })
          } : {}, {
            d: index,
            e: message.isUser ? 1 : "",
            f: !message.isUser ? 1 : ""
          });
        }),
        k: common_assets._imports_7,
        l: common_vendor.o(sendMessage),
        m: inputMessage.value,
        n: common_vendor.o(($event) => inputMessage.value = $event.detail.value),
        o: common_vendor.o(sendMessage),
        p: common_assets._imports_8
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-04b95c5c"]]);
wx.createPage(MiniProgramPage);
