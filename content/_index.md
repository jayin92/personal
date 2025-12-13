+++
title = "Jie-Ying Lee 李杰穎"
+++

{{< figure class="avatar" src="/avatar.png" alt="avatar">}}

Ph.D. Student  
Department of Computer Science  
National Yang Ming Chiao Tung University, Taiwan

Software Engineer, Pixel Camera Team, Google  

Email: [jayinnn.cs14@nycu.edu.tw](mailto:jayinnn.cs14@nycu.edu.tw)

[CV](https://raw.githubusercontent.com/jayin92/CV/main/cv.pdf) / [Google Scholar](https://scholar.google.com/citations?view_op=list_works&hl=zh-TW&user=mKB6voEAAAAJ) / [LinkedIn](https://www.linkedin.com/in/jayinnn/) / [GitHub](http://github.com/jayin92) / [Personal Blog](https://blog.jayinnn.dev/)

## About Me

Hi! I'm Jie-Ying (Jay) Lee. I am a Ph.D. student in Computer Science at National Yang Ming Chiao Tung University, advised by [Prof. Yu-Lun Liu](https://yulunalexliu.github.io/). I am also a Software Engineer on Google's Pixel Camera Team, where I develop on-device algorithms for camera.

I received my B.S. in Computer Science from National Yang Ming Chiao Tung University. During my undergraduate studies, I was an exchange student at ETH Zurich.

In Summer 2024, I interned with Google's Pixel Camera Team, where I integrated the Segment Anything Model (SAM) for mobile devices, hosted by [Yu-Lin Chang](https://scholar.google.com/citations?user=0O9rukQAAAAJ&hl=en) and [Chung-Kai Hsieh](https://www.linkedin.com/in/chungkaihsieh). My industry experience also includes positions as an R&D Intern at Microsoft and a Backend Engineer Intern at Appier.

I am actively seeking research collaborations.

Outside of work and research, I enjoy badminton, dance, and [photography](https://www.instagram.com/photograbear_/).

## Research Interest

-   **3D Reconstruction**
    -   Neural Radiance Fields (NeRFs)
    -   3D Gaussian Splatting
    -   Large-scale Scene Reconstruction
    -   Satellite Imagery
-   **3D Generation**
    -   Urban Scene Generation
    -   Object Generation and Manipulation
-   **Image Segmentation**
    -   Segment Anything Model

## News

-   Sep. 2025: Joined Google as a Software Engineer on the Pixel Camera Team!
-   Sep. 2025: Started my Ph.D. journey at NYCU with [Prof. Yu-Lun Liu](https://yulunalexliu.github.io/)!
-   Jul. 2025: One paper accepted to CoRL 2025: "See, Point, Fly"!
-   Jun. 2025: One paper accepted to ICCV 2025: "LightsOut"!
-   Mar. 2025: Two papers accepted to CVPR 2025: "AuraFusion360" and "SpectroMotion"!
-   Sep. 2024: Began exchange studies in the Department of Computer Science (D-INFK) at ETH Zurich
-   Aug. 2024: Co-authored "BoostMVSNeRFs" paper accepted to the ECCV 2024 Wild3D Workshop as a poster presentation
-   Jul. 2024: My work, BEVGaussian, won the [陽明交大資工系專題競賽佳作 (3rd place of the NYCU CS Undergraduate Research Competition)](https://www.cs.nycu.edu.tw/storage/materials/xeXTWKdsG4IkteKZGx3lxO6WdeZv4Qi0mgaomFJr.pdf)!
-   Jun. 2024: My work, Unbounded Scene Generation, are awarded the [國科會大專學生研究計畫 (NSTC Research Grant for University Students)](https://www.nstc.gov.tw/folksonomy/list/2af9ad9a-1f47-450d-b5a1-2cb43de8290c?l=ch)!
-   May 2024: Co-authored "BoostMVSNeRFs" paper accepted to SIGGRAPH 2024!

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
>}}
Creating large-scale, photorealistic 3D urban scenes traditionally requires expensive 3D scanning and manual annotation. We present Skyfall-GS, a novel framework that synthesizes city-block scale environments by combining satellite imagery with diffusion models, enabling real-time exploration without costly 3D annotations.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/lightsout-teaser-input.jpg"
    video="/images/publications/lightsout-teaser-output.jpg"
    title="LightsOut: Diffusion-based Outpainting for Enhanced Lens Flare Removal"
    url="https://ray-1026.github.io/lightsout/"
    authors="srtsai,wcchang,jylee,chsu,ylliu"
    venue="International Conference on Computer Vision"
    venue-short="ICCV"
    year="2025"
>}}
LightsOut, a diffusion-based outpainting framework tailored to enhance SIFR by reconstructing off-frame light sources by leveraging a multitask regression module and LoRA fine-tuned diffusion model to ensure realistic and physically consistent outpainting results.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/spf-teaser.jpg"
    video="/videos/publications/spf-teaser.mp4"
    title="See, Point, Fly: A Learning-Free VLM Framework for Universal Unmanned Aerial Navigation"
    url="https://spf-web.pages.dev/"
    authors="cyhu,yslin,yunalee,chsu,jylee,srtsai,cylin,kwchen,twke,ylliu"
    equal="cyhu,yslin"
    note="(*Equal Contribution)"
    venue="The Conference on Robot Learning"
    venue-short="CoRL"
    year="2025"
>}}
This work presents See, Point, Fly (SPF), a training-free aerial vision-and-language navigation (AVLN) framework built atop vision-language models (VLMs), to consider action prediction for AVLN as a 2D spatial grounding task.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/aurafusion360-teaser.jpg"
    video="/videos/publications/aurafusion360-teaser.mp4"
    title="AuraFusion360: Augmented Unseen Region Alignment for Reference-based 360° Unbounded Scene Inpainting"
    url="https://kkennethwu.github.io/aurafusion360/"
    authors="chwu,yjchen,yhchen,jylee,bhke,cwtm,ychuang,cylin,mhchen,yylin,ylliu"
    equal="chwu,yjchen"
    note="(*Equal Contribution)"
    venue="IEEE/CVF Conference on Computer Vision and Pattern Recognition"
    venue-short="CVPR"
    year="2025"
>}}
The approach introduces (1) depth-aware unseen mask generation for accurate occlusion identification, (2) Adaptive Guided Depth Diffusion, a zero-shot method for accurate initial point placement without requiring additional training, and (3) SDEdit-based detail enhancement for multi-view coherence.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/spectromotion-teaser.jpg"
    video="/videos/publications/spectromotion-teaser.mp4"
    title="SpectroMotion: Dynamic 3D Reconstruction of Specular Scenes"
    url="https://cdfan0627.github.io/spectromotion/"
    authors="cdfan,cwchang,yrliu,jylee,jlhuang,yctseng,ylliu"
    venue="IEEE/CVF Conference on Computer Vision and Pattern Recognition"
    venue-short="CVPR"
    year="2025"
>}}
SpectroMotion is presented, a novel approach that combines 3D Gaussian Splatting with physically-based rendering (PBR) and deformation fields to reconstruct dynamic specular scenes and is the only existing 3DGS method capable of synthesizing photorealistic real-world dynamic specular scenes.
{{< /publication-with-teaser >}}

{{< publication-with-teaser
    image="/images/publications/boostmvsnerfs-teaser.jpg"
    video="/videos/publications/boostmvsnerfs-teaser.mp4"
    title="BoostMVSNeRFs: Boosting MVS-based NeRFs to Generalizable View Synthesis in Large-scale Scenes"
    url="https://su-terry.github.io/BoostMVSNeRFs/"
    authors="chsu,cyhu,srtsai,jylee,cylin,ylliu"
    equal="chsu,cyhu,srtsai,jylee"
    note="(*Equal Contribution)"
    venue="ACM Special Interest Group on Computer Graphics and Interactive Techniques"
    venue-short="SIGGRAPH"
    year="2024"
>}}
This paper presents a novel approach called BoostMVSNeRFs to enhance the rendering quality of MVS-based NeRFs in large-scale scenes, and identifies limitations in MVS-based NeRF methods, such as restricted viewport coverage and artifacts due to limited input views.
{{< /publication-with-teaser >}}