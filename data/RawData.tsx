const skills = [
  {
    imageSrc: "/logos/Next-Logo.png",
    imageAlt: "Next.js",
    title: "Next.js",
    description:
      "Used Next.js to develop Full Stack Applications and create SSR pages",
    rating: 4,
  },
  {
    imageSrc: "/logos/React-Logo.png",
    imageAlt: "React.js",
    title: "React.js",
    description: "Used React.js to develop Frontend Applications",
    rating: 4,
  },
  {
    imageSrc: "/logos/Tailwind-Logo.png",
    imageAlt: "Tailwind CSS",
    title: "Tailwind CSS",
    description:
      "Used Tailwind CSS to develop responsive frontend applications",
    rating: 4,
  },
  {
    imageSrc: "/logos/NodeJS-Logo.png",
    imageAlt: "Node.js",
    title: "Node.js",
    description:
      "Used Node.js to develop Backend Applications and RESTful APIs",
    rating: 4,
  },
  {
    imageSrc: "/logos/Express-Logo.png",
    imageAlt: "Express.js",
    title: "Express.js",
    description:
      "Used Express.js to develop Backend Applications to support MERN stack applications",
    rating: 3,
  },
  {
    imageSrc: "/logos/PLSQL-Logo.png",
    imageAlt: "PL/SQL",
    title: "PL/SQL",
    description:
      "Used PL/SQL to develop stored procedures and functions for database management systems during my work at Oracle",
    rating: 4,
  },
  {
    imageSrc: "/logos/MongoDB-Logo.png",
    imageAlt: "MongoDB",
    title: "MongoDB",
    description:
      "Used MongoDB to store and manage data for Full Stack Web Applications",
    rating: 3,
  },
  {
    imageSrc: "/logos/Java-Logo.png",
    imageAlt: "Java",
    title: "Java",
    description:
      "Used Java for my DSA practice and to develop backend applications and RESTful APIs during my work at Oracle",
    rating: 4,
  },
  {
    imageSrc: "/logos/JS-Logo.png",
    imageAlt: "JavaScript",
    title: "JavaScript",
    description:
      "Used JavaScript to develop frontend applications and backend applications",
    rating: 4,
  },
  {
    imageSrc: "/logos/Jenkins-Logo.png",
    imageAlt: "Jenkins",
    title: "Jenkins",
    description:
      "Used Jenkins for CI/CD pipelines for automated testing and deployment during my work at Oracle",
    rating: 3,
  },
  {
    imageSrc: "/logos/Huggingface-Logo.png",
    imageAlt: "Hugging Face",
    title: "Hugging Face",
    description:
      "Used Hugging Face to use pre-trained machine learning models for NLP tasks",
    rating: 2,
  },
  {
    imageSrc: "/logos/Langchain-Logo.png",
    imageAlt: "Langchain",
    title: "Langchain",
    description:
      "Used Langchain to develop RAG applications integrating LLMs with external data sources",
    rating: 2,
  },
];

const projects = [
  {
    imageSrc: "/logos/After_Hours-Logo.png",
    imageAlt: "After Hours",
    title: "After Hours",
    description:
      "Web & Mobile application connecting hotels with NGOs for food redistribution",
    gitlink: "https://github.com/kasish-sv/after-hours",
    demolink: null,
  },
  {
    imageSrc: "/logos/React-Logo.png",
    imageAlt: "React Play Projects",
    title: "React Play Projects",
    description:
      "Played around with React.js to create small projects, there is nothing much but this really helped me learn React",
    gitlink: "https://github.com/kasish-sv/react-play",
    demolink: null,
  },
];

// Example data array
const experiences = [
  {
    imageSrc: "/logos/PLSQL-Logo.png",
    imageAlt: "Oracle",
    title: "Associate Software Development Consultant",
    description: "Oracle Cerner - Bangalore, India",
    content: "2023 - Present",
    footer: ["Java", "Spring Boot", "PL/SQL", "Oracle APEX", "CCL"],
    detail: [
      "Developed and maintained healthcare applications using Java, Spring Boot, and PL/SQL in a fast-paced lean agile environment.",
      "Integrated Athena Health archives via OAuth 2.0 SSO with Cerner Millennium, streamlining access for Capital Health.",
      "Built an internal QA tool using Oracle APEX and Node.js, reducing Jira audit time by 30%.",
      "Working on an in-house code generation tool for Cerner Command Language (CCL) to automate routine coding tasks, improving developer productivity.",
      "Awarded Customer Excellence Award and Customer Hero Award for consistent delivery and impact (FY24 Q2, Q3).",
    ],
  },
];

export { skills, projects, experiences };
