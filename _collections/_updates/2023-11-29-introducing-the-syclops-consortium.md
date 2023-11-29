---
title: "Introducing the SYCLOPS Consortium"
date: 2023-11-29
layout: update
tags:
  - consortium
  - announcement
---

Announced in May this year, the SYCLOPS Project brings together 8 leading organizations from across Europe,
collaborating to democratize AI acceleration and break the existing monopoly on the acceleration market. Our combined
vision is using open standards to enable a healthy, competition-driven ecosystem with widespread adoption of both
RISC-V&reg;, an open standard Instruction Set Architecture (ISA) and SYCL&trade;, the open specification parallel to 
ISO C++ and maintained by the Khronos Group.

Each collaborating partner brings their own expertise and unique insights to the project, and in this blog each member
of the SYCLOPS project will introduce their organization, and the work they will be contributing to the project.

## Accelom

ACCELOM is a French SME specializing in the development of bespoke AI-based multi-omics pipelines for performing
integrated analysis of genomic data from multiple molecular levels to provide a holistic picture of how genomics drives
the progression of a disease in a way that would not be possible using traditional, non-integrated analysis methods. One
key challenge faced by ACCELOM is that its pipelines are designed for a scale-up, single-server, CPU-based deployment as
it is intended for its customers and collaborators who cannot move their data to the public cloud due to privacy
reasons, and who cannot afford to operate large datacenters due to economic constraints. Through project SYCLOPS,
ACCELOM will develop SYCL-GAL and use it to develop a new version of the multiomics pipeline. We will demonstrate the
effectiveness of the new pipeline via thorough, extensive evaluation using publicly available datasets from European
data sources

## CERN

The European Organization for Nuclear Research (CERN) was established in 1954 near Geneva, Switzerland. At CERN, high
energy physics collaborations conduct experiments with the help of particle accelerators. CERN currently operates the
world's most powerful particle accelerator, the Large Hadron Collider (LHC). The ROOT project at CERN provides software
libraries and tools for the processing of the ever growing amount of data collected from the LHC. In order to sustain
this data deluge the software needs to be ported to computing accelerators. ROOT provides use cases for the SYCLOPS
project, porting them to SYCL and measuring their performance.

## Codasip

Codasip is a processor technology company enabling SoC developers to differentiate their products for competitive
advantage. Codasip’s offering can be summarized as Custom Compute. The solution is based on the Codasip Studio design
automation tools. The tools can be used to customize and optimize the company’s range of RISC-V processor cores by
adding domain-specific or application-specific extensions, or to design a processor from scratch. Codasip’s role in the
project is to develop domain-specific accelerators based on the RISC-V Vector extension (RVV). This will be achieved
using Codasip Studio and the CodAL processor description language.

## Codeplay&reg;

Codeplay Software, founded in 2002 in Edinburgh, Scotland is a leader in acceleration technologies used in the AI and
HPC industry. In 2022, they were acquired by Intel to expand the oneAPI ecosystem based on SYCL, a cross-platform
software abstraction for heterogeneous processors. As active members of the Khronos Group and leaders in the open
standards ecosystem, Codeplay will use their expertise to lead on the communication activities of SYCLOPS and
participate in conferences and events to showcase the ongoing work of the project.

## Eurecom

EURECOM is a leading French engineering school and a founding member of the SophiaTech Campus in Sophia Antipolis, the
largest Computer Science and Technology campus in Alpes-Maritimes region of France. The Data Science department of
EURECOM brings its world-renowned expertise and reputation in the field of statistical machine learning, multimodal data
processing and knowledge engineering, which empower artificial intelligence systems. The Data Science department is a
founding member of the “Region SUD” Artificial Intelligence cluster, which was recently recognized by the French
government as a cluster of excellence (3IA). In SYCLOPS, EURECOM acts as both the technical and administrative
coordinator. In addition, EURECOM will also collaborate with various SYCLOPS partners in developing optimized algorithms
for scaling the performance of various cross-architecture acceleration libraries.

## Heidelberg University

Heidelberg University – also known as Ruperto Carola – was established in 1386 and is Germany’s oldest university. It is
also one of the strongest research universities in all of Europe. The successes of Heidelberg University in the
Excellence Competitions and in international rankings are evidence of its leading role on the academic scene.
Heidelberg University is a comprehensive university with a broad spectrum of subjects and focus on research-based
teaching and well-structured training for doctoral students.
Currently, approx. 1.400 Postdocs and 8.900 PhD Students are enrolled and 36 ERC grants are running at Heidelberg
University.

The Engineering Mathematics and Computing Lab (EMCL) is a research group at the Interdisciplinary Center for Scientific
Computing (IWR) at Heidelberg University. EMCL is particularly noted for its openness to multidisciplinary research in
the field of engineering and scientific computing. EMCL currently pursues five major research themes: Computational
Mathematics, Uncertainty Quantification, Hardware Aware Numerics and High Performance Computing and IT Security.
One of EMCL’s developments, AdaptiveCpp (formerly known as hipSYCL), is a flexible compiler and runtime system that
implements the SYCL standard on multiple device architectures. In the course of the project, EMCL will expand
AdaptiveCpp to support for RISC-V devices. This requires generalizing and extending the existing compiler and runtime
infrastructure. Additionally, EMCL will work on techniques to increase the utilization of devices in the system by
leveraging automatic work distribution. As a provider of a developer tool at the platform layer of the SYCLOPS stack,
EMCL will work closely with the project partners to ensure that AdaptiveCpp is a reliable platform for the project.

## Hiro Microdatacenters

HIRO-MicroDataCenters is a Dutch micro SME specializing in Edge as a Service, specifically MicroDataCenter solutions (
hardware and software) for Big Data processing and AI in data dense Edge environments in various Industries &
applications. In SYCLOPS, HIRO will be developing high-performance, energy-efficient, heterogeneous edge micro
datacenters (EMDC) that will serve as both development testbed to validate the SYCLOPS stack and as a reference platform
for the design of future PCIe 5.0 compatible EMDCs in comExpress form factor.

## INESC-ID

INESC-ID (Instituto de Engenharia de Sistemas e Computadores: Investigação e Desenvolvimento em Lisboa) is a private,
not-for-profit Portuguese R&D and Innovation organization that promotes cooperation between academia and industry and
has been establishing excellence in R&D activities since 1999. INESC-ID now stands, and is viewed, as one of the most
dynamic research institutes in Portugal in the broad areas of computer science and electrical engineering. The research
relevance of the INESC-ID High-Performance Computing Architectures and Systems (HPCAS) group on performance modeling,
application optimization, and parallelization on state-of-the-art computing platforms synergies among the objectives of
the SYCLOPS project. In this regard, INESC-ID’s role in the project spans multiple layers of the SYCLOPS stack, which
include the exploration of cross-architecture insightful performance models, profiling of the three SYCLOPS use cases,
as well as enabling acceleration strategies within the SYCL-GAL library with SYCL-based version of pairHMM used for
variant calling.
