---
title: "SYCLOPS GenVectorX"
date: 2025-03-05
layout: update
tags:
  - syclops
  - GenVectorX
---


CERN hosts the world's largest particle accelerator, the LHC, where beams of particles are accelerated and made to
collide to study the fundamental structures of our universe. The LHC produces petabytes of physics data regarding
particle collisions that need to be analysed efficiently. These collisions are expressed as operations on particles,
represented as 4-dimensional time-space vectors, also known as Lorentz Vectors. Analysing these massive amounts of data
naturally requires highly efficient and complex software solutions. ROOT is an open-source platform-independent C++ data
analysis framework designed and developed for this purpose. The [ROOT project](https://root.cern) provides the core
ingredients for high energy physics (HEP) analysis tasks, including optimised data storage, a user-friendly and
interactive interface, math libraries, and visualisation capabilities. ROOT’s high-level data analysis
interface, [RDataFrame](https://root.cern/doc/master/classROOT_1_1RDataFrame.html), currently contains
support for implicit parallelism in multi-threaded and multi-node distributed environments, but GPU parallelism has not
been attempted before this work. Given the increasing heterogeneity in computing facilities, it becomes crucial to
efficiently support GPGPUs to take advantage of the available resources. SYCL allows for a single-source implementation,
which enables support for different architectures.

![Image 1](/static/images/updates/2025-03-05-syclops-genvector-x/image.webp)

Within ROOT, the GenVector is a large package intended to provide classes and functionalities to represent physical
vectors and transformations (such as rotations and Lorentz transformations) in 2, 3, and 4 dimensions, according to the
needs of High Energy Physics researchers. [GenVectorX](https://arxiv.org/abs/2312.02756) extends GenVector, providing a
SYCL implementation of the Lorentz Vector classes that facilitate computations with physical vectors. We leverage SYCL 
as a performance portable framework to migrate and modernize the fundamental GenVector package. Typically, in a HEP 
analysis the data are first read from disk and decompressed; then irrelevant data are filtered out, new quantities 
are defined by processing the remaining particles, possibly more data are filtered out, and last the results are 
aggregated, e.g. by computing an histogram. The GenVectorX package addresses the define action, even if the histogram 
computation has been ported. An extensive test campaign shows that SYCL can achieve competitive performance with 
respect to native CUDA on NVIDIA GPUs with near-one code similarity, meaning that the codebase is more sustainable 
in terms of development efforts and less error-prone as a single source needs to be maintained. Moreover, we acquire 
support for accelerators beyond NVIDIA GPUs - before SYCL, RDataFrame only supported multithreaded execution across 
bulks. These features haven’t been put in production yet, but if you’re curious you can take a look at the 
related [development branch!](https://github.com/mdessole/root/tree/genvectorx_gpu_histogram_bulk-2.0)

