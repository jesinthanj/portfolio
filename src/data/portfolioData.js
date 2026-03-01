export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export const SKILLS = {
  "Languages & Frameworks": ["Python", "TypeScript", "JavaScript", "Node.js", "Express.js", "React.js", "Java", "HTML5", "CSS3"],
  "Backend & APIs": ["REST APIs", "Microservices", "ETL Pipelines", "AWS Lambda", "SPA Architectures", "Express+EJS"],
  "AI & ML": ["LLMs", "NLP", "Prompt Engineering", "Sentiment Analysis", "Computer Vision", "OpenAI API", "Agentic Workflows"],
  "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Sequelize ORM", "Relational Schema Design"],
  "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Docker", "Jenkins", "CI/CD", "Linux/Unix", "Azure"],
  "Testing & Automation": ["Selenium", "REST-assured", "Postman", "Automated Test Suites", "Regression Testing"],
  "Tools": ["Git", "Jira", "Agile/Scrum", "Code Reviews", "Stakeholder Communication"],
};

export const EXPERIENCE = [
  {
    role: "Software Development Engineer in Test (SDET)",
    company: "Tekion Corp",
    period: "Jul 2023 – Aug 2024",
    tech: ["Java", "Selenium", "TestNG", "REST-assured", "Jenkins", "Git", "MySQL", "PostgreSQL"],
    bullets: [
      "Led API and UI test automation for a module within a cloud-based SaaS microservices platform.",
      "Integrated automated test suites into CI/CD pipelines via Jenkins, enabling nightly runs and early defect detection.",
      "Designed and executed 200+ API test cases validating complex response chains across microservices.",
      "Improved cross-browser UI test reliability by 30% through dynamic XPath logic enhancements.",
      "Collaborated with development and product teams through Agile ceremonies and sprint planning.",
    ],
  },
  {
    role: "SDET Intern",
    company: "Tekion Corp",
    period: "Jan 2023 – Jul 2023",
    tech: ["Java", "Selenium", "SQL", "Postman"],
    bullets: [
      "Supported backend and functional testing across multiple microservices.",
      "Maintained integration test cases and collaborated on test data management.",
      "Validated service responses using SQL and API analysis, improving overall test coverage.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Blitzcraft",
    period: "Jan 2022 – Dec 2022",
    tech: ["Python", "Express", "TypeScript", "React", "MongoDB", "PostgreSQL", "Linux"],
    bullets: [
      "Developed Python-based data processing pipelines handling 2M+ records daily with 99.2% uptime.",
      "Engineered automated scraping pipelines for Twitter/X and Reddit feeding NLP/sentiment workflows.",
      "Built NLP text classification pipelines processing 500K+ daily unstructured data points.",
      "Designed RESTful APIs using Express.js and TypeScript across the full SDLC.",
      "Optimised MongoDB and PostgreSQL queries — 45% throughput gain, 35% batch performance improvement.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Inventory & Booking Management System",
    org: "FABLAB, Loyola College, Chennai",
    tech: ["Node.js", "TypeScript", "MySQL", "Sequelize ORM", "Docker", "Git"],
    bullets: [
      "Scalable REST APIs for CRUD, bookings, and availability with SQL-based overlap detection.",
      "Row-level locking (SELECT FOR UPDATE) to prevent booking conflicts and race conditions.",
      "JWT-based role access control and governance workflows for compliant operations.",
      "Postman automated test suites and Docker containerisation for quality assurance.",
    ],
    color: "#0ea5e9",
  },
  {
    title: "Analytics API for Club Usage",
    org: "West Wood Fitness Club Simulation, Dublin",
    tech: ["React", "Node.js", "Express.js", "Python", "Flask", "Firebase", "MySQL", "AWS"],
    bullets: [
      "Full-stack SPA with scalable REST APIs and responsive React frontend.",
      "Firebase for real-time database sync, auth, and cloud functions.",
      "Data pipeline with frontend visualisations for real-time KPIs and usage trends.",
      "Deployed on AWS (EC2, S3) with predictive models for usage forecasting.",
    ],
    color: "#10b981",
  },
  {
    title: "AI-Powered Bus Stop Infrastructure Analysis",
    org: "Research Project – UCD",
    tech: ["Python", "OpenAI Vision API", "Google Maps API", "Roboflow", "REST APIs"],
    bullets: [
      "LLM prompt engineering and agentic workflows to assess bus stop quality from visual data.",
      "Integrated Google Maps Street View API, OpenAI API, and Roboflow in a single pipeline.",
      "Computer vision model trained with ~95% accuracy to filter images before LLM analysis.",
      "Automated end-to-end data collection, image processing, and structured CSV report generation.",
    ],
    color: "#8b5cf6",
  },
];

export const EDUCATION = [
  {
    degree: "MSc in Data and Computational Science (2:1)",
    institution: "University College Dublin, Ireland",
    period: "Sep 2024 – Aug 2025",
    coursework: [
      "System Design & Distributed Architecture",
      "Cloud Infrastructure & Deployment (AWS)",
      "Streaming Data Analytics",
      "Predictive Modeling",
      "Machine Learning & AI Fundamentals",
    ],
  },
  {
    degree: "BE in Computer Science and Engineering",
    institution: "Anna University, India",
    period: "Jul 2019 – May 2023",
    coursework: [
      "Algorithm Design & Data Structures",
      "Network Fundamentals",
      "Web Middleware",
      "Software Engineering",
      "Infrastructure Principles",
    ],
  },
];
