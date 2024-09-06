---
title: "Re-targetable LLVM C/C++ compiler for RISC-V"
date: 2023-07-25
layout: update
tags:
  - codasip
  - risc-v
  - llvm
link: https://codasip.com/2023/07/25/re-targetable-llvm-c-c-plus-plus-compiler-for-riscv/
---

RISC-V is a modular instruction set architecture (ISA) with great customization capabilities that enable innovation and
differentiation without fragmentation. On top of the baseline modules from ratified/standard ISA extensions, such as
integer instructions or floating-point instructions, designers can add custom instructions: pure design freedom! And the
reasons for adding instructions are many: better performance, smaller memory footprint, lower power consumption, or
anything in between.

This means one important thing: the software (the final application(s)) is compiled for the particular RISC-V ISA. The
software development kit (SDK) must know which ISA modules the RISC-V processor implements, so it can automatically
leverage them. This includes both standard instructions and custom instructions.
