---
title: "Attention Is All You Need"
authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit", "Llion Jones", "Aidan N. Gomez", "Łukasz Kaiser", "Illia Polosukhin"]
venue: "NeurIPS"
year: 2017
link: "https://arxiv.org/abs/1706.03762"
reviewDate: 2024-01-15
---

这篇论文提出了 Transformer 架构，完全基于注意力机制，摒弃了传统的 RNN 和 CNN 结构。

## 核心贡献

1. **Self-Attention 机制**：引入了多头自注意力，可以并行计算，大大提高了训练效率
2. **Position Encoding**：使用正弦/余弦函数编码位置信息
3. **Layer Normalization**：在每个子层后使用，稳定训练

## 阅读心得

Transformer 的提出是 NLP 领域的里程碑。它不仅在机器翻译任务上取得了 SOTA 结果，更重要的是为后续 GPT、BERT 等大模型奠定了基础。
