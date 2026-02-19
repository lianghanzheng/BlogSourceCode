// 站点配置 - 个人信息
export const profile = {
  // 姓名
  name: "ReRoozen",

  // 职位/头衔
  title: "PhD Student @ National University of Defense Technology",

  // 个人简介（支持多行）
  bio: `我目前正在国防科技大学攻读计算机科学博士学位，研究方向是高性能计算和编译优化。`,

  // 社交媒体链接（可选）
  links: {
    github: "https://github.com",
    email: "lianghanzheng@nudt.edu.cn",
  },
} as const;

// 站点元数据
export const site = {
  title: "学术主页",
  description: "个人学术主页与博客",
  lang: "zh-CN",
} as const;
