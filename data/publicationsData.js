import { author } from './siteMetadata'

const publicationsData = [
  {
    title: 'Approximate Expectation Propagation Massive MIMO Detector With Weighted Neumann-Series',
    abstract: `Expectation propagation (EP) achieves near-optimal performance for massive multiple-input multiple-output (MIMO) detection, however, at the cost of multiple expensive matrix inversions. An EP with approximation (EPA) algorithm has been introduced to address this issue, which maintains the good performance with only one matrix inversion for initialization. Nevertheless, the accuracy of this inversion has a strong impact on the convergence of EPA, which hinders the practical implementation of the algorithm. In this brief, a weighted Neumann series approximation (wNSA) is first proposed for explicit inverse matrix approximation, which attains enhanced convergence rate and accuracy compared to standard NSA for various MIMO antenna configurations. wNSA is then combined with EPA to propose an efficient, flexible, and hardware-friendly EPA-wNSA detector. Simulation results are illustrated to confirm the similar good performance of the proposed EPA-wNSA as EP. The hardware architecture of EPA-wNSA detector is also proposed and implemented on 65 nm CMOS technology. Implementation results show that this architecture achieves a throughput of 0.86 Gb/s, which outperforms state-of-the-art (SOA) EP-based detectors. `,
    author: 'Xiaosi Tan, Huijun Han, Muhao Li, Kai Sun, Yongming Huang, Xiaohu You and Chuan Zhang',
    tags: [
      'Massive MIMO',
      'approximate expectation propagation',
      'weighted Neumann-series approximation',
    ],
    published: 'IEEE Transactions on Circuits and Systems II: Express Briefs',
    width: 412,
    height: 243,
    date: '2019/10',
    imgSrc: '/static/images/wnsa.png',
    links: [{ name: 'Paper', link: 'https://ieeexplore.ieee.org/document/9170544' }],
    show: true,
    hrefer: 'https://ieeexplore.ieee.org/document/9170544',
  },
  {
    title: 'CLAP: Concave Linear APproximation for Quadratic Graph Matching',
    abstract:
      'Solving point-wise feature correspondence in visual data is a fundamental problem in computer vision. A powerful model that addresses this challenge is to formulate it as graph matching, which entails solving a Quadratic Assignment Problem (QAP) with node-wise and edge-wise constraints. However, solving such a QAP can be both expensive and difficult due to numerous local extreme points. In this work, we introduce a novel linear model and solver designed to accelerate the computation of graph matching. Specifically, we employ a positive semi-definite matrix approximation to establish the structural attribute constraint. We then transform the original QAP into a linear model that is concave for maximization. This model can subsequently be solved using the Sinkhorn optimal transport algorithm, known for its enhanced efficiency and numerical stability compared to existing approaches. Experimental results on the widely used benchmark PascalVOC showcase that our algorithm achieves state-of-the-art performance with significantly improved efficiency. We plan to release our code for public access.',
    tags: ['Image Feature Matching', 'Quadratic Assignment Problem', 'Quadratic Graph Matching'],
    author: 'Yongqing Liang, Huijun Han and Xin Li',
    date: '2023/9',
    imgSrc: '/static/images/clap.png',
    published:
      'The 19th International Symposium on Visual Computing (ISVC 2024, Oral Paper, Springer Best Paper Award)',
    links: [
      {
        name: 'Paper',
        link: 'https://arxiv.org/pdf/2410.17101',
      },
    ],
    show: true,
    width: 2098,
    height: 958,
    hrefer: 'https://arxiv.org/pdf/2410.17101',
  },
  {
    title: 'AURORA: Automated Unleash of 3D Room Outlines for VR Applications',
    abstract: `Creating realistic VR experiences is challenging due to the labor-intensive process of accurately replicating real-world details into virtual scenes, highlighting the need for automated methods that maintain spatial accuracy and provide design flexibility. 
    In this paper, we propose AURORA, a novel method that leverages RGB-D images to automatically generate both purely virtual reality (VR) scenes and VR scenes combined with real-world elements. This approach can benefit designers by streamlining the process of converting real-world details into virtual scenes. AURORA integrates advanced techniques in image processing, segmentation, and 3D reconstruction to efficiently create realistic and detailed interior designs from real-world environments. The design of this integration ensures optimal performance and precision, addressing key challenges in automated indoor design generation by uniquely combining and leveraging the strengths of foundation models. We demonstrate the effectiveness of our approach through experiments, both on self-captured data and public datasets, showcasing its potential to enhance virtual reality (VR) 
    applications by providing interior designs that conform to real-world positioning. `,
    tags: ['Virtual Reality', 'Interior Design', 'Room Layout'],
    author:
      'Huijun Han, Yongqing Liang, Yuanlong Zhou, Wenping Wang, Edgar J. Rojas-Muñoz and Xin Li',
    date: '2024/12',
    imgSrc: '/static/images/aurora.gif',
    width: 400,
    height: 300,
    published:
      'The 19th ACM SIGGRAPH International Conference on Virtual-Reality Continuum and its Applications in Industry (VRCAI), 2024',
    links: [
      { name: 'Paper', link: 'https://arxiv.org/pdf/2412.11033' },
      { name: 'Project Page', link: 'https://archhazel.github.io/aurora-webpage/' },
      { name: 'Code', link: 'https://github.com/ArchHazel/3D_indoor_reconstruction' },
    ],
    show: true,
    hrefer: 'https://archhazel.github.io/aurora-webpage/',
  },

  {
    title:
      'A Survey on Computational Solutions for Reconstructing Complete Objects by Reassembling Their Fractured Parts',
    abstract: `Reconstructing a complete object from its parts is a fundamental problem in many scientific domains. The purpose of this article is to provide a systematic survey on this topic. The reassembly problem requires understanding the attributes of individual pieces and establishing matches between different pieces. Many approaches also model priors of the underlying complete object. Existing approaches are tightly connected problems of shape segmentation, shape matching, and learning shape priors. We provide existing algorithms in this context and emphasize their similarities and differences to general-purpose approaches. We also survey the trends from early non-deep learning approaches to more recent deep learning approaches. In addition to algorithms, this survey will also describe existing datasets, open-source software packages, and applications. To the best of our knowledge, this is the first comprehensive survey on this topic in computer graphics.`,
    tags: ['Computing methodologies', 'Computer graphics', 'Shape modeling', 'Shape analysis'],
    author:
      'Jiaxin Lu†, Yongqing Liang†, Huijun Han†, Jiacheng Hua†, Junfeng Jiang, Xin Li, Qixing Huang (†: equal contribution)',
    date: '2024/10',
    width: 2400,
    height: 1370,
    imgSrc: '/static/images/reassembly-suvey.png',
    published: "Eurographics (EG)  '25 STARs (conditionally accept with minor revisions)",
    links: [{ name: ' Paper', link: 'https://arxiv.org/pdf/2410.14770' }],
    show: true,
    hrefer: 'https://arxiv.org/pdf/2410.14770',
  },
  {
    title: 'Facial Surgery Preview Based on the Orthognathic Treatment Prediction',
    abstract: `Orthognathic surgery consultation is essential to help patients understand the changes to their facial appearance after surgery. However, current visualization methods are often inefficient and inaccurate due to limited pre- and post-treatment data and the complexity of the treatment. To overcome these challenges, this study aims to develop a fully automated pipeline that generates accurate and efficient 3D previews of postsurgical facial appearances for patients with orthognathic treatment without requiring additional medical images. The study introduces novel aesthetic losses, such as mouth-convexity and asymmetry losses, to improve the accuracy of facial surgery prediction. Additionally, it proposes a specialized parametric model for 3D reconstruction of the patient, medical-related losses to guide latent code prediction network optimization, and a data augmentation scheme to address insufficient data. The study additionally employs FLAME, a parametric model, to enhance the quality of facial appearance previews by extracting facial latent codes and establishing dense correspondences between pre- and post-surgery geometries. Quantitative comparisons showed the algorithm's effectiveness, and qualitative results highlighted accurate facial contour and detail predictions. A user study confirmed that doctors and the public could not distinguish between machine learning predictions and actual postoperative results. This study aims to offer a practical, effective solution for orthognathic surgery consultations, benefiting doctors and patients.`,
    tags: ['Computer-aided detection and diagnosis', 'geometric deep learning', 'visualization'],
    author:
      'Huijun Han, Congyi Zhang, Lifeng Zhu, Pradeep Singh, Richard Tai-Chiu Hsung, Yiu Yan Leung, Taku Komurab, Wenping Wang, Min Gu',
    date: '2025/1',
    width: 640,
    height: 368,
    imgSrc: '/static/images/orho.gif',
    published: 'submitted to Computer Methods and Programs in Biomedicine (CMPB, under revision)',
    links: [
      { name: 'Paper', link: 'https://arxiv.org/pdf/2412.11045' },
      {
        name: 'News Report',
        link: 'https://datahub.hku.hk/articles/dataset/Supporting_data_for_Revealing_the_Potential_of_3D_Facial_Imaging_Exploring_Feasibility_Reliability_and_ClinicalApplications_in_Craniofacial_Practice_/26820532',
      },
      { name: 'Code', link: 'https://github.com/ArchHazel/Orthognathics' },
    ],
    show: true,
    hrefer: 'https://arxiv.org/pdf/2412.11045',
  },
]

export default publicationsData
