---
title: "The Evolution of Adaptyst: From Architecture-Agnostic Profiling to Modular Performance Analysis"
date: 2025-12-30
layout: update
tags:
  - performance
  - adaptyst
  - adaptiveperf
  - sycl
  - profiling
---

Adaptyst (formerly [AdaptivePerf]) has evolved significantly since it was last mentioned in SYCLOPS. It is an early-phase architecture-agnostic performance analysis tool which aims to address software, hardware, and system needs in a future-proof way. Recently, the major modular redesign has been released, making Adaptyst easier to adapt to technology developments thanks to add-ons that can be created by external developers and integrate existing work like profilers. The diagram below shows how the tool can be used to analyse performance of computing workflows.

![Adaptyst Flow Diagram](/static/images/updates/2025-12-30-adaptyst-evolution/adaptyst-flow.jpg)

A user starts with defining a workflow to be evaluated, making use of plugins: the first type of Adaptyst add-ons. These are responsible for converting use case(s) to the Adaptyst intermediate representation (IR) and can capture diverse scenarios from across computing, but only running a specific command is supported at the moment.

Afterwards, the tool compiles the workflow to its IR form (in the current version of Adaptyst, this is an SDFG from DaCe) and sends it to a set of modules for processing. Modules are the second type of Adaptyst add-ons: they form a system graph corresponding to a computer system with nodes and entities, where nodes can be imagined as peripherals and entities can be imagined as servers grouping peripherals. Each module carries out performance analysis of a specific component (e.g. a GPU or its unit, an ASIC).

There are two modules available for now:

* **linuxperf**: encompassing the original functionality of Adaptyst, i.e. on-CPU and off-CPU activity analysis of threads/processes of a given program on Linux
* **nvgpu**: tracing NVIDIA CUDA API calls in a basic way, with more NVIDIA-GPU-related features coming later

After Adaptyst finishes its job, the results can be explored using a variety of methods, including Adaptyst Analyser presented in the demo video below.

[![Adaptyst Video](/static/images/updates/2025-12-30-adaptyst-evolution/video-thumbnail.jpg)](https://youtu.be/fPNmXRv7zFE)

In the future, R&D is planned towards determining the best full-stack compute solution (semi-)automatically for a given workflow and requirements (including software and hardware optimisations such as picking CPUs, GPUs, FPGAs etc.). You can check out more information about the tool at <https://adaptyst.web.cern.ch>.

[AdaptivePerf]: /updates/2024/06/27/adaptiveperf-syclops
