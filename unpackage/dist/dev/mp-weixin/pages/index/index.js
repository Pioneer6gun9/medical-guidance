"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const sections = common_vendor.ref([
      {
        name: "内科",
        cases: [
          { name: "感冒", department: "呼吸内科" },
          { name: "高血压", department: "心血管内科" },
          { name: "糖尿病", department: "内分泌科" }
        ]
      },
      {
        name: "外科",
        cases: [
          { name: "阑尾炎", department: "普外科" },
          { name: "骨折", department: "骨科" },
          { name: "脑出血", department: "神经外科" }
        ]
      }
      // 可以根据需要继续添加其他科室和病例
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(sections.value, (section, index, i0) => {
          return {
            a: common_vendor.t(section.name),
            b: common_vendor.f(section.cases, (caseItem, index2, i1) => {
              return {
                a: common_vendor.t(caseItem.name),
                b: common_vendor.t(caseItem.department),
                c: index2
              };
            }),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
