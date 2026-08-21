import { Profile, Skill, Project, WorkExperience, DeploymentGuide } from '../types';

export const initialProfile: Profile = {
  name: "Janiyah Wright",
  pronouns: "she/her",
  role: "Full-Stack Engineer & Consulting",
  tagline: "Computer Science Graduate from The University of North Texas, experience in Artificial Intelligence,",
  bio: "I am a full-stack engineer modern web applications, scalable cloud backends, and fluid user interfaces. My work bridges the gap between deep systems architecture and refined visual design, creating software that is blazing fast, accessible, and delightful to use.",
  shortBio: "Specializing in React, TypeScript, Node.js, and Cloud Infrastructure with an obsession for micro-interactions and performance.",
  location: "Dallas, Texas - New York (Open to Remote)",
  availability: {
    status: "available",
    text: "Available for Software Development and Consulting"
  },
  email: "janiyahwright26@gmail.com",
  github: "https://github.com/Niyah2004",
  linkedin: "https://www.linkedin.com/in/janiyah-wright/",
  //twitter: "https://twitter.com",
  resumeDownloadName: "Janiyah_Wright_Resume_2026.pdf",
  //avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
  stats: [
    {
      label: "Years of Experience",
      value: "1 Year",
      description: "Leading frontend & full-stack development"
    },
    {
      label: "Production Systems",
      value: "28+",
      description: "Shipped to over 1.2M active global users"
    },
    {
      label: "Average Performance",
      value: "99/100",
      description: "Lighthouse audit scores across web products"
    },
    {
      label: "Team Mentorship",
      value: "14+",
      description: "Engineers coached in TypeScript & System Design"
    }
  ]
};

export const skillsData: Skill[] = [
  // Frontend & UI
  {
    id: "fe-react",
    name: "React & Next.js",
    category: "frontend",
    level: 95,
    levelLabel: "Expert",
    icon: "Code2",
    experienceYears: 6,
    highlight: "Server Components, Suspense, Custom Hook Architecture, State Optimizations",
    tags: ["React 19", "Next.js 15", "Turbopack", "Zustand"]
  },
  {
    id: "fe-typescript",
    name: "TypeScript (Strict)",
    category: "frontend",
    level: 95,
    levelLabel: "Expert",
    icon: "FileCode2",
    experienceYears: 6,
    highlight: "Advanced Generics, Template Literal Types, AST parsing, Type-safe APIs",
    tags: ["Type Safety", "Zod", "Generics", "TS-Pattern"]
  },
  {
    id: "fe-tailwind",
    name: "Tailwind CSS & Design Systems",
    category: "frontend",
    level: 92,
    levelLabel: "Expert",
    icon: "Palette",
    experienceYears: 5,
    highlight: "Custom Theme Tokens, Responsive Grid/Flexbox Layouts, Micro-Interactions",
    tags: ["Tailwind v4", "CSS Variables", "Radix UI", "Accessibility"]
  },
  {
    id: "fe-motion",
    name: "Motion & Animation",
    category: "frontend",
    level: 88,
    levelLabel: "Advanced",
    icon: "Sparkles",
    experienceYears: 4,
    highlight: "Physics-based springs, SVG morphing, layout transitions, 60fps gestures",
    tags: ["Motion/React", "Layout Animations", "Gesture Handlers"]
  },

  // Backend & Cloud
  {
    id: "be-node",
    name: "Node.js & Express / NestJS",
    category: "backend",
    level: 90,
    levelLabel: "Expert",
    icon: "Server",
    experienceYears: 5,
    highlight: "REST & GraphQL APIs, Stream Processing, Middleware & Auth pipelines",
    tags: ["Node.js", "Express", "NestJS", "JWT / OAuth2"]
  },
  {
    id: "be-postgres",
    name: "PostgreSQL & Cloud Databases",
    category: "backend",
    level: 88,
    levelLabel: "Advanced",
    icon: "Database",
    experienceYears: 5,
    highlight: "Complex joins, indexing strategies, Prisma/Drizzle ORM, partition tuning",
    tags: ["PostgreSQL", "Drizzle ORM", "Redis", "Supabase"]
  },
  {
    id: "be-cloud",
    name: "Cloud Infrastructure & Docker",
    category: "cloud_devops",
    level: 85,
    levelLabel: "Advanced",
    icon: "Cloud",
    experienceYears: 4,
    highlight: "Containerized deployment, Google Cloud Run, AWS ECS/S3, CI/CD Actions",
    tags: ["Docker", "GCP", "AWS", "GitHub Actions"]
  },
  {
    id: "be-graphql",
    name: "GraphQL & API Gateways",
    category: "backend",
    level: 84,
    levelLabel: "Advanced",
    icon: "Network",
    experienceYears: 4,
    highlight: "Federated schemas, dataloader N+1 prevention, subscriptions",
    tags: ["Apollo", "GraphQL", "REST", "WebSockets"]
  },

  // Design & Architecture
  {
    id: "de-figma",
    name: "Figma & UI Prototyping",
    category: "design_ui",
    level: 86,
    levelLabel: "Advanced",
    icon: "Figma",
    experienceYears: 5,
    highlight: "Interactive prototypes, token hierarchies, auto-layout components",
    tags: ["Figma", "Design Tokens", "Wireframing", "User Testing"]
  },
  {
    id: "de-a11y",
    name: "Web Accessibility (WCAG AA)",
    category: "design_ui",
    level: 90,
    levelLabel: "Expert",
    icon: "Eye",
    experienceYears: 5,
    highlight: "Keyboard navigation, ARIA live regions, contrast auditing, screen readers",
    tags: ["WCAG 2.2", "ARIA", "Semantic HTML", "Lighthouse"]
  },

  // AI & Systems
  {
    id: "ai-gemini",
    name: "Generative AI Integration",
    category: "ai_tools",
    level: 86,
    levelLabel: "Advanced",
    icon: "Cpu",
    experienceYears: 2,
    highlight: "Structured JSON outputs, function calling, streaming tokens, prompt design",
    tags: ["Gemini 2.5", "LLM APIs", "Embeddings", "LangChain"]
  },
  {
    id: "ai-perf",
    name: "Performance & Web Vitals",
    category: "cloud_devops",
    level: 94,
    levelLabel: "Expert",
    icon: "Gauge",
    experienceYears: 6,
    highlight: "Core Web Vitals tuning (LCP < 1.2s, INP < 50ms, CLS 0.00), bundle splitting",
    tags: ["Web Vitals", "Tree Shaking", "Code Splitting", "CDN Caching"]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Aura Commerce Suite",
    tagline: "Ultra-fast headless commerce platform with real-time inventory and animated checkout.",
    category: "web_apps",
    categoryLabel: "Web App & E-Commerce",
    featured: true,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    fallbackPoster: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1200",
    videoCaption: "Live demo showcasing instant cart drawer, dynamic stock sync, and checkout flow.",
    liveUrl: "https://example.com/aura-commerce",
    githubUrl: "https://github.com/example/aura-commerce",
    description: "A headless commerce engine engineered for luxury lifestyle brands. Achieved sub-50ms page transitions with edge server routing, fluid cart animations, and integrated Stripe payment pipelines.",
    techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Redis", "Stripe API"],
    metrics: [
      { label: "Page Load Time", value: "0.45s" },
      { label: "Conversion Lift", value: "+38%" },
      { label: "Lighthouse Score", value: "100" }
    ],
    keyFeatures: [
      "Optimistic UI updates for immediate cart modifications",
      "Dynamic currency switching and tax calculation across 42 countries",
      "Full keyboard navigation and screen-reader compliant drawer components",
      "Edge-cached product catalog with instant search indexing"
    ],
    architectureNotes: "Constructed with clean domain-driven layers: Presentation components with Tailwind, Zustand state store, and edge-rendered API proxies for secure payment orchestration."
  },
  {
    id: "proj-2",
    title: "Synthetix AI Studio",
    tagline: "Collaborative generative workspace for prompt engineering and multi-modal synthesis.",
    category: "ai_systems",
    categoryLabel: "AI & Data Systems",
    featured: true,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    fallbackPoster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    videoCaption: "Demonstrating real-time streaming tokens, split-pane prompt comparison, and export.",
    liveUrl: "https://example.com/synthetix-ai",
    githubUrl: "https://github.com/example/synthetix-ai",
    description: "An interactive development environment for prompting, comparing, and chaining generative AI models. Includes streaming token visualizers, cost calculators, and reproducible parameter snapshots.",
    techStack: ["TypeScript", "React", "Gemini API", "Tailwind CSS", "WebSockets", "Node.js"],
    metrics: [
      { label: "Token Latency", value: "18ms" },
      { label: "Active Creators", value: "12,000+" },
      { label: "Workflow Efficiency", value: "3.2x" }
    ],
    keyFeatures: [
      "Real-time token streaming with syntax highlighting for Markdown & code",
      "Side-by-side prompt version diffing with latency and token-cost graphs",
      "Exportable SDK code generation in Python, TypeScript, and cURL",
      "Local browser storage persistence with zero data leakage"
    ],
    architectureNotes: "Server-Sent Events (SSE) pipe token chunks straight into a reactive virtualized viewport, preventing main-thread lag during long responses."
  },
  {
    id: "proj-3",
    title: "Verve Health Dashboard",
    tagline: "Predictive biometric telemetry platform with interactive timeline charts and patient triage.",
    category: "design_engineering",
    categoryLabel: "Data & UI/UX",
    featured: true,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    fallbackPoster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    videoCaption: "Interactive time-series telemetry scrubber with anomaly threshold alerts.",
    liveUrl: "https://example.com/verve-health",
    githubUrl: "https://github.com/example/verve-health",
    description: "A clinical diagnostic dashboard designed for remote patient monitoring. Visualizes high-frequency cardiac and metabolic trends with smooth interactive zoom and customizable alert triggers.",
    techStack: ["React", "D3.js", "TypeScript", "Tailwind CSS", "Web Workers", "IndexedDB"],
    metrics: [
      { label: "Data Points Handled", value: "500k/s" },
      { label: "Render Frame Rate", value: "60 FPS" },
      { label: "Diagnostic Speed", value: "+45%" }
    ],
    keyFeatures: [
      "Custom D3 canvas rendering pipeline offloaded to dedicated Web Workers",
      "Contextual clinical annotations with HIPAA-compliant encrypted export",
      "Rose-tinted dark and light themes calibrated for low-glare hospital tablets",
      "Instant multi-parameter correlation analysis and patient anomaly flags"
    ],
    architectureNotes: "Decoupled data ingestion from visualization rendering using Ring Buffers in Web Workers, ensuring silky 60fps graph scrubbing even under heavy telemetry streams."
  },
  {
    id: "proj-4",
    title: "Nova Design System",
    tagline: "Accessible multi-brand UI component library with automated Figma token synchronization.",
    category: "design_engineering",
    categoryLabel: "Design System & Tooling",
    featured: false,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    fallbackPoster: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1200",
    videoCaption: "Component showcase, interactive playground, and automatic contrast validation.",
    liveUrl: "https://example.com/nova-design-system",
    githubUrl: "https://github.com/example/nova-ui",
    description: "An enterprise design system powering 6 consumer-facing applications. Includes 40+ accessible React components, automated visual regression tests, and zero-runtime CSS tokens.",
    techStack: ["React 19", "Tailwind CSS", "Storybook", "TypeScript", "Figma API", "Playwright"],
    metrics: [
      { label: "Engineering Velocity", value: "+60%" },
      { label: "Accessibility Rate", value: "100% AA" },
      { label: "Shared Components", value: "48" }
    ],
    keyFeatures: [
      "Zero-runtime design tokens distributed via npm package and CDN",
      "Automated WCAG AA color contrast verification in CI/CD pipeline",
      "Interactive Storybook documentation with live editable JSX sandbox",
      "Comprehensive keyboard navigation and touch gesture support"
    ],
    architectureNotes: "Strict component encapsulation using compound component patterns, comprehensive TypeScript discriminated unions, and automated visual diff testing via Playwright."
  },
  {
    id: "proj-5",
    title: "Pulse Mobile Taskflow",
    tagline: "Cross-platform offline-first productivity companion with gestural Kanban boards.",
    category: "mobile_fullstack",
    categoryLabel: "Mobile & Full-Stack",
    featured: false,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    fallbackPoster: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=1200",
    videoCaption: "Smooth drag-and-drop board gestures and offline synchronization demo.",
    liveUrl: "https://example.com/pulse-tasks",
    githubUrl: "https://github.com/example/pulse-mobile",
    description: "A fast, distraction-free productivity app built with React Native and Web PWA capabilities. Features bi-directional sync, custom spring animations, and automated priority sorting.",
    techStack: ["React", "TypeScript", "PWA", "Tailwind CSS", "RxDB", "Service Workers"],
    metrics: [
      { label: "Offline Uptime", value: "100%" },
      { label: "App Size", value: "1.4 MB" },
      { label: "Sync Latency", value: "<120ms" }
    ],
    keyFeatures: [
      "Conflict-free replicated data types (CRDT) for flawless multi-device sync",
      "Haptic and gestural interactions tuned for iOS & Android screens",
      "Service Worker background sync for seamless offline drafting",
      "Custom markdown notes with inline checklists and task tags"
    ],
    architectureNotes: "Built around a local-first architecture where every mutation writes immediately to client storage, queuing background synchronizations automatically when online."
  },
  {
    id: "proj-6",
    title: "Kinetics Financial Engine",
    tagline: "High-throughput algorithmic portfolio balancer with live risk telemetry.",
    category: "web_apps",
    categoryLabel: "Fintech & Data",
    featured: false,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    fallbackPoster: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
    videoCaption: "Live scenario testing and Monte Carlo simulation visualizer.",
    liveUrl: "https://example.com/kinetics-fintech",
    githubUrl: "https://github.com/example/kinetics-engine",
    description: "A wealth management simulation tool executing Monte Carlo stress tests directly in the browser using WebAssembly. Empowers financial advisors to model macroeconomic shocks in real time.",
    techStack: ["TypeScript", "React", "Rust / WASM", "Tailwind CSS", "Recharts", "Node.js"],
    metrics: [
      { label: "Simulation Speed", value: "10,000 runs in 0.2s" },
      { label: "Accuracy Rate", value: "99.98%" },
      { label: "Assets Modeled", value: "$400M+" }
    ],
    keyFeatures: [
      "WebAssembly compilation for raw high-performance numerical computing",
      "Dynamic heatmaps and confidence interval charts",
      "Exportable audit-ready PDF reports formatted for client presentations",
      "Multi-asset covariance calculation matrix"
    ],
    architectureNotes: "Rust computational core compiled to WebAssembly, paired with a React presentation layer for instant responsive UI interactions."
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
    technologies: ["PCI-DSS", "Excel", "HIPAA", "Risk Assessments",]
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
    description: "Built high-traffic web applications, customer portals, and interactive digital experiences for Fortune 500 retail and media clients.",
    responsibilities: [
      "Engineered bespoke e-commerce checkouts and catalog navigators handling over $45M in annual Gross Merchandise Value (GMV).",
      "Implemented physics-based UI transitions and micro-animations, directly boosting session duration by 28% and customer engagement.",
      "Audited and remediated web accessibility across client properties, achieving 100% WCAG 2.1 AA compliance.",
      "Authored custom Vite and Webpack optimization plugins to eliminate unused CSS and split vendor bundles effectively."
    ],
    impactMetrics: [
      "$45M+ GMV processed through rebuilt checkout",
      "+28% average user session duration",
      "100% WCAG 2.1 AA compliance certification"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "GraphQL", "Jest", "Storybook", "AWS"]
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
    description: "Developed HIPAA-compliant patient telemedicine web applications, provider dashboards, and automated appointment scheduling systems.",
    responsibilities: [
      "Built responsive, accessible React patient intake workflows with strict schema validation and biometric file uploads.",
      "Designed Express.js and PostgreSQL backend services with automated token-based authorization and encrypted database fields.",
      "Integrated Twilio WebRTC video consultation rooms with real-time in-call chat and automated session logging.",
      "Participated in on-call rotation maintaining 99.98% platform service uptime for clinical operations."
    ],
    impactMetrics: [
      "Handled 200+ Support Tickets"
    ],
    technologies: ["Slack", "React", "Node.js", "Express", "PostgreSQL", "Twilio WebRTC", "Redis", "Docker"]
  },
  {
    id: "work-4",
    role: "Software Engineering Intern & Associate",
    company: "Apex Creative Labs",
    companyBadge: "ACL",
    companyUrl: "https://example.com",
    location: "Atlanta, GA",
    period: "2018 — 2019",
    isCurrent: false,
    type: "Contract",
    description: "Built client portfolio websites, interactive landing pages, and internal CMS tooling with modern web standards.",
    responsibilities: [
      "Converted high-fidelity Figma UI/UX designs into pixel-perfect, responsive HTML5/CSS3/JavaScript components.",
      "Integrated headless CMS backends (Contentful, Sanity) allowing marketing teams to update content autonomously.",
      "Optimized digital assets, vector SVGs, and responsive images to minimize initial page weight."
    ],
    impactMetrics: [
      "Delivered 12 client web projects on schedule",
      "Achieved average 95+ Google PageSpeed Insights ratings"
    ],
    technologies: ["HTML5", "CSS3 / Sass", "JavaScript (ES6+)", "React", "REST APIs", "Git"]
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
