// 站点配置 - 个人信息
export const profile = {
  // 姓名
  name: "ReRoozen",

  // 职位/头衔
  title: "PhD Student @ CCB University",

  // 个人简介（支持多行）
  bio: `我目前正在CCB大学攻读计算机科学博士学位，研究方向是编译器优化和程序分析。
我的研究聚焦于 LLVM 优化 passes、静态分析工具以及编程语言理论。`,

  // 社交媒体链接（可选）
  links: {
    github: "https://github.com",
    email: "mailto:contact@example.com",
  },
} as const;

// 站点元数据
export const site = {
  title: "学术主页",
  description: "个人学术主页与博客",
  lang: "zh-CN",
} as const;
