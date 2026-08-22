import { Profile, Skill, Project, WorkExperience, DeploymentGuide, Education } from '../types';
import avatarPhoto from '../../assets/JWImage.jpg';
import habitiatPreview from '../../assets/projects/habitiat-preview.svg';
import attunePreview from '../../assets/projects/attune-preview.svg';
import mlLexicalSemanticsPreview from '../../assets/projects/ml-lexical-semantics-preview.svg';
import flourishPreview from '../../assets/projects/flourish-preview.svg';

export const initialProfile: Profile = {
  name: "Janiyah Wright",
  pronouns: "she/her",
  role: "Full-Stack Engineer & Consulting",
  tagline: "Computer Science Graduate from The University of North Texas, experience in Artificial Intelligence,",
  bio: "I am a full-stack engineer building modern web applications, machine learning projects, and mobile apps. My work bridges systems architecture and thoughtful UI design, creating software that's fast, accessible, and genuinely useful.",
  shortBio: "Specializing in React, TypeScript, Python/ML, and React Native, with hands-on experience shipping real projects end-to-end.",
  location: "Dallas, Texas - New York (Open to Remote)",
  phone: "469.231.4486",
  availability: {
    status: "available",
    text: "Available for Software Development and Consulting"
  },
  email: "JaniyahWright26@gmail.com",
  github: "https://github.com/Niyah2004",
  linkedin: "https://www.linkedin.com/in/janiyah-wright/",
  //twitter: "https://twitter.com",
  resumeDownloadName: "Janiyah_Wright_Resume_2026.pdf",
  avatarUrl: avatarPhoto,
  stats: [
    {
      label: "Years of Experience",
      value: "<1 Year",
      description: "Hands-on experience from internships, coursework, and shipped personal projects"
    },
    {
      label: "Academic GPA",
      value: "3.9 / 4.0",
      description: "BS in Computer Science (ABET Accredited) from University of North Texas"
    },
    {
      label: "Projects Shipped",
      value: "4",
      description: "Web, mobile, and machine learning projects built end-to-end"
    },
    {
      label: "Support Tickets Resolved",
      value: "200+",
      description: "Intuit TurboTax product support via Education at Work"
    },
    {
      label: "Sentiment Model Accuracy",
      value: "59.6%",
      description: "3-class tweet sentiment classifier (Word2Vec + PyTorch)"
    }
  ]
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
      description: "Specialized curriculum covering machine learning algorithms, deep neural network architectures, natural language processing, model evaluation, and on-device inference.",
      badge: "Artificial Intelligence",
      skills: ["Machine Learning", "Neural Networks", "NLP", "TensorFlow.js", "PyTorch", "Model Evaluation", "Agentic Systems"]
    },
    {
      id: "cert-tech-comm",
      name: "Academic Certificate in Technical Communication",
      focus: "Engineering Documentation, Architecture Specs & Compliance Reporting",
      description: "Rigorous focus on articulating complex technical concepts into executive presentations, system architecture diagrams, compliance audit reports, and user-centric documentation.",
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
    level: 75,
    levelLabel: "Advanced",
    icon: "Code2",
    experienceYears: 2,
    highlight: "Component architecture, hooks, and strict TypeScript across two shipped apps (Habitiat, Flourish)",
    tags: ["React", "TypeScript", "Vite", "TanStack Query"]
  },
  {
    id: "fe-ui",
    name: "Tailwind CSS & Component Libraries",
    category: "frontend",
    level: 70,
    levelLabel: "Proficient",
    icon: "Palette",
    experienceYears: 2,
    highlight: "Responsive Tailwind layouts, Radix UI/shadcn primitives, and accessible forms with React Hook Form",
    tags: ["Tailwind CSS", "Radix UI", "shadcn/ui", "React Hook Form"]
  },
  {
    id: "mob-rn",
    name: "React Native & Expo",
    category: "frontend",
    level: 65,
    levelLabel: "Proficient",
    icon: "Sparkles",
    experienceYears: 1,
    highlight: "Expo Router navigation, local device storage, and gesture/haptic interactions for a wellness app",
    tags: ["React Native", "Expo", "Expo Router", "AsyncStorage"]
  },

  // Backend & APIs (Original Skill Preserved)
  {
    id: "be-node",
    name: "Node.js, Express & Supabase",
    category: "backend",
    level: 60,
    levelLabel: "Proficient",
    icon: "Server",
    experienceYears: 1,
    highlight: "Lightweight Express APIs proxying external services, with Supabase for persistence",
    tags: ["Node.js", "Express", "Supabase", "REST APIs"]
  },

  // AI & Machine Learning (Original Skills Preserved)
  {
    id: "ai-ml",
    name: "Machine Learning (Python)",
    category: "ai_tools",
    level: 68,
    levelLabel: "Proficient",
    icon: "Cpu",
    experienceYears: 2,
    highlight: "Word2Vec embeddings and PyTorch classifiers, evaluated with cross-validation on real NLP datasets",
    tags: ["Python", "PyTorch", "gensim", "scikit-learn"]
  },
  {
    id: "ai-tfjs",
    name: "On-Device ML (TensorFlow.js)",
    category: "ai_tools",
    level: 55,
    levelLabel: "Proficient",
    icon: "Gauge",
    experienceYears: 1,
    highlight: "Client-side inference for privacy-first predictions with no server round-trip",
    tags: ["TensorFlow.js", "On-Device Inference", "Privacy-First ML"]
  },
  {
    id: "ai-gemini",
    name: "Generative AI Integration",
    category: "ai_tools",
    level: 62,
    levelLabel: "Proficient",
    icon: "Network",
    experienceYears: 1,
    highlight: "Google Gemini API wired through a custom Express backend to power an in-app assistant",
    tags: ["Gemini API", "Google GenAI SDK", "Express Proxy"]
  },

  // Gen AI & Agentic AI (Added from Resume)
  {
    id: "ai-agentic",
    name: "Agentic AI System Design & Multi-Agent Workflows",
    category: "genai_agentic",
    level: 92,
    levelLabel: "Expert",
    icon: "Sparkles",
    experienceYears: 2,
    highlight: "Architecting multi-agent workflow integrations, context engineering, dynamic agent tool invocation, and autonomous reasoning pipelines.",
    tags: ["Agentic AI", "Multi-Agent Workflows", "Context Engineering", "Autonomous Systems", "Tool Use"]
  },
  {
    id: "ai-rag-llm",
    name: "RAG & Enterprise LLM Integration",
    category: "genai_agentic",
    level: 90,
    levelLabel: "Expert",
    icon: "Cpu",
    experienceYears: 2,
    highlight: "Integrating LLMs (Gemini, OpenAI) with vector retrieval (RAG), structured output schemas, graceful no-key fallback systems, and production-ready endpoints.",
    tags: ["RAG", "LLM Integration", "Gemini API", "Vector Embeddings", "Express Proxy", "Structured Prompts"]
  },
  {
    id: "ai-prompt-eval",
    name: "Prompt Engineering & Model Evaluation",
    category: "genai_agentic",
    level: 88,
    levelLabel: "Advanced",
    icon: "Network",
    experienceYears: 2,
    highlight: "Designing and hardening system prompts, context-window optimizations, adversarial robustness testing, and ML model evaluation metrics.",
    tags: ["Prompt Engineering", "Context Engineering", "Model Evaluation", "Adversarial Hardening", "PyTorch"]
  },

  // Risk & Compliance (Added from Resume)
  {
    id: "sec-frameworks",
    name: "Risk & Compliance (NIST CSF, ISO 27001, PCI-DSS, SOC 2)",
    category: "risk_compliance",
    level: 90,
    levelLabel: "Expert",
    icon: "ShieldCheck",
    experienceYears: 2,
    highlight: "Embedding security best practices and compliance standards (NIST CSF, ISO 27001, PCI-DSS, SOC 2) throughout delivery lifecycles and infrastructure.",
    tags: ["NIST CSF", "ISO 27001", "PCI-DSS", "SOC 2", "Security Best Practices", "Control Evaluation"]
  },
  {
    id: "sec-auth-iam",
    name: "Authentication Architecture & Access Control (SSO, MFA, IAM)",
    category: "risk_compliance",
    level: 86,
    levelLabel: "Advanced",
    icon: "Lock",
    experienceYears: 2,
    highlight: "Evaluating enterprise authentication architectures (SSO, MFA, IAM policies), system availability, failover configurations, and network security controls.",
    tags: ["SSO", "MFA", "IAM Policies", "Access Control", "GCP & Azure Security", "Network Controls"]
  },
  {
    id: "sec-infra-audit",
    name: "Control Evaluation & Infrastructure Integrity Reviews",
    category: "risk_compliance",
    level: 85,
    levelLabel: "Advanced",
    icon: "CheckCircle2",
    experienceYears: 2,
    highlight: "Executing structured test scripts and technical reviews across 12+ infrastructure components, relational database schemas, and data integrity logic.",
    tags: ["Control Evaluation", "Database Schemas", "Data Integrity", "Compliance Auditing", "Risk Assessments"]
  },

  // Programming & Development (Added from Resume)
  {
    id: "dev-python-java",
    name: "Python, Java, C++ & MATLAB",
    category: "programming",
    level: 90,
    levelLabel: "Expert",
    icon: "FileCode2",
    experienceYears: 3,
    highlight: "Building Python data pipelines and ML models, Java enterprise backend logic, C++ systems code, and MATLAB numerical computing.",
    tags: ["Python", "Java", "C++", "MATLAB", "OOP Architecture", "Data Pipelines"]
  },
  {
    id: "dev-sql-databases",
    name: "SQL & Relational Database Engineering",
    category: "programming",
    level: 85,
    levelLabel: "Advanced",
    icon: "Database",
    experienceYears: 2,
    highlight: "Designing relational database schemas, writing optimized SQL queries, verifying data integrity validation logic, and integrating Supabase/PostgreSQL.",
    tags: ["SQL", "PostgreSQL", "Supabase", "Schema Design", "Data Integrity", "Git"]
  },

  // Cloud, DevOps & Testing (Added from Resume)
  {
    id: "cloud-containers",
    name: "Cloud Platforms & Containers (GCP, Azure, Docker, K8s)",
    category: "cloud_testing",
    level: 84,
    levelLabel: "Advanced",
    icon: "Cloud",
    experienceYears: 2,
    highlight: "Assessing enterprise infrastructure across GCP, Azure, and IBM mainframes; deploying and managing containerized applications with Docker and Kubernetes.",
    tags: ["Docker", "Kubernetes", "GCP", "Azure", "IBM Mainframe", "Hybrid Cloud"]
  },
  {
    id: "cloud-cicd",
    name: "CI/CD Pipelines & Version Control (Jenkins, GitLab CI, Azure DevOps)",
    category: "cloud_testing",
    level: 86,
    levelLabel: "Advanced",
    icon: "Workflow",
    experienceYears: 2,
    highlight: "Automating build, test, and deployment workflows with Jenkins, GitLab CI, Azure DevOps, GitHub Actions, and Git version control.",
    tags: ["Jenkins", "GitLab CI", "Azure DevOps", "GitHub", "GitLab", "CI/CD Pipelines"]
  },
  {
    id: "testing-frameworks",
    name: "Automated Testing Frameworks (Selenium, Cypress, Playwright, TestNG)",
    category: "cloud_testing",
    level: 88,
    levelLabel: "Advanced",
    icon: "Gauge",
    experienceYears: 2,
    highlight: "Designing and maintaining robust automated test suites with Selenium, Appium, Cypress, Playwright, and TestNG across web, mobile, and API surfaces.",
    tags: ["Playwright", "Cypress", "Selenium", "Appium", "TestNG", "AI-Driven Testing"]
  },

  // Tools & Platforms (Added from Resume)
  {
    id: "tools-dev-platforms",
    name: "Developer Tools & Platforms (Firebase, TensorFlow.js, Jira, ServiceNow)",
    category: "tools_platforms",
    level: 86,
    levelLabel: "Advanced",
    icon: "Wrench",
    experienceYears: 2,
    highlight: "Client-side on-device ML with TensorFlow.js, cloud backends with Firebase, enterprise service management with ServiceNow, Jira sprint workflows, Notion, and Slack.",
    tags: ["Firebase", "TensorFlow.js", "Jira", "ServiceNow", "Notion", "Slack"]
  },
  {
    id: "tools-bi-design",
    name: "BI, Analytics & UI Prototyping (Power BI, Tableau, Excel, Figma)",
    category: "tools_platforms",
    level: 88,
    levelLabel: "Advanced",
    icon: "BarChart3",
    experienceYears: 2,
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
    githubUrl: "https://github.com/Niyah2004/habit-sparkle-guide",
    description: "A React + TypeScript web app that helps families build daily routines together. Parents create step-by-step tasks — morning routines, chores, practice sessions — while kids check off steps in a dedicated kid view, building streaks and getting celebratory feedback as they go.",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI / shadcn", "React Hook Form", "TanStack Query"],
    metrics: [],
    keyFeatures: [
      "Separate parent and kid views for managing vs. completing tasks",
      "Step-by-step task breakdown with per-task streak tracking",
      "Celebratory toast notifications when a task streak is completed",
      "Grid and calendar display modes for reviewing routines over time"
    ],
    architectureNotes: "Built with Vite, React, and TypeScript, using a shadcn/Radix UI component layer for accessible primitives and TanStack Query for data state management."
  },
  {
    id: "proj-attune",
    title: "Attune",
    tagline: "A private, on-device self-care and cycle-tracking companion for women.",
    category: "mobile_fullstack",
    categoryLabel: "Mobile App & Wellness",
    featured: true,
    fallbackPoster: attunePreview,
    githubUrl: "https://github.com/Niyah2004/Attune",
    description: "A React Native (Expo) app offering menstrual cycle tracking and self-care tools for women, built with privacy as a first principle: predictions run on-device with TensorFlow.js and personal data stays in local, private storage instead of a cloud database.",
    techStack: ["React Native", "Expo", "TypeScript", "TensorFlow.js", "Expo Router", "AsyncStorage"],
    metrics: [],
    keyFeatures: [
      "On-device cycle prediction using TensorFlow.js — no data leaves the phone",
      "Private local storage architecture instead of a cloud backend",
      "Custom themed navigation (Oracle, Constellation, Altar, Explore) for a calming self-care experience",
      "Built with Expo Router and native gesture/haptic feedback"
    ],
    architectureNotes: "Uses @tensorflow/tfjs-react-native for on-device inference (LocalPredictor) and AsyncStorage-backed private storage (PrivateStorage) so cycle data never has to touch a server."
  },
  {
    id: "proj-ml-lexical-semantics",
    title: "Lexical Semantics Sentiment Classifier",
    tagline: "A Word2Vec + PyTorch neural network for 3-class tweet sentiment classification.",
    category: "ai_systems",
    categoryLabel: "AI & Machine Learning",
    featured: true,
    fallbackPoster: mlLexicalSemanticsPreview,
    githubUrl: "https://github.com/Niyah2004/Machine-Learning-",
    description: "A machine learning coursework project exploring lexical semantics: custom Word2Vec embeddings trained on tweet text feed a PyTorch neural network that classifies tweets as negative, neutral, or positive, evaluated with stratified cross-validation on the TweetEval sentiment benchmark.",
    techStack: ["Python", "PyTorch", "gensim (Word2Vec)", "scikit-learn", "Jupyter Notebook", "TweetEval Dataset"],
    metrics: [
      { label: "Test Accuracy", value: "59.6%" },
      { label: "Test F1 (weighted)", value: "58.7%" },
      { label: "Test Examples", value: "12,284" }
    ],
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
    githubUrl: "https://github.com/Niyah2004/Flourish-Wealth-Trading-",
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
    companyBadge: "LDS",
    companyUrl: "https://example.com",
    location: "Dallas, Texas (Hybrid)",
    period: "July, 2026 — Present",
    isCurrent: true,
    type: "Consultant 1",
    description: "Directing architectural decisions and leading a cross-functional squad of 7 engineers building next-generation enterprise SaaS products and design systems.",
    responsibilities: [
      "Spearheaded the migration of legacy monolith to modular React 19 / Next.js micro-frontends, reducing deployment cycle times by 55%.",
      "Architected real-time collaboration engines using WebSockets and optimistic caching, supporting 15,000+ concurrent enterprise users.",
      "Established strict TypeScript and design system standards across 4 core product repositories, raising test coverage from 64% to 92%.",
      "Mentored 6 junior and mid-level engineers through bi-weekly 1-on-1s, code architecture reviews, and technical brown-bag sessions."
    ],
    impactMetrics: [
      "55% reduction in release deployment time",
      "40% improvement in First Contentful Paint (FCP)",
      "Zero high-severity production regressions across 18 months"
    ],
    technologies: ["PCI-DSS", "Excel", "HIPAA", "Risk Assessments"]
  },
  {
    id: "work-2",
    role: "QA AI Automation Engineer",
    company: "Cognizant",
    companyBadge: "VI",
    companyUrl: "https://example.com",
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
    companyBadge: "BHL",
    companyUrl: "https://example.com",
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
    impactMetrics: [
      "Handled 200+ Support Tickets"
    ],
    technologies: ["Customer Support", "TurboTax", "Troubleshooting", "Slack"]
  },
  {
    id: "work-4",
    role: "Geek Squad Agent",
    company: "Best Buy",
    companyBadge: "GS",
    companyUrl: "https://example.com",
    location: "Texas",
    period: "Fall 2024 — Spring 2025",
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
    id: "work-5",
    role: "IT Help Desk Technician",
    company: "University of North Texas",
    companyBadge: "UNT",
    companyUrl: "https://example.com",
    location: "Denton, Texas",
    period: "Fall 2023 — Spring 2024",
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
    id: "work-6",
    role: "Academic Coach",
    company: "University of North Texas",
    companyBadge: "UNT",
    companyUrl: "https://example.com",
    location: "Denton, Texas",
    period: "Fall 2022 — Spring 2023",
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

export const deploymentGuides: DeploymentGuide[] = [
  {
    id: "guide-vercel",
    title: "Deploy to Vercel (Recommended)",
    icon: "Zap",
    difficulty: "Beginner",
    estimatedTime: "2 minutes",
    steps: [
      {
        step: 1,
        title: "Export or Push Code to GitHub",
        command: "git push origin main",
        explanation: "Push your repository to GitHub, GitLab, or Bitbucket."
      },
      {
        step: 2,
        title: "Import into Vercel",
        explanation: "Go to vercel.com, click 'Add New Project', and select your repository. Vercel will automatically detect the Vite React framework."
      },
      {
        step: 3,
        title: "Click Deploy",
        command: "npm run build",
        explanation: "Vercel will run the build command and generate your public live URL (e.g., https://your-name-portfolio.vercel.app)."
      }
    ],
    freeTierNote: "Free forever on Vercel Hobby plan with global CDN and automatic SSL certificate."
  },
  {
    id: "guide-netlify",
    title: "Deploy to Netlify",
    icon: "CloudRain",
    difficulty: "Beginner",
    estimatedTime: "2 minutes",
    steps: [
      {
        step: 1,
        title: "Build the Static Dist Folder",
        command: "npm run build",
        explanation: "This compiles all TypeScript, React, and CSS into a clean, standalone 'dist' folder."
      },
      {
        step: 2,
        title: "Drag & Drop or Connect Git",
        explanation: "Log in to netlify.com. You can connect your GitHub repo or simply drag and drop the 'dist' folder directly into Netlify Drop."
      },
      {
        step: 3,
        title: "Publish",
        explanation: "Netlify provisions custom domains, instant HTTPS, and continuous deployments upon git push."
      }
    ],
    freeTierNote: "100% Free on Netlify Starter tier with 100GB bandwidth per month."
  },
  {
    id: "guide-ghpages",
    title: "Deploy to GitHub Pages",
    icon: "Github",
    difficulty: "Intermediate",
    estimatedTime: "3 minutes",
    steps: [
      {
        step: 1,
        title: "Set base path in vite.config.ts (if using repository subfolder)",
        command: "export default defineConfig({ base: '/your-repo-name/' })",
        explanation: "If hosting at username.github.io/repo-name, set the base path. If using a custom root domain, keep base as '/'."
      },
      {
        step: 2,
        title: "Deploy with gh-pages or GitHub Actions",
        command: "npx gh-pages -d dist",
        explanation: "Build the project with 'npm run build' and push the dist folder to the gh-pages branch."
      },
      {
        step: 3,
        title: "Enable in Repository Settings",
        explanation: "Go to Repo Settings > Pages > Source > select 'Deploy from branch' (gh-pages)."
      }
    ],
    freeTierNote: "Completely free hosting provided natively by GitHub."
  },
  {
    id: "guide-cloudflare",
    title: "Deploy to Cloudflare Pages",
    icon: "ShieldCheck",
    difficulty: "Beginner",
    estimatedTime: "2 minutes",
    steps: [
      {
        step: 1,
        title: "Connect Cloudflare Pages to Git",
        explanation: "In Cloudflare dashboard, navigate to Workers & Pages > Create application > Pages > Connect to Git."
      },
      {
        step: 2,
        title: "Configure Build Settings",
        command: "Framework preset: Vite | Build command: npm run build | Output: dist",
        explanation: "Cloudflare will automatically compile and distribute your portfolio to 300+ edge locations worldwide."
      }
    ],
    freeTierNote: "Unlimited bandwidth and 500 builds per month on the Cloudflare Free tier."
  }
];
