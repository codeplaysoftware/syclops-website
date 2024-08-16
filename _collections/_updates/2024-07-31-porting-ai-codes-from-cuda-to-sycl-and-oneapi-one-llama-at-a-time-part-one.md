---
title: "Part One - Porting AI codes from CUDA to SYCL and oneAPI, one llama at a time"
date: 2024-07-31
layout: update
tags:
  - cuda
  - sycl
  - oneapi
  - porting
---

## Introduction

The rapid advancement of LLMs can be attributed to their ability to effectively tackle complex problems, such as those
encountered in chatbots, virtual assistants, content generation, and language translation. Their performance, which
matches human capabilities, places LLMs at the forefront of AI models.

The classical general purpose graph frameworks like PyTorch, TensorFlow, etc. can cover very wide ranges of machine
learning domains such as image and video classification, semantic segmentation, object detection, and other natural
language processing for general-purpose language generation through several neural networks (NN) architectures such as
convolutional Neural networks, Recurrent neural networks, and various types of Transformer-based architectures for
generative AI.

While such omnipotent frameworks can cover almost all training and inference aspects of AI models that are now used, in
some scenarios a particular type of inference only NN architecture is required for specific devices such as edge
computing or systems without a network connection. Such architectures may have some hardware limitations, e.g. single
GPU or Single CPU only with limited memory and cache sizes and restricted operating system support. Hence developers may
struggle to use such frameworks.

With the popularity of large language models, there are several lightweight frameworks, such as Meta’s llama models,
llama.cpp, and vllm are provided to target only transformer-based architectures for inference models. Among
them, <a href="https://github.com/ggerganov/llama.cpp">llama.cpp is a C++-based open source library</a> that can be used
with the llama model amongst others. This is written using pure C/C++ and that enables LLM inference with minimal
dependency to any third party libraries, while providing a state-of-the-art performance on a wide variety of local and
cloud based hardware.

[llama.cpp](https://github.com/ggerganov/llama.cpp) is designed to run large language models efficiently on
devices with limited resources, such as laptops or desktop pcs with GPUs. The C++ based implementation makes llama.cpp
highly performant and portable, ideal for scenarios where computational power and memory are at a premium. At the core
of llama.cpp is the quantization. Llama.cpp uses custom quantization types that drastically reduce model sizes, which in
turn enables them to run on devices with limited memory. The challenging part here is to find the right quantization
scheme that would prevent precision loss without causing hallucinations in the output; hence, a lot of effort of tuning
the models goes into finding the right quantization parameters, and the code performs several custom matrix
multiplication operations to reduce precision loss on custom quantization schemes.

## [SYCLomatic](https://github.com/oneapi-src/SYCLomatic)

This article will now describe how to migrate the existing llama.cpp CUDA backend to
SYCL [using the SYCLomatic open source tool](https://github.com/oneapi-src/SYCLomatic). The migrated code can
then be run across an NVIDIA system, and another system with Intel Data Center Max GPUs - demonstrating truly portable,
single-source code.

Spoiler alert: We don’t really need to do this migration, Llama.cpp already has SYCL in upstream, thanks to the work of
Intel and Codeplay teams. The work started with a SYCLomatic conversion back in December 2023. The feedback from that
conversion led to a lot of improvements in SYCLomatic. The SYCL upstream support is now maintained by Codeplay and Intel
on both NVIDIA and Intel GPUs.

A key benefit of SYCLomatic is that it is a whole project migration tool. This means it does not focus on migrating
individual kernels or files, but instead provides a migration of the entire project that you can then use as a starting
point for your SYCL multi-target application.

## Preparation

For this exercise, I am going to use two distinct machines: my local desktop pc with an integrated NVIDIA GPU, and a
remote system with an Intel Data Center GPU Max series 1110.

I have installed the latest CUDA toolkit on both systems, as well as the Intel oneAPI base toolkit version 2024.2.

Remember to set your environment variables so that all the tools we are going to use are in your path (replace the first
with the path to your Intel oneAPI Base Toolkit location):

```shell
$ cd /path/to/intel/oneAPI/Toolkit
$ . setvars.sh  ~/intel/oneapi
$ dpct --versionIntel(R) DPC++ Compatibility Tool version 2024.2.0. Codebase:(55a3f034030e4bd0f36d7c37f24f8366079a639b). clang version 19.0.0
```

Before we can run our model, we have to download it. There are many models supported
by llama.cpp, and the list keeps growing!  In this example we are going to download the llama 2 –7B model, already
quantized in ‘gguf’ format to save some steps, so you can just wget from your prompt. In this case, I have opted for
creating a model's directory in my home folder.

```shell
$ mkdir $HOME/models/ ; cd $HOME/models/
$ wget https://huggingface.co/TheBloke/Llama-2-7B-Chat-GGUF/resolve/main/llama-2-7b-chat.Q4_K_M.gguf
```

On your NVIDIA system, you need to have a local copy of oneMKL for NVIDIA GPU’s, this is currently not available as a
download, so you must build it as follows:

```shell
$ git clone https://github.com/oneapi-src/oneMKL.git
$ cd oneMKL/; mkdir build; cd build
$ cmake ../ -GNinja -DCMAKE_CXX_COMPILER=icpx -DCMAKE_C_COMPILER=icx -DENABLE_MKLGPU_BACKEND=False -DENABLE_MKLCPU_BACKEND=False -DENABLE_CUFFT_BACKEND=True -DENABLE_CUBLAS_BACKEND=True -DENABLE_CUSOLVER_BACKEND=True -DENABLE_CURAND_BACKEND=True -DBUILD_FUNCTIONAL_TESTS=False -DCMAKE_INSTALL_PREFIX=${HOME}/soft/mkl/
$ ninja install
```

This builds the [oneMKL interfaces for NVIDIA](https://github.com/oneapi-src/oneMKL) and installs it in the soft/mkl
directory within your home folder.

## Steps for the conversion

The first step is to clone the llama.cpp repository, and configure cmake as usual for NVIDIA GPUs, as shown below.

```shell
$ git clone https://github.com/ggerganov/llama.cpp.git
$ cd llama.cpp
$ git checkout 3c04bf6da89eaf4c7d317e0518f0687dfcbf2de7
$ mkdir build &amp;&amp; cd build
$ cmake .. -DLLAMA_CUBLAS=ON -DLLAMA_CUDA=ON -
$ DCMAKE_CUDA_ARCHITECTURES=80
```

In this example we are using an earlier version of the llama.cpp repository closer to the one we used to do the initial
porting. The llama.cpp project moves really fast, and some of the latest versions of the project may not work straight
out of the box with SYCLomatic.

Now, here is the first change: pre-pend “intercept-build” to the make command you would normally run, as below:

```shell
$ intercept-build make
```

intercept-build is a really useful tool, distributed with SYCLomatic, that collects all compilation commands issued
while building a yaml file that SYCLomatic can then use to generate new build system files to compile your SYCL version
of the application.

Now we are going to use the information collected by intercept-build to generate a SYCL
build directory by running the dpct command itself:

```shell
$ cd ../.. &amp;&amp; mkdir dpct_out
```

```shell
$ dpct -p ./llama.cpp/build --enable-profiling --use-experimental-features=all --in-root=./llama.cpp --out-root=./dpct_out --migrate-build-script=CMake --process-all
```

When using the `-p` option, it will find the compilation database and use that to convert all project files. In this
case, we have also enabled profiling (which adds profiling information to the SYCL generated code), and we are opted in
to all experimental features (more on this later). We are also migrating the build script using CMake, and telling it to
process all files.

## Next Part

Now, we have successfully converted our llama.cpp project from CUDA to SYCL. In part two, we will build and run this on
NVIDIA and Intel GPUs.
