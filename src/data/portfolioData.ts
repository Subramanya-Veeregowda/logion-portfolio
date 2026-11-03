export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'notion' | 'fullstack' | 'data';
  categoryLabel: string;
  isClientProject: boolean;
  projectType: 'Portfolio Demonstration' | 'Full-Stack Software Product' | 'Distributed Data Engineering';
  tagline: string;
  overview: string;
  keyFeatures: string[];
  techStack: string[];
  metricsOrOutcomes?: string;
  demoNote?: string;
  mockupType: 'notion-dashboard' | 'notion-crm' | 'notion-kanban' | 'notion-studio' | 'linkforge-app' | 'spark-pipeline';
}

export interface Service {
  number: string;
  title: string;
  shortDescription: string;
  detailedScope: string[];
  idealFor: string;
  deliverables: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  department: string;
  responsibilities: string[];
  technicalEnvironment: string[];
}

export interface OpenSourceContribution {
  program: string;
  organization: string;
  project: string;
  period: string;
  prsMerged: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details?: string;
}

export const BRAND = {
  name: 'LOGION',
  founder: 'Subramanya V',
  tagline: 'THINK BEYOND SANITY.',
  headline: 'Think Beyond Sanity.',
  subheadline: 'Building digital systems, intelligent workflows and practical technology solutions.',
  logoSrc: '/assets/aistudio/WhatsApp_Image_2026-11-03_at_6.03.04_AM_449ed3a7.jpeg',
  resumeSrc: '/assets/aistudio/SubramanyaV_Resume_d8c18928.pdf',
  email: 'subramanyav2002@gmail.com',
  altEmail: 'subramanyav3012@gmail.com',
  phone: '+91 70196 08472',
  location: 'Bengaluru, Karnataka, India',
  socials: {
    linkedin: 'https://linkedin.com/in/subramanya-v',
    github: 'https://github.com/subramanya-v',
    upwork: 'https://upwork.com/freelancers/~subramanyav',
    leetcode: 'https://leetcode.com',
    hackerrank: 'https://hackerrank.com',
  },
};

export const ABOUT_FOUNDER = {
  name: 'Subramanya V',
  title: 'Founder & Principal Engineer at LOGION',
  positioning: [
    'Engineer',
    'Digital Solutions Enthusiast',
    'Notion Workspace Designer',
    'Full-Stack Developer',
    'Open-Source Contributor',
  ],
  bio: 'Subramanya V is an engineer and digital systems architect focused on converting organizational chaos into frictionless operational clarity. Operating as LOGION, he designs bespoke Notion enterprise workspaces, builds full-stack applications, and constructs resilient data pipelines. Currently working as an Apprentice Application Support Engineer at CGI and actively contributing to Apache Beam via Google Summer of Code 2026, he bridges low-level system reliability with human-centric productivity tools.',
  education: [
    {
      degree: 'Bachelor of Engineering (BE) — Electrical & Electronics Engineering',
      institution: 'Dr. Ambedkar Institute of Technology (Autonomous Institute), Bengaluru',
      period: '2020 – 2025',
      score: '7.0 CGPA',
      details: 'Focus on electrical systems, computational modeling, and software engineering.',
    },
    {
      degree: 'Class XII (Pre-University College, PCMB)',
      institution: 'R K Vision PU College, Chintamani, Karnataka',
      period: '2019 – 2020',
      score: '87%',
      details: 'Physics, Chemistry, Mathematics, Biology.',
    },
    {
      degree: 'Class X (ICSE)',
      institution: 'Nandini Vidyanikethana, Vijayapura, Karnataka',
      period: '2017 – 2018',
      score: '80%',
      details: 'Foundational secondary school education.',
    },
  ] as EducationItem[],
  certifications: [
    {
      title: 'Full Stack Web Development',
      provider: 'Coding Ninjas',
      status: 'Ongoing',
      skills: ['React.js', 'Java', 'Spring Boot', 'DSA', 'SQL', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      title: 'Data Engineering Master Program',
      provider: 'Data Vidya',
      status: 'Ongoing',
      skills: ['Python', 'SQL', 'Data Modeling', 'Snowflake', 'dbt', 'PySpark', 'Databricks', 'Airflow', 'Kafka'],
    },
    {
      title: 'Python Essentials 1 & 2',
      provider: 'Cisco Networking Academy',
      status: 'Completed',
      skills: ['Python', 'Object-Oriented Programming', 'Data Structures', 'Algorithmic Problem Solving'],
    },
    {
      title: 'AI Tools Workshop',
      provider: 'BE10X',
      status: 'Completed',
      skills: ['ChatGPT', 'Notion AI', 'Microsoft Copilot', 'Gemini', 'Cursor AI', 'Antigravity'],
    },
  ],
  languages: [
    { language: 'English', proficiency: 'Professional Working (Read, Write & Speak)' },
    { language: 'Kannada', proficiency: 'Native / Bilingual (Read, Write & Speak)' },
    { language: 'Telugu', proficiency: 'Spoken Proficiency' },
  ],
  softSkills: [
    'Quick Learner',
    'Clear Communicator',
    'Cross-functional Team Player',
    'Adaptable Problem Solver',
    'Versatile & Efficient Time Management',
  ],
};

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'Notion Workspace Development',
    shortDescription: 'Custom, scalable operational operating systems architected with relational databases, intuitive dashboards, and automated views.',
    detailedScope: [
      'Centralized executive dashboards with live rollup calculations',
      'Relational databases connecting clients, tasks, assets, and invoices',
      'Granular team permission models and role-based views',
      'Standardized SOP documentation hubs and resource libraries',
    ],
    idealFor: 'Founders, agencies, solopreneurs, and growing teams seeking an all-in-one company brain.',
    deliverables: 'Fully configured Notion template, video walk-through, database schema doc, and 30-day onboarding support.',
  },
  {
    number: '02',
    title: 'CRM & Client Management Systems',
    shortDescription: 'Structured pipelines to track prospective leads, customer interactions, revenue opportunities, and automated follow-ups.',
    detailedScope: [
      'Multi-stage visual sales pipeline with stage conversion metrics',
      'Client communication logging with historical interaction timelines',
      'Lead scoring, deal values, and forecasted revenue tracking',
      'Contract status, deliverable sign-offs, and onboarding checklists',
    ],
    idealFor: 'Consultants, freelancers, service firms, and sales reps losing deals to messy inboxes.',
    deliverables: 'Tailored CRM system, automated intake forms, pipeline runbooks, and email templates.',
  },
  {
    number: '03',
    title: 'Project Management Systems',
    shortDescription: 'Agile delivery frameworks that eliminate missed deadlines with milestone roadmaps, task assignments, and budget monitors.',
    detailedScope: [
      'Sprint planning boards, Kanban workflows, and Gantt roadmaps',
      'Task dependency chains and automated blocker alerts',
      'Project budget pacing, hour tracking, and margin analysis',
      'Client-facing progress portals with restricted read-only permissions',
    ],
    idealFor: 'Creative agencies, engineering squads, and freelance product designers.',
    deliverables: 'End-to-end PM framework, Sprint ceremonies template, and resource utilization tracker.',
  },
  {
    number: '04',
    title: 'Workflow Design & Automation',
    shortDescription: 'Intelligent connection between tools that eliminates manual repetitive tasks, data sync friction, and notification lag.',
    detailedScope: [
      'Webhook & API integrations connecting forms, Notion, Slack, and email',
      'Automated status transitions and triggered client notifications',
      'Data normalization workflows that clean and format incoming leads',
      'Error-resilient fallbacks and alert notifications for edge cases',
    ],
    idealFor: 'Businesses spending 10+ hours a week on manual copy-pasting and status check-ins.',
    deliverables: 'Automation scripts, webhook configurations, failover monitors, and flowcharts.',
  },
  {
    number: '05',
    title: 'Full-Stack Web Development',
    shortDescription: 'High-performance, modern web applications built with clean React interfaces, Spring Boot or Node backends, and robust security.',
    detailedScope: [
      'Responsive, accessible frontends using React and modern CSS architectures',
      'Enterprise RESTful APIs engineered with Spring Boot, Java, and Express',
      'JWT role-based authentication, HTTP-only cookies, and session handling',
      'Relational database design in PostgreSQL/MySQL with connection pooling',
    ],
    idealFor: 'Startups and businesses requiring custom customer portals, SaaS MVPs, or internal web tools.',
    deliverables: 'Clean production codebase, Dockerized setup, API documentation, and Vercel/Cloud deployment.',
  },
  {
    number: '06',
    title: 'Data Engineering Solutions',
    shortDescription: 'Scalable batch and real-time streaming architectures using Apache Kafka, Apache Spark, Airflow, and modern data warehouses.',
    detailedScope: [
      'Real-time streaming ingestion pipelines using Apache Kafka topics',
      'Distributed micro-batch processing with Apache Spark Structured Streaming',
      'ETL / ELT pipeline orchestration using Apache Airflow and dbt',
      'Checkpointing, fault tolerance, and cluster monitoring setups',
    ],
    idealFor: 'Data-driven products handling high-velocity transactions, telemetry, or complex analytics.',
    deliverables: 'Containerized data pipelines, cluster Dockerfiles, consumer/producer source code, and health telemetry.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'logion-hq',
    title: 'LOGION HQ',
    subtitle: 'Freelance Business Command Center',
    category: 'notion',
    categoryLabel: 'Notion System',
    isClientProject: false,
    projectType: 'Portfolio Demonstration',
    tagline: 'The complete digital operating system for modern solopreneurs and agency operators.',
    overview: 'LOGION HQ is a unified operational environment built in Notion that consolidates company strategy, active client deliveries, financial ledgers, and day-to-day agendas into a single high-clarity dashboard. It removes context-switching and enforces operational discipline.',
    keyFeatures: [
      'Unified Business Management: Centralized views of active contracts, billable hours, and milestone progress.',
      'Daily Operations Engine: Focus queues, prioritised agenda blocks, and quick-capture notes.',
      'Content Operations: Integrated pipeline for multi-channel content creation and scheduled publishing.',
      'Financial & Business Analytics: Automatic margin tracking, invoice status rollups, and MRR projections.',
    ],
    techStack: ['Notion DBs', 'Relational Rollups', 'Formula 2.0', 'Notion Automations', 'Custom SOPs'],
    metricsOrOutcomes: 'Estimated 65% reduction in administrative overhead for solo operators.',
    demoNote: 'Interactive portfolio demonstration designed by LOGION as a production-grade template.',
    mockupType: 'notion-dashboard',
  },
  {
    id: 'logion-crm',
    title: 'LOGION Client CRM',
    subtitle: 'High-Conversion Sales & Relationship Engine',
    category: 'notion',
    categoryLabel: 'Notion System',
    isClientProject: false,
    projectType: 'Portfolio Demonstration',
    tagline: 'End-to-end sales pipeline, client interaction history, and automated deal monitoring.',
    overview: 'A purpose-built client relationship manager engineered to turn cold inquiries into recurring accounts. LOGION Client CRM provides visual stage tracking, full historical communication logs, contract status, and automated follow-up cadences.',
    keyFeatures: [
      'Dynamic Deal Pipeline: Multi-stage Kanban board tracking deal velocity and forecasted revenue.',
      'Comprehensive Client Profiles: Historical meeting logs, contract attachments, billing rates, and key contacts.',
      'Automated Follow-Up Matrix: Time-since-last-touch indicators to prevent warm leads from decaying.',
      'Onboarding Runbooks: Pre-built checklists triggered automatically when a deal transitions to Won.',
    ],
    techStack: ['Notion Database Matrix', 'Advanced Formulas', 'Dynamic Views', 'Sales Workflows'],
    metricsOrOutcomes: 'Zero dropped leads and complete timeline visibility across all prospect interactions.',
    demoNote: 'Portfolio demonstration built to showcase custom client pipeline architecture.',
    mockupType: 'notion-crm',
  },
  {
    id: 'project-dashboard',
    title: 'Project Management Dashboard',
    subtitle: 'Operational Delivery & Milestone Control',
    category: 'notion',
    categoryLabel: 'Notion System',
    isClientProject: false,
    projectType: 'Portfolio Demonstration',
    tagline: 'Milestone tracking, task dependencies, delivery deadlines, and budget burn-down monitoring.',
    overview: 'Engineered for high-output engineering teams and agencies managing multiple simultaneous projects. This dashboard provides granular visibility over project health, blocking issues, sprint backlogs, and real-time budget utilization.',
    keyFeatures: [
      'Milestone & Gantt Timelines: Visual dependency tracking and critical path identification.',
      'Sprint & Task Management: Agile sprint planning with automated task rollups and effort estimation.',
      'Budget & Margin Tracker: Real-time expenditure calculations against committed client budgets.',
      'Client Portal View: Curated read-only sharing view for frictionless stakeholder updates.',
    ],
    techStack: ['Notion Systems', 'Gantt Views', 'Budget Rollups', 'Sprint Ceremonies'],
    metricsOrOutcomes: '100% on-time milestone delivery governance with early blocker detection.',
    demoNote: 'Portfolio demonstration built for agency and software development operations.',
    mockupType: 'notion-kanban',
  },
  {
    id: 'content-studio',
    title: 'Content Studio',
    subtitle: 'Omnichannel Publishing & Editorial Engine',
    category: 'notion',
    categoryLabel: 'Notion System',
    isClientProject: false,
    projectType: 'Portfolio Demonstration',
    tagline: 'Asset repository, cross-platform publication calendar, and engagement analytics hub.',
    overview: 'A comprehensive editorial control room for modern creators, technical writers, and brands. Streamlines the lifecycle from raw spark of an idea to drafted copy, visual asset packaging, scheduled publishing, and post-launch engagement tracking.',
    keyFeatures: [
      'Central Idea Repository: Tagged by theme, audience persona, and expected channel.',
      'Unified Publishing Calendar: Month and week views with drag-and-drop scheduling across platforms.',
      'Content Production Stages: Clear swimlanes for Ideation, Draft, Review, Graphic Asset, and Published.',
      'Performance Analytics Logging: Post-launch metrics tracking impressions, clicks, and conversions.',
    ],
    techStack: ['Notion Editorial Matrix', 'Calendar Engine', 'Asset Library', 'Content Sprints'],
    metricsOrOutcomes: 'Enables consistent 4x weekly content output without publishing bottlenecks.',
    demoNote: 'Portfolio demonstration showing modern technical content planning workflows.',
    mockupType: 'notion-studio',
  },
  {
    id: 'linkforge',
    title: 'LinkForge',
    subtitle: 'Full-Stack URL Management Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack Software',
    isClientProject: false,
    projectType: 'Full-Stack Software Product',
    tagline: 'Enterprise-grade URL shortening, dynamic QR code generation, and analytics platform.',
    overview: 'LinkForge is a full-stack web application designed for high-concurrency link redirection and management. Engineered with Java, Spring Boot, React, and MySQL, it incorporates Kafka for event streaming and Redis caching for sub-millisecond redirection latency.',
    keyFeatures: [
      'Advanced Link Customization: Custom vanity aliases, password protection, and self-destructing links.',
      'Dynamic QR Code Engine: Instant downloadable QR codes with customized error correction.',
      'Security Architecture: JWT authentication with HTTP-only cookies and role-based access control.',
      'High-Throughput Analytics: REST APIs tracking referrer headers, geographic location, and timestamps.',
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'React.js', 'MySQL', 'Tailwind CSS', 'Kafka', 'Redis'],
    metricsOrOutcomes: 'Engineered for sub-10ms cache redirection using Redis and asynchronous Kafka analytics event logging.',
    demoNote: 'Full-stack software product highlighted in Subramanya V resume.',
    mockupType: 'linkforge-app',
  },
  {
    id: 'fraud-detection-pipeline',
    title: 'Fraud Detection Pipeline',
    subtitle: 'Real-Time Streaming & Stream Processing',
    category: 'data',
    categoryLabel: 'Data Engineering',
    isClientProject: false,
    projectType: 'Distributed Data Engineering',
    tagline: 'Fault-tolerant distributed transaction streaming and anomaly detection pipeline.',
    overview: 'A robust real-time distributed data pipeline engineered to ingest high-velocity simulated financial transactions via Apache Kafka, processing micro-batches with Apache Spark Structured Streaming on a Dockerized multi-node cluster.',
    keyFeatures: [
      'Continuous Python Kafka Producer: Generates and streams realistic financial transaction data payloads.',
      'Dockerized Multi-Node Cluster: Spark Master and distributed Worker nodes managed via Docker Compose.',
      'Spark Structured Streaming: Consumes Kafka topics, parses schemas, and flags abnormal transactions in micro-batches.',
      'Fault Tolerance & Checkpointing: Resilient stateful recovery and cluster monitoring through Spark Web UIs.',
    ],
    techStack: ['Apache Kafka', 'Apache Spark', 'Python', 'Docker', 'Zookeeper', 'Docker Compose', 'Git'],
    metricsOrOutcomes: 'Continuous streaming throughput with zero data loss under simulated node failure testing.',
    demoNote: 'Personal data engineering project highlighted in Subramanya V resume.',
    mockupType: 'spark-pipeline',
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: 'CGI',
    role: 'Apprentice, Application Support Engineer',
    period: 'July 2026 – Present',
    location: 'Bengaluru, Karnataka, India',
    department: 'Enterprise Application Operations & Level 2 Production Support',
    responsibilities: [
      'Provided Level 2 production support for multiple enterprise applications across mission-critical Linux-based environments, troubleshooting application, server, filesystem, and database-related incidents.',
      'Supported enterprise applications backed by Oracle Database, conducting deep SQL-based investigations, database connectivity checks, query execution plans, and error analysis.',
      'Performed core Linux system operations and troubleshooting, including service/process monitoring, filesystem utilization checks, log correlation, system permissions, and application service lifecycle management.',
      'Tested and validated application releases/packages received from Level 3 development teams, performing strict functional checks and pre-deployment validation before production deployment.',
      'Investigated and resolved production incidents without direct source-code access by correlating application logs, Linux system behavior, database connectivity, configuration parameters, and user-reported symptoms to isolate probable root causes.',
      'Supported filesystem operations, monitoring disk space growth, investigating storage-related bottlenecks, and guaranteeing high application filesystem availability.',
      'Assisted with vertical scaling and capacity management by safely increasing server resources during high-load conditions and validating application performance, throughput, and availability after scaling.',
      'Standardized and documented recurring incidents, root causes, technical resolutions, and operational runbooks to improve incident turnaround time and facilitate team knowledge reuse.',
    ],
    technicalEnvironment: [
      'Linux (RHEL / CentOS)',
      'Oracle Database & SQL',
      'Systemd & Process Management',
      'Log Forensics & Tracing',
      'Application Server Runtimes',
      'Capacity & Resource Scaling',
    ],
  },
];

export const OPEN_SOURCE_DATA: OpenSourceContribution[] = [
  {
    program: 'Google Summer of Code (GSoC) 2026',
    organization: 'Apache Software Foundation',
    project: 'Apache Beam',
    period: '2026 – Present',
    prsMerged: '6+ Merged Pull Requests',
    summary: 'Selected as a GSoC contributor to Apache Beam, the unified open-source programming model for defining and executing batch and streaming data processing pipelines.',
    contributions: [
      'Delivered 6+ merged pull requests across both Java and Python SDK modules.',
      'Improved comprehensive developer documentation, SDK architecture guides, and onboarding examples.',
      'Enhanced codebase readability, typing inference, and developer ergonomics across core transforms.',
      'Participated in community code reviews and automated CI/CD pipeline validations.',
    ],
    technologies: ['Apache Beam', 'Java SDK', 'Python SDK', 'Distributed Pipelines', 'Open Source', 'GitHub Actions'],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: 'Frontend Development',
    skills: ['ReactJS', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaScript (ES6+)', 'TypeScript', 'Responsive UI'],
  },
  {
    name: 'Backend Engineering',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs', 'Postman', 'JWT Authentication'],
  },
  {
    name: 'Databases & Storage',
    skills: ['MySQL', 'PostgreSQL', 'Oracle SQL', 'MongoDB', 'Cassandra', 'Redis Caching'],
  },
  {
    name: 'Data Engineering & Streaming',
    skills: ['Apache Kafka', 'Apache Spark', 'Apache Airflow', 'DBT', 'Databricks', 'Delta Lake', 'ETL / ELT Workflows'],
  },
  {
    name: 'Cloud, DevOps & Tools',
    skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Kubernetes', 'AWS', 'Vercel', 'CI/CD Pipelines'],
  },
  {
    name: 'Systems & Methodologies',
    skills: ['Linux OS & Bash', 'Data Structures & Algorithms', 'Agile / Scrum', 'Object-Oriented Programming (OOP)'],
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    phase: 'Discover',
    tagline: 'Audit & Requirements Framing',
    description: 'We unpack your operational friction, existing tools, and desired outcomes. We analyze current bottlenecks, database relationships, and key metrics.',
    deliverable: 'Requirements Brief & Scope Blueprint',
  },
  {
    step: '02',
    phase: 'Plan',
    tagline: 'Architecture & System Blueprints',
    description: 'We construct database schema diagrams, relational mappings in Notion or SQL, API interfaces, and milestone timelines with clear validation checkpoints.',
    deliverable: 'System Architecture & Schema Specifications',
  },
  {
    step: '03',
    phase: 'Design',
    tagline: 'Minimalist Interface & Ergonomics',
    description: 'We wireframe clean, high-density dashboard layouts, intuitive navigation hierarchies, and distraction-free operating surfaces prioritizing usability.',
    deliverable: 'Interactive Mockups & UI Layout Proofs',
  },
  {
    step: '04',
    phase: 'Build',
    tagline: 'Clean Code & Resilient Engineering',
    description: 'We build the databases, automations, full-stack components, and data streaming consumers with clean typing, error handlers, and edge-case resilience.',
    deliverable: 'Production System & Automated Workflows',
  },
  {
    step: '05',
    phase: 'Deliver',
    tagline: 'Verification, Runbooks & Handoff',
    description: 'We perform end-to-end testing, record comprehensive video walkthroughs, provide written SOPs, and provide 30-day post-launch support.',
    deliverable: 'Video Walkthroughs, SOP Runbooks & Live Launch',
  },
];
