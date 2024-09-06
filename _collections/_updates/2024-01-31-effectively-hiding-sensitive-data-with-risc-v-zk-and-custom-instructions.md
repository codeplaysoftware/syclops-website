---
title: "Effectively hiding sensitive data with RISC-V Zk and custom instructions"
date: 2024-01-31
layout: update
tags:
  - codasip
  - risc-v
  - cryptographic
link: https://codasip.com/2024/01/31/effectively-hiding-sensitive-data-with-risc-v-zk-and-custom-instructions/
---

Cryptographic hash functions play a critical role in computer security providing a one-way transformation of sensitive
data. Many information-security applications benefit from using hash functions, specifically digital signatures, message
authentication codes, and other forms of authentication. The calculation of hash functions such as SHA512, SHA256, MD5
etc is a potential playground for Custom Compute. This is where the ISA flexibility enabled by RISC-V and empowered by
the Zk extension, as well as the ability to merge inherently sequential bit manipulations in custom instructions help to
improve the performance.   
