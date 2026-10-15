---
layout: page
title: Research
permalink: /research
body_class: page-research
scripts:
  - /assets/js/applied-research.js
---

I am an AI Researcher at [Descript](https://www.descript.com/research), working on generative models that power audio and video editing in production. My current focus spans audio codecs, diffusion models and audio-text forced alignment. A full list of papers is on [Google Scholar]({{ site.scholar_url }}).

## Applied Research

<div class="applied">
  <div class="applied__grid">
    <article class="applied__card">
      <h3 class="applied__title">FuseAlign</h3>
      <p class="applied__blurb">A transformer forced aligner for millisecond word boundaries on long, diverse speech and real ASR transcripts.</p>
      <p class="applied__links"><a href="https://descriptinc.github.io/fusealign/">[project page]</a> <a href="https://arxiv.org/abs/2609.33650">[preprint]</a></p>
      <figure class="applied__visual alignfig">
        <svg viewBox="0 0 720 156" width="100%" role="img" aria-label="Transcript words appear, then the waveform, then alignment boxes that meet edge to edge">
          <defs>
            <mask id="fusealignWaveMask" maskUnits="userSpaceOnUse" x="108" y="36" width="552" height="84">
              <rect class="alignfig__wipe" x="108" y="36" width="552" height="84" fill="#fff"/>
            </mask>
            <clipPath id="fusealignPillClip">
              <rect x="108" y="116" width="552" height="28" rx="8"/>
            </clipPath>
          </defs>
          <text class="alignfig__label alignfig__label--tx" x="0" y="22" font-size="13">transcript</text>
          <text class="alignfig__label alignfig__label--audio" x="0" y="78" font-size="13">audio</text>
          <text class="alignfig__label alignfig__label--align" x="0" y="130" font-size="13" dominant-baseline="middle">alignment</text>
          <text class="alignfig__word alignfig__word--1" x="108" y="22" font-size="16" font-weight="700" text-anchor="start">every</text>
          <text class="alignfig__word alignfig__word--2" x="158" y="22" font-size="16" font-weight="700" text-anchor="start">word</text>
          <text class="alignfig__word alignfig__word--3" x="206" y="22" font-size="16" font-weight="700" text-anchor="start">counts</text>
          <polyline class="alignfig__wave" mask="url(#fusealignWaveMask)" points="108,78 124,78 132,62 140,92 148,58 156,96 164,64 172,88 180,70 188,78 210,78 218,66 226,90 234,60 242,86 250,72 260,78 278,78 290,54 298,100 306,48 314,102 322,56 330,94 338,62 346,88 354,70 362,78 390,78 404,68 412,88 420,64 428,78 436,78 452,78 464,60 472,96 480,52 488,98 496,58 504,90 512,66 520,84 528,72 536,78 560,78 572,64 580,92 588,58 596,94 604,66 612,86 620,74 628,78 648,78 660,78" fill="none"/>
          <line class="alignfig__bound alignfig__bound--1" x1="108" y1="46" x2="108" y2="116"/>
          <line class="alignfig__bound alignfig__bound--2" x1="260" y1="46" x2="260" y2="116"/>
          <line class="alignfig__bound alignfig__bound--3" x1="436" y1="46" x2="436" y2="116"/>
          <line class="alignfig__bound alignfig__bound--4" x1="660" y1="46" x2="660" y2="116"/>
          <g clip-path="url(#fusealignPillClip)">
            <rect class="alignfig__pill-box alignfig__pill-box--1" x="108" y="116" width="152" height="28"/>
            <rect class="alignfig__pill-box alignfig__pill-box--2" x="260" y="116" width="176" height="28"/>
            <rect class="alignfig__pill-box alignfig__pill-box--3" x="436" y="116" width="224" height="28"/>
          </g>
          <text class="alignfig__pill-label alignfig__pill-label--1" x="184" y="130" font-size="14" font-weight="600" text-anchor="middle" dominant-baseline="middle">every</text>
          <text class="alignfig__pill-label alignfig__pill-label--2" x="348" y="130" font-size="14" font-weight="600" text-anchor="middle" dominant-baseline="middle">word</text>
          <text class="alignfig__pill-label alignfig__pill-label--3" x="548" y="130" font-size="14" font-weight="600" text-anchor="middle" dominant-baseline="middle">counts</text>
        </svg>
      </figure>
    </article>
    <article class="applied__card">
      <h3 class="applied__title">Audio Regenerate</h3>
      <p class="applied__blurb">Seamless word-level audio editing via latent inpainting.</p>
      <p class="applied__links"><a href="https://descriptinc.github.io/uvm-v2/">[project page]</a></p>
      <figure class="applied__visual pipeline pipeline--audio" id="audioPipeline">
        <div class="pipeline__stage">
          <div class="pipeline__icon">
            <svg viewBox="0 0 48 24" width="100%" height="44" aria-hidden="true"><polyline class="pl-wave" points="0,12 2,9 3,16 4,8 5,15 6,10 7,14 8,7 9,17 10,11 12,13 13,8 14,16 15,10 16,15 17,9 18,14 19,11 20,16 21,8 22,15 24,11 25,14 26,8 27,17 28,10 29,15 30,11 31,14 32,8 33,16 34,10 35,15 36,9 37,14 38,11 39,16 40,8 41,15 42,11 44,13 45,9 46,15 48,12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <span class="pipeline__cap">Audio in</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage">
          <div class="pipeline__icon pipeline__grid pipeline__grid--bars" id="audioLatentGrid"></div>
          <span class="pipeline__cap">Latent frames</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage pipeline__stage--model">
          <div class="pipeline__textin">
            <span class="pipeline__textin-tag">Text in</span>
            <span class="pipeline__textin-words">"… new words …"</span>
          </div>
          <div class="pipeline__down" aria-hidden="true">↓</div>
          <div class="pipeline__model"><span>Generator</span></div>
          <span class="pipeline__cap">Flow-matching transformer</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage">
          <div class="pipeline__icon pipeline__grid pipeline__grid--bars pipeline__grid--gen" id="audioGenGrid"></div>
          <span class="pipeline__cap">Inpainted masked span</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage">
          <div class="pipeline__icon">
            <svg viewBox="0 0 48 24" width="100%" height="44" aria-hidden="true">
              <polyline class="pl-wave pl-wave--out" points="0,12 2,9 3,16 4,8 5,15 6,10 7,14 8,7 9,17 10,11 12,13 13,8 14,16 15,10 16,15 17,11 18,12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
              <polyline class="pl-wave pl-wave--out" points="30,12 31,9 32,16 33,8 34,15 35,10 36,14 37,8 38,16 39,11 40,14 41,9 42,15 44,11 45,14 46,9 48,12" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
              <g class="pl-edit">
                <path d="M20 7 L21.6 9.2 L20 11.4 L18.4 9.2 Z"/>
                <path d="M22.8 10 L24.4 12.2 L22.8 14.4 L21.2 12.2 Z"/>
                <path d="M25.4 6.6 L27 8.8 L25.4 11 L23.8 8.8 Z"/>
                <path d="M28 9.6 L29.6 11.8 L28 14 L26.4 11.8 Z"/>
              </g>
            </svg>
          </div>
          <span class="pipeline__cap">Audio out</span>
        </div>
      </figure>
    </article>
    <article class="applied__card">
      <h3 class="applied__title">Video Regenerate and Translation</h3>
      <p class="applied__blurb">Audio-driven lip-sync for editing and translation.</p>
      <p class="applied__links"><a href="https://descriptinc.github.io/video-regenerate/">[project page]</a></p>
      <figure class="applied__visual pipeline pipeline--video" id="videoPipeline">
        <div class="pipeline__stage">
          <div class="pipeline__icon">
            <svg viewBox="0 0 48 28" width="100%" height="44" aria-hidden="true">
              <rect x="1" y="3" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
              <line x1="12" y1="3" x2="12" y2="25" stroke="currentColor" stroke-width="1" opacity=".5"/>
              <line x1="24" y1="3" x2="24" y2="25" stroke="currentColor" stroke-width="1" opacity=".5"/>
              <line x1="36" y1="3" x2="36" y2="25" stroke="currentColor" stroke-width="1" opacity=".5"/>
              <circle cx="4.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="8.5" cy="9.5" r="1.3" fill="currentColor"/>
              <circle cx="16.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="20.5" cy="9.5" r="1.3" fill="currentColor"/>
              <circle cx="28.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="32.5" cy="9.5" r="1.3" fill="currentColor"/>
              <circle cx="40.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="44.5" cy="9.5" r="1.3" fill="currentColor"/>
              <path d="M4 18 q2.5 2.4 5 0" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M16 18 q2.5 2.4 5 0" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M28 18 q2.5 2.4 5 0" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M40 18 q2.5 2.4 5 0" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
          </div>
          <span class="pipeline__cap">Video in</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage">
          <div class="pipeline__icon pipeline__grid" id="videoLatentGrid"></div>
          <span class="pipeline__cap">Latent frames</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage pipeline__stage--model">
          <div class="pipeline__sideins">
            <div class="pipeline__textin">
              <span class="pipeline__textin-tag">Audio in</span>
              <span class="pipeline__textin-words">
                <svg viewBox="0 0 64 12" width="64" height="12" aria-hidden="true"><polyline points="0,6 4,3 8,9 12,2 16,10 20,4 24,8 28,3 32,9 36,5 40,8 44,2 48,10 52,4 56,8 60,5 64,6" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>
              </span>
            </div>
            <div class="pipeline__textin">
              <span class="pipeline__textin-tag">References</span>
              <span class="pipeline__textin-words">a few frames of you</span>
            </div>
          </div>
          <div class="pipeline__down" aria-hidden="true">↓</div>
          <div class="pipeline__model"><span>Generator</span></div>
          <span class="pipeline__cap">Flow-matching transformer</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage">
          <div class="pipeline__icon pipeline__grid pipeline__grid--gen" id="videoGenGrid"></div>
          <span class="pipeline__cap">Lower-face latents</span>
        </div>
        <div class="pipeline__arrow">→</div>
        <div class="pipeline__stage">
          <div class="pipeline__icon">
            <svg viewBox="0 0 48 28" width="100%" height="44" aria-hidden="true">
              <rect x="1" y="3" width="46" height="22" rx="3" fill="none" stroke="currentColor" stroke-width="1.2"/>
              <line x1="12" y1="3" x2="12" y2="25" stroke="currentColor" stroke-width="1" opacity=".5"/>
              <line x1="24" y1="3" x2="24" y2="25" stroke="currentColor" stroke-width="1" opacity=".5"/>
              <line x1="36" y1="3" x2="36" y2="25" stroke="currentColor" stroke-width="1" opacity=".5"/>
              <circle cx="4.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="8.5" cy="9.5" r="1.3" fill="currentColor"/>
              <circle cx="16.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="20.5" cy="9.5" r="1.3" fill="currentColor"/>
              <circle cx="28.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="32.5" cy="9.5" r="1.3" fill="currentColor"/>
              <circle cx="40.5" cy="9.5" r="1.3" fill="currentColor"/><circle cx="44.5" cy="9.5" r="1.3" fill="currentColor"/>
              <g class="pl-edit">
                <path d="M4 18 q2.5 2.4 5 0"/>
                <path d="M16 18 q2.5 2.4 5 0"/>
                <path d="M28 18 q2.5 2.4 5 0"/>
                <path d="M40 18 q2.5 2.4 5 0"/>
              </g>
            </svg>
          </div>
          <span class="pipeline__cap">Video out</span>
        </div>
      </figure>
    </article>
    <article class="applied__card">
      <h3 class="applied__title">Anchored Tree Sampling</h3>
      <p class="applied__blurb">A training-free inference scheduler that replaces autoregressive rollout with sparse-to-dense tree sampling, enabling drift-free long-horizon video-to-video generation.</p>
      <p class="applied__links"><a href="https://descriptinc.github.io/ATS/">[project page]</a> <a href="https://arxiv.org/abs/2605.20476">[preprint]</a> <a href="https://github.com/descriptinc/ATS">[code]</a></p>
      <div class="applied__figs">
        <figure class="applied__fig">
          <img src="{{ site.url }}/assets/img/ats/tree_panel_left.jpg" alt="ATS tree structure: root, guidance, and leaf calls">
          <figcaption>Tree structure</figcaption>
        </figure>
        <figure class="applied__fig">
          <img src="{{ site.url }}/assets/img/ats/tree_panel_right.jpg" alt="ATS sparse-to-dense filling over the horizon">
          <figcaption>Sparse-to-dense filling</figcaption>
        </figure>
      </div>
    </article>
  </div>
</div>

## Publications & Submissions

* **FuseAlign: Forced Alignment in the Wild**  
  [[preprint]](https://arxiv.org/abs/2609.33650) [[project page]](https://descriptinc.github.io/fusealign/)

* **Goodbye Drift: Anchored Tree Sampling for Long-Horizon Video-to-Video Generation**  
  [[preprint]](https://arxiv.org/abs/2605.20476) [[project page]](https://descriptinc.github.io/ATS/) [[code]](https://github.com/descriptinc/ATS)

* **PoDAR: Power-Disentangled Audio Representation for Generative Modeling**  
  [[preprint]](https://arxiv.org/abs/2605.10084)

* **Switching Subspace Model for Neural Population Analysis**  
  [[preprint]](/assets/pdf/switching_subspace_model_neurips.pdf)

* **Assessing Comprehensibility of Children's Read Speech**  
  [[preprint]](https://arxiv.org/abs/2405.19426) [[presentation]](/assets/pdf/ddp2_ppt.pptx) [[report]](/assets/pdf/ddp2_report.pdf)

* **Deep Learning for Prominence Detection in Children's Read Speech**  
  [[publication]](https://ieeexplore.ieee.org/abstract/document/9747780) [[presentation]](/assets/pdf/ddp1_ppt.pptx) [[report]](/assets/pdf/ddp1_report.pdf)

* **CNN Encoding of Acoustic Parameters for Prominence Detection**  
  [[preprint]](https://arxiv.org/abs/2104.05488) [[presentation]](/assets/pdf/rnd_ppt.pdf) [[report]](/assets/pdf/rnd_report.pdf)

## Other Research

* **Character Animation from Video in Blender** (Honors Project)  
  [[presentation]](https://docs.google.com/presentation/d/1TEVYZGPMrn5LLypoGjDc5QhWAy3K8PVQNFJfoFA-RS4/edit?usp=sharing) [[report]](/assets/pdf/hpr_report.pdf)

* **SIRD Model for Studying Outbreak of Infectious Diseases**  
  [[report]](/assets/pdf/sre_sird.pdf) [[code]](https://github.com/methi1999/SIRD-model)
