---
title: "AdaptivePerf SYCLOPS"
date: 2024-06-27
layout: update
tags:
  - press-release
  - linux
  - performance
  - github
---

AdaptivePerf is an open-source architecture-agnostic code profiler for Linux, based on the custom-patched "perf". Using
just one single command adaptiveperf `"<command to be profiled>"`, the tool:

* samples both on-CPU and off-CPU activity,
* traces every spawned thread and process,
* minimises the risk of broken profiled stacks by detecting inappropriate kernel and CPU configurations automatically (
  provided that the profiled program has been compiled with frame pointers),
* produces data for rendering interactive non-time-ordered and time-ordered flame graphs in a web browser, also on
  non-Linux operating systems.

Moreover, with extra adaptiveperf command flags, low-level interactions with hardware can be profiled and result
processing can be moved to a separate Linux or non-Linux machine through real-time TCP streaming.

The tool has been already tested on the x86-64 and RISC-V architectures, with arm64 to follow soon. You can download the
development version from GitHub: <https://github.com/AdaptivePerf/AdaptivePerf>.

AdaptivePerf has been created to help profile and benchmark the SYCLOPS stack in high-energy physics data processing,
genomics analysis, and autonomous systems by addressing the shortcomings of the original “perf”. More features are
planned to be added soon, including roofline profiling (thanks to the collaboration with INESC-ID) and
heterogeneous/non-CPU architecture support.

![AdaptivePerf Diagram](/static/images/updates/2024-06-27-adaptiveperf-syclops/image.webp)

[![AdaptivePerf Video](/static/images/updates/2024-06-27-adaptiveperf-syclops/video-thumbnail.webp)](https://www.youtube.com/watch?v=utluBAY3a2Q)
