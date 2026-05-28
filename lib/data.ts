export const profile = {
  name: "Minh Duc Chu",
  altName: "David",
  fullName: "Minh Duc Hoang Chu",
  role: "PhD Candidate, Computer Science",
  affiliation: "USC Information Sciences Institute",
  advisor: "Luca Luceri",
  coAdvisor: "Kristina Lerman",
  fellowship:
    "Incoming Anthropic AI Safety Fellow (Summer 2026), focusing on work that advances AI alignment and safety.",
  origin: "Vũng Tàu, Việt Nam",
  location: "Los Angeles, CA",
  email: "mhchu@usc.edu",
  emails: [
    { label: "USC", value: "mhchu@usc.edu" },
    { label: "ISI", value: "dchu@isi.edu" },
    { label: "Personal", value: "davidchu11381@gmail.com" },
  ],
  tagline:
    "Studying how language models meet, and reshape, the people who use them.",
  interests: [
    "AI Alignment & Safety",
    "Socio-technical Alignment",
    "Human–AI Companionship",
    "Model Psychology",
    "Model Welfare",
    "Character Training",
    "Social NLP",
  ],
  links: {
    scholar: "https://scholar.google.com/citations?user=mVCqi_kAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/chuhoangminhduc",
    github: "https://github.com/davidchu11381",
    acl: "https://aclanthology.org/people/minh-duc-chu/",
    email: "mailto:mhchu@usc.edu",
    isi: "https://www.isi.edu/",
    signalsLab: "https://signals-lab.vercel.app/",
    advisor: "https://www.luceriluc.it/",
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
    iso: "2026-05-27",
    body: "Presenting our ICWSM '26 paper — a multimodal TikTok dataset of Ecuador's 2024 political crisis and organized crime discourse — at the conference in LA (May 27–29).",
    href: "https://www.icwsm.org/2026/",
  },
  {
    date: "May 2026",
    iso: "2026-05",
    body: "Joining Anthropic this summer as an AI Safety Fellow, working on socio-technical alignment.",
    href: "https://www.anthropic.com/fellows-program",
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
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=mVCqi_kAAAAJ&citation_for_view=mVCqi_kAAAAJ:Tyk-4Ss8FVUC",
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
      "A Multimodal TikTok Dataset of Ecuador's 2024 Political Crisis and Organized Crime Discourse",
    authors:
      "Charles Bickham, Bryan Ramirez-Gonzalez, Minh Duc Chu, Kristina Lerman, Emilio Ferrara",
    venue: "ICWSM 2026",
    year: 2026,
    tag: "ICWSM '26",
    featured: true,
  },
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
      "Minh Duc Chu, Christina Sánchez, Zihao He, Rebecca Dorn, Stuart B. Murray, Kristina Lerman",
    venue: "Body Image",
    year: 2026,
    tag: "Journal",
  },
  {
    title:
      "Detecting Eating Disorders From Social Media Content: What Has Been Done and Where Do We Go Next?",
    authors:
      "Laura D'Adamo, Jamil R. Moussaoui, Minh Duc Chu, Hannah Graver, C. Barr Taylor, Denise E. Wilfley, et al.",
    venue: "International Journal of Eating Disorders",
    year: 2026,
    tag: "Journal",
  },
  {
    title:
      "Tied In on TikTok: Tie Strength and Emotional Dynamics in Algorithmic Communities",
    authors:
      "Charles Bickham, Minh Duc Chu, Audrey Yuan, Victoria Lookingbill, Erfan Mohammadi, Stuart Murray, et al.",
    venue: "arXiv preprint",
    year: 2026,
    tag: "Preprint",
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
  },
  {
    title: "EDTok: A Dataset for Eating Disorder Content on TikTok",
    authors:
      "Charles Bickham, Bryan Ramirez-Gonzalez, Minh Duc Chu, Kristina Lerman, Emilio Ferrara",
    venue: "ICWSM Workshop on Data for the Wellbeing of Most Vulnerable",
    year: 2025,
    tag: "ICWSM Workshop",
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
  },
  {
    title:
      "Machine Learning Insights Into Eating Disorder Twitter Communities",
    authors:
      "Hsien-Te Kao, Ingmar Erickson, Minh Duc H. Chu, Zihao He, Kristina Lerman, Svitlana Volkova",
    venue: "CHI Extended Abstracts 2024",
    year: 2024,
    tag: "CHI '24",
  },
  {
    title:
      "Towards Safer Online Spaces: Simulating and Assessing Intervention Strategies for Eating Disorder Discussions",
    authors:
      "Louis Penafiel, Hsien-Te Kao, Ingmar Erickson, David Chu, Ryan McCormack, Kristina Lerman, et al.",
    venue: "arXiv preprint",
    year: 2024,
    tag: "Preprint",
  },
];
