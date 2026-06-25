export const profile = {
  name: "Minh Duc Chu",
  altName: "David",
  fullName: "Minh Duc Hoang Chu",
  role: "PhD Candidate, Computer Science",
  affiliation: "USC Information Sciences Institute",
  advisor: "Luca Luceri",
  coAdvisor: "Kristina Lerman",
  fellowship: "Anthropic AI Safety Fellow (Summer 2026).",
  internship:
    "Incoming Research Engineer Intern — AI Safety & Alignment, Character.AI (Fall 2026).",
  origin: "Vũng Tàu, Việt Nam",
  location: "Los Angeles, CA",
  // Stored split (no contiguous "@") so harvesters can't scrape the address;
  // reassembled client-side in <Email />.
  emails: [
    { label: "USC", user: "mhchu", domain: "usc.edu" },
    { label: "ISI", user: "dchu", domain: "isi.edu" },
    { label: "Personal", user: "davidchu11381", domain: "gmail.com" },
  ],
  tagline:
    "Studying how language models meet, and reshape, the people who use them.",
  interests: [
    "AI Alignment & Safety",
    "Socio-technical Alignment",
    "Human–AI Companionship",
    "Model Psychology",
    "Model Welfare",
    "Interpretability",
    "Character Training",
    "Social NLP",
  ],
  links: {
    scholar: "https://scholar.google.com/citations?user=mVCqi_kAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/chuhoangminhduc",
    github: "https://github.com/davidchu11381",
    acl: "https://aclanthology.org/people/minh-duc-chu/",
    isi: "https://www.isi.edu/",
    signalsLab: "https://signals-lab.vercel.app/",
    advisor: "https://www.luceriluc.it/",
    characterai: "https://character.ai",
    cv: "https://drive.google.com/file/d/1fpcWaXFbd1pQW48ov_ZBzwu4BHPiTDAD/view?usp=sharing",
  },
};

export type NewsItem = {
  date: string;
  iso: string;
  body: string;
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: "May 2026",
    iso: "2026-05-20",
    body: "Joining Character.AI this fall as an incoming Research Engineer Intern on the AI Safety & Alignment team, mentored by Deniz Demir and Dylan Hadfield-Menell.",
    href: "https://character.ai",
  },
  {
    date: "May 2026",
    iso: "2026-05-27",
    body: "Presenting our ICWSM '26 paper — Tied In on TikTok: Tie Strength and Emotional Dynamics in Algorithmic Communities — with Charles Bickham at the conference in LA (May 27–29).",
    href: "https://arxiv.org/abs/2603.22504",
  },
  {
    date: "May 2026",
    iso: "2026-05",
    body: "Joining Anthropic this summer as an AI Safety Fellow (Cohort 4), working on socio-technical alignment.",
    href: "https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/",
  },
  {
    date: "Jan 2026",
    iso: "2026-01-15",
    body: "BigTokDetect accepted at EACL '26 — a clinically-informed vision–language framework for detecting pro-bigorexia content on TikTok.",
    href: "https://aclanthology.org/2026.eacl-long.33.pdf",
  },
  {
    date: "Jan 2026",
    iso: "2026-01",
    body: "Article on gendered stereotypes and body-image concerns on diet and fitness forums published in Body Image.",
    href: "https://arxiv.org/abs/2407.03551",
  },
  {
    date: "May 2025",
    iso: "2025-05",
    body: "Preprint out — Illusions of Intimacy: How Emotional Dynamics Shape Human–AI Relationships.",
    href: "https://arxiv.org/abs/2505.11649",
  },
  {
    date: "Feb 2025",
    iso: "2025-02",
    body: "Paper accepted at NAACL '25 on improving and assessing the fidelity of LLM alignment to online communities.",
    href: "https://aclanthology.org/2025.naacl-long.5.pdf",
  },
  {
    date: "Sep 2024",
    iso: "2024-09",
    body: "Community-Cross-Instruct accepted at EMNLP 2024.",
    href: "https://aclanthology.org/2024.emnlp-main.945.pdf",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  tag: string;
  pdf?: string;
  featured?: boolean;
};

export const publications: Publication[] = [
  {
    title:
      "BigTokDetect: A Clinically-Informed Vision–Language Modeling Framework for Detecting Pro-Bigorexia Videos on TikTok",
    authors:
      "Minh Duc Chu, Kshitij Pawar, Zihao He, Roxanna Sharifi, Ross M. Sonnenblick, Magdalayna Curry, Laura D'Adamo, Lindsay Young, Stuart Murray, Kristina Lerman",
    venue: "EACL 2026",
    year: 2026,
    tag: "EACL '26",
    pdf: "https://aclanthology.org/2026.eacl-long.33.pdf",
    featured: true,
  },
  {
    title:
      "Leveraging machine learning to identify gendered stereotypes and body image concerns on diet and fitness online forums",
    authors:
      "Minh Duc Chu, Cinthia Sánchez, Zihao He, Rebecca Dorn, Stuart B. Murray, Kristina Lerman",
    venue: "Body Image",
    year: 2026,
    tag: "Journal",
    pdf: "https://arxiv.org/abs/2407.03551",
  },
  {
    title:
      "Detecting Eating Disorders From Social Media Content: What Has Been Done and Where Do We Go Next?",
    authors:
      "Laura D'Adamo, Jannah R. Moussaoui, David Chu, Haley Graver, C. Barr Taylor, Denise E. Wilfley, et al.",
    venue: "International Journal of Eating Disorders",
    year: 2026,
    tag: "Journal",
    pdf: "https://onlinelibrary.wiley.com/doi/10.1002/eat.24565",
  },
  {
    title:
      "Tied In on TikTok: Tie Strength and Emotional Dynamics in Algorithmic Communities",
    authors:
      "Charles Bickham, Minh Duc Chu, Arianna Yuan, Valerie Lookingbill, Ehsan Mohammadi, Stuart Murray, Kristina Lerman, Emilio Ferrara",
    venue: "ICWSM 2026",
    year: 2026,
    tag: "ICWSM '26",
    pdf: "https://arxiv.org/abs/2603.22504",
    featured: true,
  },
  {
    title:
      "Illusions of Intimacy: How Emotional Dynamics Shape Human–AI Relationships",
    authors:
      "Minh Duc Chu, Patrick Gerard, Kshitij Pawar, Charles Bickham, Kristina Lerman",
    venue: "arXiv preprint",
    year: 2025,
    tag: "Preprint",
    pdf: "https://arxiv.org/abs/2505.11649",
    featured: true,
  },
  {
    title:
      "Improving and Assessing the Fidelity of Large Language Models Alignment to Online Communities",
    authors: "Minh Duc Chu, Zihao He, Rebecca Dorn, Kristina Lerman",
    venue: "NAACL 2025",
    year: 2025,
    tag: "NAACL '25",
    pdf: "https://aclanthology.org/2025.naacl-long.5.pdf",
    featured: true,
  },
  {
    title:
      "Safe spaces or toxic places? Content moderation and social dynamics of online eating disorder communities",
    authors:
      "Kristina Lerman, Minh Duc Chu, Charles Bickham, Luca Luceri, Emilio Ferrara",
    venue: "EPJ Data Science",
    year: 2025,
    tag: "Journal",
    pdf: "https://link.springer.com/article/10.1140/epjds/s13688-025-00575-5",
  },
  {
    title: "EDTok: A Dataset for Eating Disorder Content on TikTok",
    authors:
      "Charles Bickham, Bryan Ramirez-Gonzalez, Minh Duc Chu, Kristina Lerman, Emilio Ferrara",
    venue: "ICWSM Workshop on Data for the Wellbeing of Most Vulnerable",
    year: 2025,
    tag: "ICWSM Workshop",
    pdf: "https://workshop-proceedings.icwsm.org/pdf/2025_02.pdf",
  },
  {
    title:
      "Community-Cross-Instruct: Unsupervised Instruction Generation for Aligning Large Language Models to Online Communities",
    authors:
      "Zihao He, Minh Duc Chu, Rebecca Dorn, Siyi Guo, Kristina Lerman",
    venue: "EMNLP 2024",
    year: 2024,
    tag: "EMNLP '24",
    pdf: "https://aclanthology.org/2024.emnlp-main.945.pdf",
    featured: true,
  },
  {
    title:
      "Large Language Models Help Reveal Unhealthy Diet and Body Concerns in Online Eating Disorders Communities",
    authors: "Minh Duc Chu, Zihao He, Rebecca Dorn, Kristina Lerman",
    venue: "arXiv preprint",
    year: 2024,
    tag: "Preprint",
    pdf: "https://arxiv.org/abs/2401.09647",
  },
  {
    title:
      "Machine Learning Insights Into Eating Disorder Twitter Communities",
    authors:
      "Hsien-Te Kao, Isabel Erickson, Minh Duc H. Chu, Zihao He, Kristina Lerman, Svitlana Volkova",
    venue: "CHI Extended Abstracts 2024",
    year: 2024,
    tag: "CHI '24",
    pdf: "https://dl.acm.org/doi/10.1145/3613905.3651116",
  },
  {
    title:
      "Towards Safer Online Spaces: Simulating and Assessing Intervention Strategies for Eating Disorder Discussions",
    authors:
      "Louis Penafiel, Hsien-Te Kao, Isabel Erickson, David Chu, Ryan McCormack, Kristina Lerman, et al.",
    venue: "arXiv preprint",
    year: 2024,
    tag: "Preprint",
    pdf: "https://arxiv.org/abs/2409.04043",
  },
];

export type SkillGroup = { label: string; items: string[] };

// General-purpose toolkit shown as a labelled row of tags.
export const skills: SkillGroup[] = [
  {
    label: "Programming",
    items: ["Python", "C++", "C", "Java", "JavaScript", "CUDA", "Docker"],
  },
  {
    label: "Machine Learning",
    items: [
      "PyTorch",
      "Hugging Face",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "OpenCV",
      "R",
    ],
  },
  {
    label: "Statistics",
    items: [
      "Bayesian Inference",
      "Probability",
      "Time Series",
      "Spatial Statistics",
      "Sampling",
      "Visualization",
    ],
  },
];

// LLM work, split into the four phases I actually touch.
export const llmSkills: SkillGroup[] = [
  {
    label: "Training",
    items: [
      "SFT",
      "RLHF",
      "RLAIF",
      "Preference Optimization (DPO, GRPO)",
      "Constitutional AI",
      "Character Training",
      "Distributed Training (FSDP, DeepSpeed)",
      "Multimodal / VLMs",
    ],
  },
  {
    label: "Interpretability",
    items: [
      "Sparse Autoencoders",
      "Activation Steering",
      "Linear Probing",
      "Logit Lens",
      "Representation Geometry",
      "Circuit & Attention Analysis",
      "Feature Attribution",
    ],
  },
  {
    label: "Evaluation & Oversight",
    items: [
      "LLM-as-a-Judge",
      "Red-teaming",
      "Behavioral & Psychometric Evals",
      "Scalable Oversight (Debate, Weak-to-Strong)",
      "Inspect AI",
      "Petri",
    ],
  },
  {
    label: "Simulation",
    items: [
      "Multi-Agent Systems",
      "Persona & Community Simulation",
      "Agent-based Info-Ops",
      "AutoGen",
      "RAG",
    ],
  },
];

export type LinkedVenue = { name: string; href: string };
export type Role = { label: string; href: string };
export type TeachingItem = {
  code: string;
  title: string;
  term: string;
  href: string;
};

export const services = {
  reviewing: [
    { name: "NAACL", href: "https://naacl.org/" },
    { name: "ACL", href: "https://www.aclweb.org/" },
    { name: "EMNLP", href: "https://aclanthology.org/venues/emnlp/" },
    { name: "AACL", href: "https://aclanthology.org/venues/aacl/" },
    { name: "EACL", href: "https://aclanthology.org/venues/eacl/" },
    { name: "CSCW", href: "https://cscw.acm.org/" },
    { name: "WWW", href: "https://thewebconf.org/" },
    { name: "ICWSM", href: "https://www.icwsm.org/" },
    { name: "ACII", href: "https://acii-conf.net/" },
    {
      name: "IJHCS (journal)",
      href: "https://www.sciencedirect.com/journal/international-journal-of-human-computer-studies",
    },
  ] as LinkedVenue[],
  roles: [
    { label: "ICWSM '26 — Local Chair", href: "https://www.icwsm.org/2026/" },
  ] as Role[],
  teaching: [
    {
      code: "DSCI-352",
      title: "Applied Machine Learning and Data Mining",
      term: "Fall 2025",
      href: "https://classes.usc.edu/term-20253/course/dsci-352/",
    },
    {
      code: "DSCI-550",
      title: "Data Science at Scale",
      term: "Spring 2026",
      href: "https://classes.usc.edu/term-20261/course/dsci-550/",
    },
    {
      code: "DSCI-549",
      title: "Introduction to Computational Thinking and Data Science",
      term: "Spring 2025",
      href: "https://classes.usc.edu/term-20251/course/dsci-549/",
    },
  ] as TeachingItem[],
};
