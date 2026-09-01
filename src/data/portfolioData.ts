import { Profile, Skill, Project, WorkExperience, Education } from '../types';
import avatarPhoto from '../../assets/JWImage.jpg';
import habitiatPreview from '../../assets/projects/habitiat-preview.svg';
import attunePreview from '../../assets/projects/attune-preview.svg';
import mlLexicalSemanticsPreview from '../../assets/projects/ml-lexical-semantics-preview.svg';
import flourishPreview from '../../assets/projects/flourish-preview.svg';

export const initialProfile: Profile = {
  name: "Janiyah Wright",
  pronouns: "she/her",
  role: "Technology Consulting and Software Development",
  tagline: "Computer Science Graduate from The University of North Texas, experience in Artificial Intelligence,",
  bio: "I am a technology consultant building modern web applications, machine learning projects, and mobile apps. My work bridges systems architecture and thoughtful UI design, creating software that's fast, accessible, and genuinely useful.",
  location: "Dallas, Texas",
  phone: "469.231.4486",
  availability: {
    status: "available",
    text: "Available for Technology Consulting and Software Development"
  },
  email: "JaniyahWright26@gmail.com",
  github: "https://github.com/Niyah2004",
  linkedin: "https://www.linkedin.com/in/janiyah-wright/",
  //twitter: "https://twitter.com",
  resumeDownloadName: "Janiyah_Wright_Resume_2026.pdf",
  avatarUrl: avatarPhoto,
  stats: []
};

export const educationData: Education = {
  id: "unt-cs",
  degree: "Bachelor of Science",
  major: "Computer Science",
  institution: "University of North Texas",
  location: "Denton, TX",
  graduationDate: "May 2026",
  gpa: "3.9",
  accreditation: "ABET Accredited",
  certificates: [
    {
      id: "cert-ai",
      name: "Academic Certificate in Artificial Intelligence",
      focus: "Neural Architectures, ML Algorithms & Agentic Systems",
      // description: "Specialized curriculum covering machine learning algorithms, deep neural network architectures, natural language processing, model evaluation, and on-device inference.",
      badge: "Artificial Intelligence",
      skills: ["Machine Learning", "Neural Networks", "NLP", "TensorFlow.js", "PyTorch", "Model Evaluation", "Agentic Systems"]
    },
    {
      id: "cert-tech-comm",
      name: "Academic Certificate in Technical Communication",
      focus: "Engineering Documentation, Architecture Specs & Compliance Reporting",
      //description: "Rigorous focus on articulating complex technical concepts into executive presentations, system architecture diagrams, compliance audit reports, and user-centric documentation.",
      badge: "Technical Communication",
      skills: ["Architecture Specifications", "Compliance Auditing", "API Documentation", "Executive Reporting", "User Research"]
    }
  ],
  coursework: [
    "Artificial Intelligence & Machine Learning",
    "Data Structures & Algorithms",
    "Software Engineering & Architecture",
    "Database Systems & Relational Modeling",
    "Computer Systems & Operating Systems",
    "Technical Writing & Engineering Communication",
    "Network Security & Systems Administration"
  ],
  honors: [
    "3.9 Cumulative GPA",
    "Dean's List Honoree",
    "ABET Accredited Engineering Curriculum",
    "Academic Coach & IT Technician Campus Leadership"
  ]
};

export const skillsData: Skill[] = [
  // Frontend & Mobile (Original Skills Preserved)
  {
    id: "fe-react",
    name: "React & TypeScript",
    category: "frontend",
    highlight: "Component architecture, hooks, and strict TypeScript across two shipped apps (Habitiat, Flourish)",
    tags: ["React", "TypeScript", "Vite", "TanStack Query"]
  },
  {
    id: "fe-ui",
    name: "Tailwind CSS & Component Libraries",
    category: "frontend",
    highlight: "Responsive Tailwind layouts, Radix UI/shadcn primitives, and accessible forms with React Hook Form",
    tags: ["Tailwind CSS", "Radix UI", "shadcn/ui", "React Hook Form"]
  },
  {
    id: "mob-rn",
    name: "React Native & Expo",
    category: "frontend",
    highlight: "Expo Router navigation, local device storage, and gesture/haptic interactions for a wellness app",
    tags: ["React Native", "Expo", "Expo Router", "AsyncStorage"]
  },

  // Backend & APIs (Original Skill Preserved)
  {
    id: "be-node",
    name: "Node.js, Express & Supabase",
    category: "backend",
    highlight: "Lightweight Express APIs proxying external services, with Supabase for persistence",
    tags: ["Node.js", "Express", "Supabase", "REST APIs"]
  },

  // AI & Machine Learning (Original Skills Preserved)
  {
    id: "ai-ml",
    name: "Machine Learning (Python)",
    category: "ai_tools",
    highlight: "Word2Vec embeddings and PyTorch classifiers, evaluated with cross-validation on real NLP datasets",
    tags: ["Python", "PyTorch", "gensim", "scikit-learn"]
  },
  {
    id: "ai-tfjs",
    name: "On-Device ML (TensorFlow.js)",
    category: "ai_tools",
    highlight: "Client-side inference for privacy-first predictions with no server round-trip",
    tags: ["TensorFlow.js", "On-Device Inference", "Privacy-First ML"]
  },
  {
    id: "ai-gemini",
    name: "Generative AI Integration",
    category: "ai_tools",
    highlight: "Google Gemini API wired through a custom Express backend to power an in-app assistant",
    tags: ["Gemini API", "Google GenAI SDK", "Express Proxy"]
  },

  // Gen AI & Agentic AI (Added from Resume)
  {
    id: "ai-agentic",
    name: "Agentic AI System Design & Multi-Agent Workflows",
    category: "genai_agentic",
    highlight: "Architecting multi-agent workflow integrations, context engineering, dynamic agent tool invocation, and autonomous reasoning pipelines.",
    tags: ["Agentic AI", "Multi-Agent Workflows", "Context Engineering", "Autonomous Systems", "Tool Use"]
  },
  {
    id: "ai-rag-llm",
    name: "RAG & Enterprise LLM Integration",
    category: "genai_agentic",
    highlight: "Integrating LLMs (Gemini, OpenAI) with vector retrieval (RAG), structured output schemas, graceful no-key fallback systems, and production-ready endpoints.",
    tags: ["RAG", "LLM Integration", "Gemini API", "Vector Embeddings", "Express Proxy", "Structured Prompts"]
  },
  {
    id: "ai-prompt-eval",
    name: "Prompt Engineering & Model Evaluation",
    category: "genai_agentic",
    highlight: "Designing and hardening system prompts, context-window optimizations, adversarial robustness testing, and ML model evaluation metrics.",
    tags: ["Prompt Engineering", "Context Engineering", "Model Evaluation", "Adversarial Hardening", "PyTorch"]
  },

  // Risk & Compliance (Added from Resume)
  {
    id: "sec-frameworks",
    name: "Risk & Compliance",
    category: "risk_compliance",
    highlight: "Embedding security best practices and compliance standards (NIST CSF, PCI-DSS, SOC 2) throughout delivery lifecycles and infrastructure.",
    tags: ["NIST CSF", "PCI-DSS", "SOC 2", "Security Best Practices", "Control Evaluation"]
  },
  {
    id: "sec-auth-iam",
    name: "Authentication Architecture & Access Control (SSO, MFA, IAM)",
    category: "risk_compliance",
    highlight: "Evaluating enterprise authentication architectures (SSO, MFA, IAM policies), system availability, failover configurations, and network security controls.",
    tags: ["SSO", "MFA", "IAM Policies", "Access Control", "GCP & Azure Security", "Network Controls"]
  },
  {
    id: "sec-infra-audit",
    name: "Control Evaluation & Infrastructure Integrity Reviews",
    category: "risk_compliance",
    highlight: "Executing structured test scripts and technical reviews across 12+ infrastructure components, relational database schemas, and data integrity logic.",
    tags: ["Control Evaluation", "Database Schemas", "Data Integrity", "Compliance Auditing", "Risk Assessments"]
  },

  // Programming & Development (Added from Resume)
  {
    id: "dev-python-java",
    name: "Python, Java, C++ & MATLAB",
    category: "programming",
    highlight: "Building Python data pipelines and ML models, Java enterprise backend logic, C++ systems code, and MATLAB numerical computing.",
    tags: ["Python", "Java", "C++", "MATLAB", "OOP Architecture", "Data Pipelines"]
  },
  {
    id: "dev-sql-databases",
    name: "SQL & Relational Database Engineering",
    category: "programming",
    highlight: "Designing relational database schemas, writing optimized SQL queries, verifying data integrity validation logic, and integrating Supabase/PostgreSQL.",
    tags: ["SQL", "PostgreSQL", "Supabase", "Schema Design", "Data Integrity", "Git"]
  },

  // Cloud, DevOps & Testing (Added from Resume)
  {
    id: "cloud-containers",
    name: "Cloud Platforms & Containers (GCP, Azure, Docker)",
    category: "cloud_testing",
    highlight: "Assessing enterprise infrastructure across GCP, Azure, and IBM mainframes; deploying and managing containerized applications with Docker.",
    tags: ["Docker", "GCP", "Azure", "IBM Mainframe", "Hybrid Cloud"]
  },
  {
    id: "cloud-cicd",
    name: "CI/CD Pipelines & Version Control (Jenkins, GitLab CI, Azure DevOps)",
    category: "cloud_testing",
    highlight: "Automating build, test, and deployment workflows with Jenkins, GitLab CI, Azure DevOps, GitHub Actions, and Git version control.",
    tags: ["Jenkins", "GitLab CI", "Azure DevOps", "GitHub", "GitLab", "CI/CD Pipelines"]
  },
  {
    id: "testing-frameworks",
    name: "Automated Testing Frameworks (Selenium, Cypress, Playwright, TestNG)",
    category: "cloud_testing",
    highlight: "Designing and maintaining robust automated test suites with Selenium, Cypress, Playwright, and TestNG across web, mobile, and API surfaces.",
    tags: ["Playwright", "Cypress", "Selenium", "TestNG", "AI-Driven Testing"]
  },

  // Tools & Platforms (Added from Resume)
  {
    id: "tools-dev-platforms",
    name: "Developer Tools & Platforms (Firebase, TensorFlow.js, Jira, ServiceNow)",
    category: "tools_platforms",
    highlight: "Client-side on-device ML with TensorFlow.js, cloud backends with Firebase, enterprise service management with ServiceNow, Jira sprint workflows, Notion, and Slack.",
    tags: ["Firebase", "TensorFlow.js", "Jira", "ServiceNow", "Notion", "Slack"]
  },
  {
    id: "tools-bi-design",
    name: "BI, Analytics & UI Prototyping (Power BI, Tableau, Excel, Figma)",
    category: "tools_platforms",
    highlight: "Distilling complex data sets into executive-ready dashboards using Power BI, Tableau, and Excel; creating high-fidelity interactive UI/UX prototypes in Figma.",
    tags: ["Power BI", "Tableau", "Excel", "Figma", "Data Dashboards", "UI/UX Prototyping"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-habitiat",
    title: "Habitiat",
    tagline: "A gamified family habit & routine tracker with separate parent and kid views.",
    category: "web_apps",
    categoryLabel: "Web App & Family Productivity",
    featured: true,
    fallbackPoster: habitiatPreview,
    description: "A React + JavaScript Mobile/Web app that helps families build daily routines together. Parents create step-by-step tasks — morning routines, chores, practice sessions — while kids check off steps in a dedicated kid view, building streaks and getting celebratory feedback as they go.",
    techStack: ["React", "React Native", "Expo", "Node.js", "JavaScript", "Tailwind CSS", "React Navigation", "Firebase"],
    metrics: [],
    keyFeatures: [
      "Separate parent and kid views for managing vs. completing tasks",
      "Step-by-step task breakdown with per-task streak tracking",
      "Celebratory toast notifications when a task streak is completed",
      "Grid and calendar display modes for reviewing routines over time"
    ],
    architectureNotes: "Built with React and Expo for cross-platform support, with a Node.js backend. Firebase as Cloud database. The mobile interface uses React Native and React Navigation, while shared JavaScript logic keeps the codebase consistent across platforms."
  },
  {
    id: "proj-attune",
    title: "Attune",
    tagline: "A private, on-device self-care and cycle-tracking companion for women.",
    category: "mobile_fullstack",
    categoryLabel: "Mobile App & Wellness",
    featured: true,
    fallbackPoster: attunePreview,
    description: "A React Native (Expo) app offering menstrual cycle tracking and self-care tools for women, built with privacy as a first principle: predictions run on-device with TensorFlow.js and personal data stays in local, private storage instead of a cloud database.",
    techStack: ["React Native", "Expo", "TypeScript", "TensorFlow.js", "Expo Router", "AsyncStorage", "Supabase"],
    metrics: [],
    keyFeatures: [
      "On-device cycle prediction using TensorFlow.js — no data leaves the phone",
      "Private local storage architecture instead of a cloud backend",
      "Custom themed navigation (Oracle, Constellation, Altar, Explore) for a calming self-care experience",
      "Built with Expo Router and native gesture/haptic feedback"
    ],
    architectureNotes: "Uses @tensorflow/tfjs-react-native for on-device inference (LocalPredictor) and AsyncStorage-backed private storage (PrivateStorage) for  so cycle data never has to touch a server."
  },
  {
    id: "proj-ml-lexical-semantics",
    title: "Lexical Semantics Sentiment Classifier",
    tagline: "A Word2Vec + PyTorch neural network for 3-class tweet sentiment classification.",
    category: "ai_systems",
    categoryLabel: "AI & Machine Learning",
    featured: true,
    fallbackPoster: mlLexicalSemanticsPreview,
    description: "A machine learning coursework project exploring lexical semantics: custom Word2Vec embeddings trained on tweet text feed a PyTorch neural network that classifies tweets as negative, neutral, or positive, evaluated with stratified cross-validation on the TweetEval sentiment benchmark.",
    techStack: ["Python", "PyTorch", "gensim (Word2Vec)", "scikit-learn", "Jupyter Notebook", "TweetEval Dataset"],
    metrics: [],
    keyFeatures: [
      "Custom Word2Vec embeddings trained directly on the tweet corpus",
      "PyTorch neural network classifier with a trainable embedding layer",
      "Stratified k-fold cross-validation for robust accuracy/F1 evaluation",
      "Confusion matrix analysis across Negative / Neutral / Positive classes"
    ],
    architectureNotes: "Tokenized tweet text is embedded with a Word2Vec model (gensim), then fed into a PyTorch embedding + feed-forward classifier trained with Adam, evaluated with StratifiedKFold cross-validation and a held-out TweetEval test split."
  },
  {
    id: "proj-flourish",
    title: "Flourish",
    tagline: "A gamified fractional-trading and community investing app concept for women.",
    category: "web_apps",
    categoryLabel: "Fintech & AI",
    featured: true,
    fallbackPoster: flourishPreview,
    description: "A gamified personal finance app concept for women, combining fractional trading and community investing with educational pathways, Bilt & open-banking account sync, biometric security, and goal-based savings buckets — with a Gemini-powered assistant served through a lightweight Express backend.",
    techStack: ["React", "TypeScript", "Vite", "Express", "Supabase", "Google Gemini API", "TanStack Query", "Recharts"],
    metrics: [],
    keyFeatures: [
      "Fractional trading and community investment flows framed around learning, not just numbers",
      "Goal-based 'buckets' for savings targets with visual progress via Recharts",
      "Gemini API-powered assistant served through a small Express backend",
      "Designed around Bilt & open banking sync and biometric security concepts"
    ],
    architectureNotes: "A Vite + React + TypeScript frontend backed by a lightweight Express server that proxies calls to the Google Gemini API, with Supabase available for persistence and TanStack Query managing client-side data state."
  }
];

export const workHistoryData: WorkExperience[] = [
  {
    id: "work-1",
    role: "Technology Consultant - Security & Privacy",
    company: "Protiviti",
    location: "Dallas, Texas (Hybrid)",
    period: "July, 2026 — Present",
    isCurrent: true,
    type: "Consultant 1",
    description: "Evaluating technical controls, authentication architecture, and infrastructure security posture for enterprise clients across risk and compliance frameworks including NIST CSF, PCI-DSS, HIPAA, and SOC 2.",
    responsibilities: [
      "Executed structured test scripts and technical control evaluations across 12+ infrastructure components, relational database schemas, and data integrity logic.",
      "Assessed enterprise authentication architectures — SSO, MFA, and IAM policies — alongside system availability, failover configurations, and network security controls.",
      "Embedded security best practices and compliance requirements (NIST CSF, ISO 27001, PCI-DSS, SOC 2, HIPAA) throughout client delivery lifecycles and infrastructure reviews.",
      "Assessed enterprise infrastructure spanning GCP, Azure, and IBM mainframe environments as part of hybrid cloud risk assessments."
    ],
    impactMetrics: [
      "Structured technical reviews across 12+ infrastructure components per engagement",
      "Multi-framework compliance coverage: NIST CSF, ISO 27001, PCI-DSS, SOC 2"
    ],
    technologies: ["PCI-DSS", "Excel", "HIPAA", "Risk Assessments"]
  },
  {
    id: "work-2",
    role: "QA AI Automation Engineer",
    company: "Cognizant",
    location: "Plano, Tx (Onsite)",
    period: "May 2026 - June 2026",
    isCurrent: false,
    type: "Full-time",
    description: "Worked as a QA AI Automation Engineer, building automated test coverage and exploring AI-assisted quality workflows to support faster, more reliable software releases.",
    responsibilities: [
      "Designed and maintained automated test suites to validate application functionality across releases.",
      "Explored AI-assisted tools to speed up test case generation and defect triage.",
      "Collaborated with QA and engineering teams to flag regression risk areas before release.",
      "Documented testing processes and results to support consistent release quality."
    ],
    impactMetrics: [],
    technologies: ["React", "TypeScript", "Jest", "Test Automation", "AI Tooling"]
  },
  {
    id: "work-3",
    role: "Intuit Turbo Tax Product Support Expert",
    company: "Education at Work",
    location: "Remote",
    period: "January 2026 — May 2026",
    isCurrent: false,
    type: "Part-Time",
    description: "Provided product support to TurboTax customers as part of Education at Work's student staffing program with Intuit, helping filers resolve issues and understand the product during tax season.",
    responsibilities: [
      "Answered customer questions about TurboTax product features and the tax filing process.",
      "Troubleshot account, billing, and technical issues, escalating complex cases when needed.",
      "Maintained strong customer satisfaction and resolution-time standards during peak tax season.",
      "Documented recurring issues to help improve internal support resources."
    ],
    impactMetrics: [],
    technologies: ["Customer Support", "TurboTax", "Troubleshooting", "Slack"]
  },
  {
    id: "work-4",
    role: "Technology Consulting Intern",
    company: "Protiviti",
    location: "Dallas, Texas (Hybrid)",
    period: "May 2025 — July 2025",
    isCurrent: false,
    type: "Internship",
    description: "Supported the Technology Consulting practice on client engagements, gaining hands-on exposure to security, risk, and compliance work ahead of returning full-time as a Technology Consultant.",
    responsibilities: [
      "Assisted senior consultants with technical control testing and documentation across client engagements.",
      "Supported research and analysis on risk and compliance frameworks including NIST CSF and PCI-DSS.",
      "Shadowed client meetings and contributed to deliverables under the guidance of engagement teams.",
      "Built foundational knowledge of enterprise IT risk, security, and audit processes."
    ],
    impactMetrics: [],
    technologies: ["Risk Assessments", "Excel", "PCI-DSS", "Client Delivery"]
  },
  {
    id: "work-5",
    role: "Geek Squad Agent",
    company: "Best Buy",
    location: "Texas",
    period: "Summer 2023 — Fall 2023",
    isCurrent: false,
    type: "Part-Time",
    description: "Diagnosed and repaired customer technology — computers, phones, and peripherals — while helping customers understand their devices and available services.",
    responsibilities: [
      "Diagnosed hardware and software issues across a range of consumer devices.",
      "Performed repairs, setups, and data transfers for customer computers and devices.",
      "Explained technical issues and repair options to customers in clear, non-technical terms.",
      "Maintained accurate service tickets and followed up on repair status."
    ],
    impactMetrics: [],
    technologies: ["Hardware Diagnostics", "Troubleshooting", "Customer Service"]
  },
  {
    id: "work-6",
    role: "IT Help Desk Technician",
    company: "University of North Texas",
    location: "Denton, Texas",
    period: "August 2024— May 2025",
    isCurrent: false,
    type: "Part-Time",
    description: "Provided first-line IT support to students, faculty, and staff across university systems, accounts, and campus technology.",
    responsibilities: [
      "Resolved student and faculty tickets covering account access, Wi-Fi, and software issues.",
      "Walked users through step-by-step troubleshooting over phone, chat, and in person.",
      "Escalated unresolved technical issues to the appropriate university IT teams.",
      "Kept ticket documentation accurate and up to date in the help desk system."
    ],
    impactMetrics: [],
    technologies: ["Help Desk Support", "Ticketing Systems", "Troubleshooting", "Networking Basics"]
  },
  {
    id: "work-7",
    role: "Academic Coach",
    company: "University of North Texas",
    location: "Denton, Texas",
    period: "August 2025 — May 2025",
    isCurrent: false,
    type: "Part-Time",
    description: "Coached fellow students on study strategies, time management, and course material to help them stay on track academically.",
    responsibilities: [
      "Led one-on-one and small-group coaching sessions on study skills and time management.",
      "Helped students break down coursework and assignments into manageable plans.",
      "Tracked student progress and adjusted coaching approaches to individual needs.",
      "Connected students with additional campus resources when needed."
    ],
    impactMetrics: [],
    technologies: ["Academic Coaching", "Peer Mentoring", "Time Management"]
  }
];

