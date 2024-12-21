import { author } from './siteMetadata'

const publicationsData = [
  {
    title: 'Approximate Expectation Propagation Massive MIMO Detector With Weighted Neumann-Series',
    abstract: `In this brief, a weighted Neumann series approximation (wNSA) is 
    first proposed for explicit inverse matrix approximation, which attains 
    enhanced convergence rate and accuracy compared to standard NSA for various 
    MIMO antenna configurations. wNSA is then combined with EPA to propose an 
    efficient, flexible, and hardware-friendly EPA-wNSA detector.  `,
    author: 'Xiaosi Tan, Huijun Han, Muhao Li, Kai Sun, Yongming Huang, Xiaohu You and Chuan Zhang',
    tags: [
      'Massive MIMO',
      'approximate expectation propagation',
      'weighted Neumann-series approximation',
    ],
    date: '2021-02',
    imgSrc: '/static/images/google.png',
    links: [{ name: 'IEEE TCAS-II', link: 'https://ieeexplore.ieee.org/document/9170544' }],
    show: true,
  },
  {
    title: 'CLAP: Concave Linear APproximation for Quadratic Graph Matching',
    abstract: '123', //`Solving point-wise feature correspondence in visual data is a fundamental problem in computer vision. A powerful model that addresses this challenge is to formulate it as graph matching, which entails solving a Quadratic Assignment Problem (QAP) with node-wise and edge-wise constraints. However, solving such a QAP can be both expensive and difficult due to numerous local extreme points. In this work, we introduce a novel linear model and solver designed to accelerate the computation of graph matching. Specifically, we employ a positive semi-definite matrix approximation to establish the structural attribute constraint. We then transform the original QAP into a linear model that is concave for maximization. This model can subsequently be solved using the Sinkhorn optimal transport algorithm, known for its enhanced efficiency and numerical stability compared to existing approaches. Experimental results on the widely used benchmark PascalVOC showcase that our algorithm achieves state-of-the-art performance with significantly improved efficiency. We plan to release our code for public access.`,
    tags: ['Image Feature Matching', 'Quadratic Assignment Problem', 'Quadratic Graph Matching'],
    author: 'Yongqing Liang, Huijun Han and Xin Li',
    date: '2024-10',
    imgSrc: '/static/images/google.png',
    links: [
      {
        name: "ISVC '24 (Oral Paper, Springer Best Paper Award)",
        link: 'https://arxiv.org/abs/2410.17101',
      },
    ],
    show: true,
  },
  {
    title: 'AURORA: Automated Unleash of 3D Room Outlines for VR Applications',
    abstract: `Creating realistic VR experiences is challenging due to the labor-intensive process of accurately replicating real-world details into virtual scenes, highlighting the need for automated methods that maintain spatial accuracy and provide design flexibility. 
    In this paper, we propose AURORA, a novel method that leverages RGB-D images to automatically generate both purely virtual reality (VR) scenes and VR scenes combined with real-world elements. This approach can benefit designers by streamlining the process of converting real-world details into virtual scenes. AURORA integrates advanced techniques in image processing, segmentation, and 3D reconstruction to efficiently create realistic and detailed interior designs from real-world environments. The design of this integration ensures optimal performance and precision, addressing key challenges in automated indoor design generation by uniquely combining and leveraging the strengths of foundation models. We demonstrate the effectiveness of our approach through experiments, both on self-captured data and public datasets, showcasing its potential to enhance virtual reality (VR) 
    applications by providing interior designs that conform to real-world positioning. `,
    tags: ['Virtual Reality', 'Interior Design', 'Room Layout'],
    author:
      'Huijun Han, Yongqing Liang, Yuanlong Zhou, Wenping Wang, Edgar J. Rojas-Muñoz and Xin Li',
    date: '2024-12',
    imgSrc: '/static/images/google.png',
    links: [
      { name: "VRCAI '24", link: 'https://arxiv.org/pdf/2412.11033' },
      { name: 'Project Page', link: 'https://archhazel.github.io/aurora-webpage/' },
    ],
    show: true,
  },

  {
    title:
      'A Survey on Computational Solutions for Reconstructing Complete Objects by Reassembling Their Fractured Parts',
    abstract: `Reconstructing a complete object from its parts is a fundamental problem in many scientific domains. The purpose of this article is to provide a systematic survey on this topic. The reassembly problem requires understanding the attributes of individual pieces and establishing matches between different pieces. Many approaches also model priors of the underlying complete object. Existing approaches are tightly connected problems of shape segmentation, shape matching, and learning shape priors. We provide existing algorithms in this context and emphasize their similarities and differences to general-purpose approaches. We also survey the trends from early non-deep learning approaches to more recent deep learning approaches. In addition to algorithms, this survey will also describe existing datasets, open-source software packages, and applications. To the best of our knowledge, this is the first comprehensive survey on this topic in computer graphics.`,
    tags: ['Computing methodologies', 'Computer graphics', 'Shape modeling', 'Shape analysis'],
    author:
      'Jiaxin Lu†, Yongqing Liang†, Huijun Han†, Jiacheng Hua†, Junfeng Jiang, Xin Li, Qixing Huang',
    date: '2025-5',
    imgSrc: '/static/images/google.png',
    links: [{ name: " Eurographics (EG)  '25", link: 'https://arxiv.org/abs/2410.14770' }],
    show: true,
  },
  // {
  //   title: 'A Search Engine',
  //   abstract: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   tags: ['one', 'two', 'three'],
  //   date: '2016-03-08',
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
]

export default publicationsData
