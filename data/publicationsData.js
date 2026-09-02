import { author } from './siteMetadata'

const publicationsData = [
  {
    title:
      'ScoreKFT: Reliable Range Estimation for Single Person Tracking in Clutter-Rich Indoor Environments with UWB Sensors',
    abstract:
      'Reliable indoor range estimation to the human body with ultra-wideband (UWB) sensor remains highly challenging and an open problem in realistic home-like environments due to persistent multipath, intermittent line-of-sight, and long-range sensing. This work presents ScoreKFT, a scoring-based method for reliable indoor human body range estimation. The method combines energy intensity, spatial compactness, and range priors to identify the most likely human body reflection candidate from noisy Range–Doppler (RD) heatmaps, followed by short-term temporal validation to stabilize distance estimates. We evaluate ScoreKFT in a four-room apartment-scale environment with 12 long-duration (30—40 min) sessions of natural daily activities, using validated depth derived trajectories as reference to benchmark tracking accuracy. ScoreKFT achieves 0.958 m mean range error and sub-2 m trajectory accuracy, outperforming two recent baselines, Scaling and MTrack by 33.4% and 31.3% respectively. We also find that once ranges are reliable, standard particle filtering achieves high tracking accuracy, showing that range estimation, not triangulation or tracking, is the primary challenge for robust distance-based single person tracking in realistic multi-room environments.',
    tags: ['Range Estimation', 'Indoor Localization', 'UWB Sensor', 'Single Person Tracking'],
    author: 'Haotian Fu, Huijun Han, Mengjing Liu, Zongxing Xie and Fan Ye',
    date: '2026-09-15',
    imgSrc: '/static/images/scorekft.png',
    width: 500,
    height: 209,
    published: 'IEEE Global Communications Conference (GLOBECOM 2026, accepted), September 2026',
    links: [],
    show: true,
    hrefer: '',
  },
  {
    title:
      'Reliable Long-Term Calibration of Vision-Based Ground Truth for Home-Based Human Tracking',
    abstract:
      'Accurate spatial ground truth is essential for developing and evaluating home-based wireless human tracking systems in home-like environments. Vision-based sensing is commonly used to provide such ground truth, but long-term deployment is challenged by temporal camera drift, which degrades calibration quality and trajectory consistency over time. In this work, we present a modular vision-based ground-truth system for long-term human tracking in a simulated home environment. The system integrates markerless multi-camera calibration, per-camera pose recovery, and RGB-D trajectory extraction to generate consistent global human trajectories over time. To support deployment under limited camera overlap, we adopt a two-stage feed-forward calibration strategy and compare it against classical and recent markerless RGB-D pose recovery methods. Experimental results show that the proposed calibration framework achieves a median trajectory error of 3.3 cm in a downstream RGB-D human trajectory extraction task, representing a 68.9% reduction compared to operating without periodic recalibration. The proposed system provides a practical ground-truth solution for longitudinal evaluation of home-based wireless human tracking systems.',
    tags: ['Human Tracking', 'Camera Calibration', 'RGB-D', 'Health Sensing'],
    author: 'Bunnavit Sawangpiriyakij, Huijun Han and Fan Ye',
    date: '2026-08-05',
    imgSrc: '/static/images/cam-cali.gif',
    width: 500,
    height: 330,
    published:
      'The IEEE/ACM Conference on Connected Health: Applications, Systems and Engineering Technologies (CHASE 2026), Pittsburgh, PA, USA, 446-451',
    links: [{ name: 'Paper', link: 'https://doi.org/10.1109/CHASE69719.2026.00076' }],
    show: true,
    hrefer: 'https://doi.org/10.1109/CHASE69719.2026.00076',
  },
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
    width: 500,
    height: 295,
    date: '2019-10-02',
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
    date: '2023-09-02',
    imgSrc: '/static/images/clap.png',
    published:
      'The 19th International Symposium on Visual Computing (ISVC 2024, Oral Paper, Springer Best Paper Award)',
    links: [
      {
        name: 'Paper',
        link: 'https://doi.org/10.1007/978-3-031-77392-1_22',
      },
    ],
    show: true,
    width: 500,
    height: 228,
    hrefer: 'https://doi.org/10.1007/978-3-031-77392-1_22',
  },
  {
    title: 'AURORA: Automated Unleash of 3D Room Outlines for VR Applications',
    abstract: `Creating realistic VR experiences is challenging due to the labor-intensive process of accurately replicating real-world details into virtual scenes, highlighting the need for automated methods that maintain spatial accuracy and provide design flexibility. 
    In this paper, we propose AURORA, a novel method that leverages RGB-D images to automatically generate both purely virtual reality (VR) scenes and VR scenes combined with real-world elements. This approach can benefit designers by streamlining the process of converting real-world details into virtual scenes. AURORA integrates advanced techniques in image processing, segmentation, and 3D reconstruction to efficiently create realistic and detailed interior designs from real-world environments. The design of this integration ensures optimal performance and precision, addressing key challenges in automated indoor design generation by uniquely combining and leveraging the strengths of foundation models. We demonstrate the effectiveness of our approach through experiments, both on self-captured data and public datasets, showcasing its potential to enhance virtual reality (VR) 
    applications by providing interior designs that conform to real-world positioning. `,
    tags: ['Virtual Reality', 'Interior Design', 'Room Layout'],
    author:
      'Huijun Han, Yongqing Liang, Yuanlong Zhou, Wenping Wang, Edgar J. Rojas-Muñoz and Xin Li',
    date: '2024-12-02',
    imgSrc: '/static/images/aurora.gif',
    width: 500,
    height: 375,
    published:
      'The 19th ACM SIGGRAPH International Conference on Virtual-Reality Continuum and its Applications in Industry (VRCAI), 2024',
    links: [
      { name: 'Paper', link: 'https://doi.org/10.1145/3703619.3706036' },
      { name: 'Project Page', link: 'https://archhazel.github.io/aurora-webpage/' },
      { name: 'Code', link: 'https://github.com/ArchHazel/3D_indoor_reconstruction' },
    ],
    show: true,
    hrefer: 'https://doi.org/10.1145/3703619.3706036',
  },

  {
    title:
      'A Survey on Computational Solutions for Reconstructing Complete Objects by Reassembling Their Fractured Parts',
    abstract: `Reconstructing a complete object from its parts is a fundamental problem in many scientific domains. The purpose of this article is to provide a systematic survey on this topic. The reassembly problem requires understanding the attributes of individual pieces and establishing matches between different pieces. Many approaches also model priors of the underlying complete object. Existing approaches are tightly connected problems of shape segmentation, shape matching, and learning shape priors. We provide existing algorithms in this context and emphasize their similarities and differences to general-purpose approaches. We also survey the trends from early non-deep learning approaches to more recent deep learning approaches. In addition to algorithms, this survey will also describe existing datasets, open-source software packages, and applications. To the best of our knowledge, this is the first comprehensive survey on this topic in computer graphics.`,
    tags: ['Computing methodologies', 'Computer graphics', 'Shape modeling', 'Shape analysis'],
    author:
      'Jiaxin Lu†, Yongqing Liang†, Huijun Han†, Jiacheng Hua†, Junfeng Jiang, Xin Li, Qixing Huang (†: equal contribution)',
    date: '2024-10-02',
    width: 500,
    height: 285,
    imgSrc: '/static/images/reassembly-suvey.png',
    published: 'Computer Graphics Forum (Eurographics 2025 STAR), Volume 44, Number 2, 2025',
    links: [{ name: ' Paper', link: 'https://doi.org/10.1111/cgf.70081' }],
    show: true,
    hrefer: 'https://doi.org/10.1111/cgf.70081',
  },
  {
    title: 'Facial Surgery Preview Based on the Orthognathic Treatment Prediction',
    abstract: `Orthognathic surgery consultation is essential to help patients understand the changes to their facial appearance after surgery. However, current visualization methods are often inefficient and inaccurate due to limited pre- and post-treatment data and the complexity of the treatment. To overcome these challenges, this study aims to develop a fully automated pipeline that generates accurate and efficient 3D previews of postsurgical facial appearances for patients with orthognathic treatment without requiring additional medical images. The study introduces novel aesthetic losses, such as mouth-convexity and asymmetry losses, to improve the accuracy of facial surgery prediction. Additionally, it proposes a specialized parametric model for 3D reconstruction of the patient, medical-related losses to guide latent code prediction network optimization, and a data augmentation scheme to address insufficient data. The study additionally employs FLAME, a parametric model, to enhance the quality of facial appearance previews by extracting facial latent codes and establishing dense correspondences between pre- and post-surgery geometries. Quantitative comparisons showed the algorithm's effectiveness, and qualitative results highlighted accurate facial contour and detail predictions. A user study confirmed that doctors and the public could not distinguish between machine learning predictions and actual postoperative results. This study aims to offer a practical, effective solution for orthognathic surgery consultations, benefiting doctors and patients.`,
    tags: ['Computer-aided detection and diagnosis', 'geometric deep learning', 'visualization'],
    author:
      'Huijun Han, Congyi Zhang, Lifeng Zhu, Pradeep Singh, Richard Tai-Chiu Hsung, Yiu Yan Leung, Taku Komurab, Wenping Wang, Min Gu',
    date: '2025-01-02',
    width: 500,
    height: 342,
    imgSrc: '/static/images/orho.gif',
    published: 'Computer Methods and Programs in Biomedicine (CMPB), 267:108781, 2025',
    links: [
      { name: 'Paper', link: 'https://doi.org/10.1016/j.cmpb.2025.108781' },
      {
        name: 'News Report',
        link: 'https://datahub.hku.hk/articles/dataset/Supporting_data_for_Revealing_the_Potential_of_3D_Facial_Imaging_Exploring_Feasibility_Reliability_and_ClinicalApplications_in_Craniofacial_Practice_/26820532',
      },
      { name: 'Code', link: 'https://github.com/ArchHazel/Orthognathics' },
    ],
    show: true,
    hrefer: 'https://doi.org/10.1016/j.cmpb.2025.108781',
  },
]

export default publicationsData
