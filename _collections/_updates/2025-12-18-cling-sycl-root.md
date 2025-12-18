---
title: "Interactive Heterogeneous Computing with Cling and SYCL"
date: 2025-12-18
layout: update
tags:
  - root
  - cling
  - sycl
  - cern
  - llvm
---

Cling, the interactive C++ interpreter, one of the core components of ROOT, is essential for exploratory data analysis in High Energy Physics. Before the SYCLOPS project, Cling was tied to an older LLVM toolchain and did not have proper support for modern heterogeneous programming models such as SYCL. CUDA was supported, but only in a limited and not very flexible way. As a result, users were mostly restricted to CPU workflows, and there was no straightforward way to experiment interactively with SYCL or accelerator oriented C++ inside ROOT or inside Jupyter.

During SYCLOPS, a large part of the work focused on modernising this foundation so that ROOT could eventually support interactive heterogeneous computing. The first major task was to upgrade the LLVM backend in Cling, first to LLVM 18 and later to LLVM 20. This was a difficult change because ROOT relies on a very large test suite, with more than three thousand tests accumulated over many years. These tests caught subtle regressions. The upgrade required changes in the JIT engine, in the incremental compilation logic, and in ROOT’s dictionary generation pipeline. Since all of these depend closely on LLVM internals, some upstreaming effort was also needed. This work was necessary in order to make ROOT compatible with newer C++ standards such as C++20 and also to prepare the ground for AdaptiveCpp, which requires a modern LLVM toolchain for SYCL code.

Once this modernisation was in place, we introduced SYCL support directly in Cling as part of the SYCLOPS effort, and this support has now been merged into ROOT starting with version 6.38. The feature is available when ROOT is built with the -Dexperimental_adaptivecpp flag. With this, users can write and run SYCL kernels interactively inside ROOT, which also means inside Jupyter notebooks. We prepared [simple tutorials](https://root.cern/doc/master/group__tutorial__heterogeneous.html) to help new users get started.

Functional testing and performance checks were carried out for both CPU (OpenMP) and GPU (CUDA) backends through the interpreter. The behaviour was consistent across both targets. We also validated the portability of the approach by building and running SYCL-Cling on RISC-V systems. This confirmed that the new infrastructure can serve as a general platform for heterogeneous development.

This reduces the entry barrier for physicists who want to try GPU acceleration without leaving the ROOT environment. The work also opens the door to teams at CERN and outside who are actively investigating heterogeneous computing models and need an environment where they can iterate quickly.

[![SYCL-Cling Video](https://img.youtube.com/vi/aEu7t0AQOb4/0.jpg)](https://youtu.be/aEu7t0AQOb4)
