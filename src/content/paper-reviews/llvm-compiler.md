---
title: "LLVM: A Compilation Framework for Lifelong Program Analysis & Transformation"
authors: ["Chris Lattner", "Vikram Adve"]
venue: "CGO"
year: 2004
link: "https://llvm.org/pubs/2004-01-30-CGO-LLVM.html"
reviewDate: 2024-02-20
---

这篇论文介绍了 LLVM 编译器基础设施的设计理念和架构。

## 核心思想

1. **SSA 形式中间表示**：LLVM IR 使用静态单赋值形式，简化了数据流分析
2. **模块化设计**：清晰的 Pass 系统，便于添加优化和分析
3. **终身编译**：支持运行时重新优化

## 阅读心得

LLVM 的设计哲学对现代编译器产生了深远影响。其清晰的 IR 设计和可扩展的 Pass 架构使得它成为了学术界和工业界的首选编译器基础设施。
