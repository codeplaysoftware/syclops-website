---
title: "A custom RISC-V vector instruction to accelerate structured-sparse matrix multiplications"
date: 2024-03-20
layout: update
tags:
  - codasip
  - risc-v
  - ai
  - matrix
link: https://codasip.com/2024/03/20/a-custom-risc-v-vector-instruction/
---

A novel AI-acceleration paper presents a method to optimize sparse matrix multiplication for machine learning models,
particularly focusing on structured sparsity. Structured sparsity involves a predefined pattern of zero values in the
matrix, unlike unstructured sparsity where zeros can occur anywhere. The research was conducted by Democritus University
of Thrace (DUTH) in Greece and was sponsored by Codasip University Program.

Structured sparsity has emerged as a promising approach to streamline the complexity of modern Machine Learning (ML)
applications and facilitate the handling of sparse data in hardware. Accelerating ML models, whether for training or
inference, heavily relies on efficient execution of equivalent matrix multiplications, which are often performed on
vector processors or custom matrix engines.
