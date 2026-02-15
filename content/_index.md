+++
title = "Jie-Ying Lee 李杰穎"
+++

<div class="header-section">
<div class="header-text">

# Jie-Ying Lee 李杰穎

Ph.D. Student @ NYCU CS  
Software Engineer @ Google Pixel Camera

Email: [jayinnn.cs14@nycu.edu.tw](mailto:jayinnn.cs14@nycu.edu.tw)

[CV](https://mozilla.github.io/pdf.js/web/viewer.html?file=https://raw.githubusercontent.com/jayin92/CV/main/cv.pdf) / [Scholar](https://scholar.google.com/citations?view_op=list_works&hl=zh-TW&user=mKB6voEAAAAJ) / [LinkedIn](https://www.linkedin.com/in/jayinnn/) / [GitHub](http://github.com/jayin92) / [Personal Blog](https://blog.jayinnn.dev/)

</div>
{{< figure class="avatar" src="/avatar.png" alt="avatar">}}
</div>

## About Me

<div class="intro-box">

I'm a Ph.D. student in [Computer Science](https://www.cs.nycu.edu.tw/?locale=en) at National Yang Ming Chiao Tung University, advised by [Prof. Yu-Lun Liu](https://yulunalexliu.github.io/), and a Software Engineer on Google's Pixel Camera Team. I work on **3D scene synthesis**, **generative models for vision**, and **embodied AI**, particularly focusing on **Neural Radiance Fields**, **3D Gaussian Splatting**, **vision-language navigation**, and **on-device perception**.

I received my B.S. in Computer Science from National Yang Ming Chiao Tung University, with an exchange semester at ETH Zurich. My industry experience includes internships at Google (Pixel Camera Team), Microsoft, and Appier.

**I am actively seeking research collaborations.** If you are interested in working with me, don't hesitate to reach out.

<div class="affiliation-logos">
  <a href="https://about.google/" target="_blank" rel="noopener noreferrer">
    <img src="/google.png" alt="Google" />
  </a>
  <a href="https://www.cs.nycu.edu.tw/?locale=en" target="_blank" rel="noopener noreferrer">
    <img src="/nycu.png" alt="NYCU" />
  </a>
  <a href="https://ethz.ch/" target="_blank" rel="noopener noreferrer">
    <img src="/eth.png" alt="ETH Zurich" />
  </a>
</div>
</div>

## News

- **Sep. 2025:** Joined [Google](https://about.google/) as a Software Engineer on the Pixel Camera Team and started my Ph.D. at NYCU with [Prof. Yu-Lun Liu](https://yulunalexliu.github.io/)
- **Jul. 2025:** [See, Point, Fly](https://spf-web.pages.dev/) accepted to **CoRL 2025**
- **Jun. 2025:** [LightsOut](https://ray-1026.github.io/lightsout/) accepted to **ICCV 2025**
- **Mar. 2025:** Two papers accepted to **CVPR 2025**: [AuraFusion360](https://kkennethwu.github.io/aurafusion360/) and [SpectroMotion](https://cdfan0627.github.io/spectromotion/)
- **Sep. 2024:** Exchange semester at ETH Zurich, D-INFK ([blog post](https://blog.jayinnn.dev/posts/eth/))
- **Jul. 2024:** BEVGaussian won [NYCU CS Undergraduate Research Competition (3rd place)](https://www.cs.nycu.edu.tw/storage/materials/xeXTWKdsG4IkteKZGx3lxO6WdeZv4Qi0mgaomFJr.pdf)
- **Jun. 2024:** Awarded [NSTC Research Grant for University Students](https://www.nstc.gov.tw/folksonomy/list/2af9ad9a-1f47-450d-b5a1-2cb43de8290c?l=ch)
- **May 2024:** [BoostMVSNeRFs](https://su-terry.github.io/BoostMVSNeRFs/) accepted to **SIGGRAPH 2024**

## Publications

{{< publication-with-teaser
    image="/images/publications/skyfallgs-teaser.png"
    video="/videos/publications/skyfallgs-teaser.mp4"
    title="Skyfall-GS: Synthesizing Immersive 3D Urban Scenes from Satellite Imagery"
    url="https://skyfall-gs.jayinnn.dev/"
    authors="jylee,yrliu,srtsai,wcchang,chwu,jwchan,zjzhao,hubertlin,ylliu"
    venue="arXiv"
    venue-short=""
    year="2025"
    project="https://skyfall-gs.jayinnn.dev/"
    arxiv="https://arxiv.org/abs/2510.15869"
    code="https://github.com/jayin92/skyfall-gs"
    pdf="https://arxiv.org/pdf/2510.15869"
    video-link="https://youtu.be/zj2-aGSe6ao"
>}}
We present Skyfall-GS, a framework that synthesizes photorealistic, city-block scale 3D urban scenes from satellite imagery using diffusion models, eliminating the need for expensive 3D scanning and manual annotation while enabling real-time exploration.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/lightsout-teaser-input.jpg"
    video="/images/publications/lightsout-teaser-output.jpg"
    title="LightsOut: Diffusion-based Outpainting for Enhanced Lens Flare Removal"
    url="https://ray-1026.github.io/lightsout/"
    authors="srtsai,wcchang,jylee,chsu,ylliu"
    venue="ICCV"
    year="2025"
    project="https://ray-1026.github.io/lightsout/"
    arxiv="https://arxiv.org/abs/2510.15868"
    code="https://github.com/Ray-1026/LightsOut-official"
    video-link="https://youtu.be/VNzJ9Z_dJNI"
    demo="https://huggingface.co/spaces/RayTsai-030/LightsOut-demo"
>}}
We present LightsOut, a diffusion-based outpainting framework that enhances lens flare removal by reconstructing off-frame light sources. Our approach combines a multitask regression module with LoRA fine-tuned diffusion models to produce realistic and physically consistent results.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/spf-teaser.jpg"
    video="/videos/publications/spf-teaser.mp4"
    title="See, Point, Fly: A Learning-Free VLM Framework for Universal Unmanned Aerial Navigation"
    url="https://spf-web.pages.dev/"
    authors="cyhu,yslin,yunalee,chsu,jylee,srtsai,cylin,kwchen,twke,ylliu"
    equal="cyhu,yslin"
    note="(*Equal Contribution)"
    venue="CoRL"
    year="2025"
    project="https://spf-web.pages.dev/"
    arxiv="https://arxiv.org/abs/2509.22653"
    code="https://github.com/Hu-chih-yao/see-point-fly"
    video-link="https://youtu.be/EQPBkNhAuyU"
>}}
We present See, Point, Fly (SPF), a training-free framework for aerial vision-and-language navigation. By leveraging vision-language models and reformulating navigation as a 2D spatial grounding task, SPF enables universal unmanned aerial navigation without task-specific training.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/aurafusion360-teaser.jpg"
    video="/videos/publications/aurafusion360-teaser.mp4"
    title="AuraFusion360: Augmented Unseen Region Alignment for Reference-based 360° Unbounded Scene Inpainting"
    url="https://kkennethwu.github.io/aurafusion360/"
    authors="chwu,yjchen,yhchen,jylee,bhke,cwtm,ychuang,cylin,mhchen,yylin,ylliu"
    equal="chwu,yjchen"
    note="(*Equal Contribution)"
    venue="CVPR"
    year="2025"
    project="https://kkennethwu.github.io/aurafusion360/"
    arxiv="https://arxiv.org/abs/2502.05176"
    code="https://github.com/kkennethwu/AuraFusion360_official.git"
    video-link="https://www.youtube.com/watch?v=V1_EMXtYhTE"
>}}
We introduce AuraFusion360, a reference-based 360° scene inpainting method with three key innovations: depth-aware occlusion identification, Adaptive Guided Depth Diffusion for zero-shot point placement, and SDEdit-based enhancement for multi-view coherence.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/spectromotion-teaser.jpg"
    video="/videos/publications/spectromotion-teaser.mp4"
    title="SpectroMotion: Dynamic 3D Reconstruction of Specular Scenes"
    url="https://cdfan0627.github.io/spectromotion/"
    authors="cdfan,cwchang,yrliu,jylee,jlhuang,yctseng,ylliu"
    venue="CVPR"
    year="2025"
    project="https://cdfan0627.github.io/spectromotion/"
    arxiv="https://arxiv.org/abs/2410.17249"
    code="https://github.com/cdfan0627/SpectroMotion"
    video-link="https://www.youtube.com/watch?v=yqKLUDIdN9g"
>}}
We present SpectroMotion, the first 3D Gaussian Splatting method capable of reconstructing photorealistic dynamic specular scenes. By combining 3DGS with physically-based rendering and deformation fields, we achieve high-quality synthesis of challenging real-world dynamic reflective surfaces.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/boostmvsnerfs-teaser.jpg"
    video="/videos/publications/boostmvsnerfs-teaser.mp4"
    title="BoostMVSNeRFs: Boosting MVS-based NeRFs to Generalizable View Synthesis in Large-scale Scenes"
    url="https://su-terry.github.io/BoostMVSNeRFs/"
    authors="chsu,cyhu,srtsai,jylee,cylin,ylliu"
    equal="chsu,cyhu,srtsai,jylee"
    note="(*Equal Contribution)"
    venue="SIGGRAPH"
    year="2024"
    project="https://su-terry.github.io/BoostMVSNeRFs/"
    arxiv="https://arxiv.org/abs/2407.15848"
    code="https://github.com/Su-Terry/BoostMVSNeRFs"
    video-link="https://www.youtube.com/watch?v=tX4EkFgm0ng"
>}}
We present BoostMVSNeRFs, a method that enhances rendering quality for MVS-based NeRFs in large-scale scenes. Our approach addresses key limitations including restricted viewport coverage and artifacts from limited input views, enabling generalizable view synthesis in complex environments.
{{< /publication-with-teaser >}}

## Service

- **Teaching Assistant:** [Image and Video Generation](https://github.com/jayin92/Lab4-FlowMatching), NYCU (2025 Fall)

## Misc.

Beyond research, I'm passionate about staying active through badminton and hip-hop dance. I also enjoy capturing moments through [photography](https://www.instagram.com/photograbear_/).

Music-wise, I'm into Taiwanese indie and hip-hop, frequently listening to artists like [Gummy B](https://www.youtube.com/watch?v=QvrIk0Ff_DI), [草東沒有派對 (No Party For Cao Dong)](https://youtu.be/j2311FZWoFQ), and [國蛋 GorDoN](https://youtu.be/BZJLX-jDa9k).