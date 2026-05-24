export const portfolioData = {
  name: "Nandini Patel",
  initials: "NP",
  tagline: "Hi, I'm Nandini",
  roles: ["Software Engineer", "Full Stack Developer", "Data Engineer", "AI Engineer"],
  summary:
    "Full-stack engineer with a passion for intelligent systems. I build robust web applications, design data pipelines, and ship AI - powered features. From React frontends to cloud infrastructure, I turn complex problems into clean, scalable solutions.",
  location: "Houston, TX",
  email: "nandinipankajbhaipatel@gmail.com",
  github: "https://github.com/NANDINI2713",
  linkedin: "https://www.linkedin.com/in/nandinipbpatel",
  resume: "/Nandini_Patel.pdf",

  stats: [
    { label: "Years Experience", value: 2 },
    { label: "Projects Completed", value: 12 },
    { label: "Technologies Mastered", value: 20 },
  ],

  about: {
    bio: "I'm a software engineer who wears many hats: full-stack developer, data engineer, and AI builder. My work spans building responsive web apps, architecting data pipelines, and integrating machine learning into real products. I care deeply about clean code, system reliability, and user experience.",
    extended:
      "Whether I'm designing a React frontend, optimizing a SQL pipeline, or fine-tuning a model, I bring the same mindset: ship things that work, and make them easy to maintain. I'm always exploring the space where software engineering meets data and AI.",
    highlights: ["Open Source Contributor", "Problem Solver", "Tech Speaker", "Lifelong Learner"],
  },

  experience: [
    {
      company: "Electracast Media",
      companyUrl: "https://www.linkedin.com/company/electracast-media/",
      role: "Software Engineer Intern - Data Pipeline & IoT Edge Systems",
      start: "Aug 2025",
      end: "Dec 2025",
      bullets: [
        "Architected road-to-cloud pipelines processing 2M+ sensor images on AWS",
        "Achieved sub-80ms IoT packet assembly across 6 edge sensors",
        "Sustained 99.95% accuracy with PostgreSQL schemas & Redis caching",
        "Boosted vehicle ID throughput 4x via OpenCV detection integration",
        "Cut release cycles from 3 days → 5 hours with Docker containerization",
        "Resolved 8 critical AWS throughput blockers via Python profiling",
      ],
    },
    {
      company: "ArcelorMittal Nippon Steel",
      companyUrl: "https://www.linkedin.com/company/arcelormittal-nippon-steel-india/",
      role: "Software Engineer - ML Integration & Computer Vision",
      start: "Feb 2024",
      end: "Jun 2024",
      bullets: [
        "Lifted vehicle match accuracy 3x by embedding CV models into toll workflows",
        "Sustained 98%+ image accuracy for 5M images/day with OpenCV preprocessing",
        "Slashed ML inference latency from 420ms → 90ms via NestJS optimization",
        "Indexed 900K+ vehicle records in MongoDB across 4 production systems",
        "Maintained 99.9% uptime with Docker & GitHub Actions canary rollouts",
        "Caught 11 model regressions pre-production via automated Python eval suites",
      ],
    },
    {
      company: "PixML Solutions",
      companyUrl: "https://www.linkedin.com/company/pixml/",
      role: "Software Engineer - Payments & Cloud Infrastructure",
      start: "Jan 2023",
      end: "Jan 2024",
      bullets: [
        "Built NestJS & Node.js REST APIs serving 3 high-volume toll payment systems",
        "Scaled AWS EC2 & S3 storage to handle 6M+ daily high-res asset transfers",
        "Dropped p95 DB read latency from 310ms → 55ms via PostgreSQL optimization",
        "Enforced 99.9% billing precision across 5 integrations with TypeScript modules",
        "Handled 40K+ live events/hour with Redis pub-sub infraction alert queues",
        "Sustained 99.8% uptime across 4 environments with Linux cron monitoring",
      ],
    },
  ],

  skills: {
    Languages: ["Python", "TypeScript","JavaScript", "Java", "C++", "SQL", "Bash"],
    "Frameworks & APIs": ["FastAPI", "NestJS", "Node.js", "Next.js", "React", "Tailwind CSS"],
    "ML & AI": ["OpenCV", "scikit-learn", "TensorFlow", "PyTorch", "LangChain", "Computer Vision"],
    "Data & Pipelines": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Apache Kafka", "Apache Spark", "Apache Airflow", "ETL Pipelines"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Feature Engineering"],
    "Cloud & DevOps": ["AWS (EC2, S3)", "Docker", "GitHub Actions", "CI/CD Pipelines", "Linux"],
  },

  education: [
    {
      institution: "University of Houston, Clear Lake",
      degree: "M.S. Computer Science",
      year: "May 2026",
      gpa: "3.8 / 4.0",
      focus: ["AI & Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", "Data Engineering"],
    },
    {
      institution: "Gujarat Technological University",
      degree: "B.E. Computer Engineering",
      year: "May 2024",
      gpa: "3.9 / 4.0",
      focus: ["Software Systems", "Database Systems", "Computer Networks", "Algorithms & Data Structures", "Operating Systems"],
    },
  ],

  achievements: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "Oct 2025",
      logo: "oracle",
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Developer Professional",
      issuer: "Oracle",
      date: "Oct 2025",
      logo: "oracle",
    },
    {
      title: "Introduction to Prompt Engineering for Generative AI",
      issuer: "LinkedIn",
      date: "Jul 2025",
      logo: "linkedin",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn",
      date: "Jul 2025",
      logo: "linkedin",
    },
    {
      title: "AI Productivity Hacks to Reimagine Your Workday and Career",
      issuer: "LinkedIn",
      date: "Jul 2025",
      logo: "linkedin",
    },
  ],

  projects: [
    {
      name: "Agentic RAG Chatbot + MCP",
      description:
        "Production chatbot routing queries across 4 specialized LangGraph agents, with Pinecone vector retrieval, Cohere reranking, and MCP server integration for Claude Desktop.",
      tags: ["LangGraph", "Groq LLaMA", "Pinecone", "Cohere", "FastAPI", "React"],
      category: "AI",
      github: "https://github.com/NANDINI2713/Agentic-RAG-Chatbot-with-MCP-Integration",
      live: null,
      gradient: "from-indigo-500/20 to-blue-600/20",
    },
    {
      name: "Enterprise RAG Platform",
      description:
        "Multi-agent RAG system with 5 specialized LangGraph agents, Oracle/SQL Server integration, JWT row-level security, and compliance validation before every response.",
      tags: ["LangGraph", "Haystack", "Azure OpenAI", "FastAPI", "Docker"],
      category: "AI",
      github: "https://github.com/NANDINI2713/enterprise-rag-platform",
      live: null,
      gradient: "from-sky-500/20 to-cyan-600/20",
    },
    {
      name: "AI Workflow SaaS",
      description:
        "Drag-and-drop LLM workflow builder with React Flow nodes, multi-provider support (OpenAI + Anthropic), credit system, async job processing, and AWS EC2 deployment.",
      tags: ["Next.js", "React Flow", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
      category: "AI",
      github: "https://github.com/NANDINI2713/ai-workflow-saas",
      live: null,
      gradient: "from-amber-500/20 to-orange-600/20",
    },
    {
      name: "RAG Knowledge Assistant",
      description:
        "Production-ready question-answering API over custom document indexes using LangChain, Azure OpenAI GPT-4 embeddings, and pgvector for semantic retrieval.",
      tags: ["LangChain", "Azure OpenAI", "FastAPI", "pgvector", "Docker"],
      category: "AI",
      github: "https://github.com/NANDINI2713/rag-knowledge-assistant",
      live: null,
      gradient: "from-emerald-500/20 to-teal-600/20",
    },
    {
      name: "Full-Stack AI Tool Builder",
      description:
        "LangChain agentic platform with Azure OpenAI GPT-4, pgvector semantic search, SSE streaming, and a built-in eval harness for LLM regression detection.",
      tags: ["LangChain", "Azure OpenAI", "FastAPI", "React", "pgvector"],
      category: "AI",
      github: "https://github.com/NANDINI2713/Full-Stack-AI-Tool-builder",
      live: null,
      gradient: "from-violet-500/20 to-purple-600/20",
    },
    {
      name: "Identity Commerce Platform",
      description:
        "TypeScript e-commerce platform with identity management, CI/CD pipelines via GitHub Actions, and cloud infrastructure provisioned with Terraform.",
      tags: ["TypeScript", "Terraform", "GitHub Actions", "Node.js"],
      category: "Cloud",
      github: "https://github.com/NANDINI2713/identity-commerce-platform",
      live: null,
      gradient: "from-slate-500/20 to-gray-600/20",
    },
    {
      name: "Service Broker System",
      description:
        "Distributed microservices broker with React frontend, Node.js/Express backend, MySQL, OTP two-factor auth, and dynamic service registration and invocation.",
      tags: ["React", "Node.js", "Express", "MySQL", "Microservices"],
      category: "Web",
      github: "https://github.com/NANDINI2713/ServiceBrokerSystem",
      live: null,
      gradient: "from-rose-500/20 to-red-600/20",
    },
    {
      name: "MusicMingle",
      description:
        "Full-stack music discovery and social platform with React frontend, AOS scroll animations, and a dedicated backend for user authentication and music streaming.",
      tags: ["React", "JavaScript", "Node.js", "CSS"],
      category: "Web",
      github: "https://github.com/NANDINI2713/MusicMingle",
      live: "https://music-mingle-eta.vercel.app",
      gradient: "from-pink-500/20 to-rose-600/20",
    },
    {
      name: "NP Movies",
      description:
        "Movie browsing app powered by the OMDB API with a searchable grid, dynamic detail pages, client-side routing, and poster galleries.",
      tags: ["React", "JavaScript", "OMDB API", "React Router", "Axios"],
      category: "Web",
      github: "https://github.com/NANDINI2713/np-movies",
      live: "https://np-movies.vercel.app",
      gradient: "from-cyan-500/20 to-blue-600/20",
    },
    {
      name: "ClimateCompile",
      description:
        "React web application focused on climate and environmental data, built with Create React App and deployed on Vercel.",
      tags: ["React", "JavaScript", "CSS"],
      category: "Web",
      github: "https://github.com/NANDINI2713/ClimateCompile",
      live: "https://climate-compile.vercel.app",
      gradient: "from-green-500/20 to-emerald-600/20",
    },
    {
      name: "GymnasiumClub",
      description:
        "Gymnasium and fitness club web app built with React, featuring club information, schedules, and membership details.",
      tags: ["React", "JavaScript", "CSS", "HTML"],
      category: "Web",
      github: "https://github.com/NANDINI2713/GymnasiumClub",
      live: "https://gymnasium-club.vercel.app",
      gradient: "from-orange-500/20 to-amber-600/20",
    },
    {
      name: "To-Do App",
      description:
        "Clean task management web app built with React, featuring task creation, completion tracking, and a minimal responsive UI.",
      tags: ["React", "JavaScript", "CSS"],
      category: "Web",
      github: "https://github.com/NANDINI2713/To-do-webiste",
      live: null,
      gradient: "from-fuchsia-500/20 to-violet-600/20",
    },
  ],

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
