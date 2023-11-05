---
layout: post
title: "Resources for Applied Research Scientist"
tags: ai, study-material, machine-learning, applied-scientist, research-scientist
---

## Introduction

I recently interviewed for the role of *Applied Research Scientist* at a company which does a ton of machine learning (mostly deep learning). In order to prepare for the interviews, I scoured the internet for resources. Although there are some excellent guides out there, I felt I could contribute by making yet another list of resources. Hope it helps out a few people!

Disclaimer: Before I begin, let me mention my background since it heavily influenced the resources I focused on. I did the standard *Introduction to ML* course back in undergrad which covers topics such as Linear Algebra, Probability, Regression, Kernel methods, etc. However, most of my ML-related work these days is simply writing PyTorch code for various deep learning tasks. As a result, I had to brush up on all the mentioned topics (and more!).

## So what should I study?!

### DSA :/

For somebody who has been doing deep learning for a long time, DSA rounds are the most annoying. The perrennial "Why-should-I-care-about-coin-change-when-i-will-never-write-any-such-algorithm" would always pop up in my mind. I understand it tests your analytical thinking but ugh. Anyway. I think [Blind 75](https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions) and [Neetcode](https://neetcode.io/practice) should be enough. I solved about 50% of the problems on Neetcode because I was applying to other roles such as MLE and SDE.

Luckily, the company I interviewed at had no DSA rounds!

### Machine Learning :)

I'd suggest the following list of resources (arranged in order of importance):

* Stanford's [CS229](https://cs229.stanford.edu/) is a complete introduction to Machine Learning. It covers everything you'd expect from an introductory course. Their notes are available for free.
* The famous Stanford [CS231](https://cs231n.github.io) has an in-depth module on neural networks and CNNS which I really enjoyed. It covers topics such as loss functions, weight initialization, normalization techniques, gradient and sanity checks, babysitting the learning process, etc. In other words, it's not just theory but also a bunch of extremely helpful heuristics for training neural networks.
* [Nice introduction to Recommender Systems](https://towardsdatascience.com/introduction-to-recommender-systems-6c66cf15ada)
* [Cheatsheets](https://stanford.edu/~shervine/teaching/)
* [Miscellanous collection of questions](https://github.com/andrewekhalel/MLQuestions)
* [Michael Nielsen's beautiful first-principles approach towards neural networks](http://neuralnetworksanddeeplearning.com). This is long but worth the read. One can skip it in case you don't have time but make sure to put it on your reading list.

Lastly, if you do not regularly code, I'd suggest trying out a few tasks on Kaggle to brush up your skills.

### Deep Learning :))

Preparation for this section will be very very specific to your area of research e.g. Computer Vision, NLP, LLMs, Speech, etc.

I skimmed through the basics for Speech and LLMs since I had some background in these areas. Given below is a random collection of helpful resources:
* [Lilian Weng's blog](https://lilianweng.github.io): This is, hand-down, the best blog for anything related to deep learning. From LLM agents to Diffusion, each blog post covers the topic in depth and also gives a broad picture of the landscape.
* [How LSTM solves the vanishing gradient problem](https://medium.datadriveninvestor.com/how-do-lstm-networks-solve-the-problem-of-vanishing-gradients-a6784971a577)
* [Tutorial on Variational Autoencoders](https://arxiv.org/abs/1606.05908)
* [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/)
* [Training a causal language model from scratch](https://huggingface.co/learn/nlp-course/chapter7/6?fw=pt)
* [GPT in 60 lines of NumPy](https://jaykmody.com/blog/gpt-from-scratch/)
* [KV caching](https://www.dipkumar.dev/becoming-the-unbeatable/posts/gpt-kvcache/)
* [Speech Synthesis](https://www.microsoft.com/en-us/research/project/vall-e-x/)

### System Design

* Stanford's [CS329](https://stanford-cs329s.github.io) is the most comprehensive introduction to ML System Design. Although I did not have time to explore it in depth, skimming through it definitely helped. All slides/notes are available for free!
* There are a bunch of Github repos which cover ML System Design (such as [this](https://github.com/alirezadir/Machine-Learning-Interviews/blob/main/src/MLSD/ml-system-design.md), [this](https://github.com/chiphuyen/machine-learning-systems-design/blob/master/content/design-a-machine-learning-system.md) and [this](https://github.com/CathyQian/Machine-Learning-System-Design)). Note that these are very high-level. If you have time, I'd suggest going for CS329. If not, the above links might help.

## My Interview Experience

I had 4 rounds of interviews:
* **Programming**: I was asked to code the fundamental backprop equations for a simple linear layer from scratch in NumPy. It also involved tricks such as the *logsumexp* trick for numerical stability and tasks such as reusing a Linear Layer for 1x1 Conv in order to test proficiency in PyTorch. Previous experience in PyTorch was very important for this round.
* **Culture**: Typical behavioral round involving questions about my past projects, what I learned from them, what I'd do differently, etc. The [STAR methodology](https://www.themuse.com/advice/star-interview-method) is helpful for such rounds.
* **ML Theory**: I enjoyed this interview because it was slightly open-ended. We covered ideas such as the theoretical justification for Cross-Entropy Loss, the *logsumexp* trick (again!), can we replace Softmax+CEL with some other loss?, etc. This is where courses such as CS229 and CS231 will come to your rescue!
* **ML System Design**: I was asked to design a deep learning pipeline for a common task in the domain of speech. We went over ways to synthetically generate the dataset, model architecture, loss functions and post-processing. I feel a broad overview of the ML/DL landscape is crucial for such interviews because there are design principles which are applicable across domains.