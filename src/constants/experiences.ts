import { Experience } from "@/definitions/experience";

const experiences: Experience[] = [
  {
    position: "Backend Engineer Intern",
    company: "KLASS Engineering and Solutions Ptd",
    companyShortName: "KLASS",
    description:
      "My responsibilities focused on the backend development, where I designed and implemented an in-house module that enables users to authenticate through various methods of their choice (JWTs, Session Cookies etc). Additionally, I played a pivotal role in implementing an API Gateway and other microservices using Tyk, enhancing system scalability and efficiency.",
    startDate: "May 2024",
    endDate: "Aug 2024",
    techStack: [
      "Go (Programming Language)",
      "Gin (Framework)",
      "PostgreSQL",
      "Redis",
      "Valkey",
      "Tyk",
      "Docker",
    ],
    companyWebsite: "https://klasses.com.sg/",
  },
  {
    position: "Software Engineer Intern",
    company: "KLASS Engineering and Solutions Ptd",
    companyShortName: "KLASS",
    description:
      "While working on the frontend, I transformed a legacy codebase into a modern, responsive design using the layered architecture. I also revamped the frontend authentication mechanism, ensuring robust end-to-end testing. On the backend, I developed middlewares to standardize data formats according to REST API standards. Moreover, I restructured multiple backend endpoints and optimized SQL queries, resulting in significant performance improvements.",
    startDate: "Dec 2023",
    endDate: "May 2024",
    techStack: [
      "React",
      "Typescript",
      "Material UI",
      "Ant Design",
      "Flask",
      "Python",
      "Docker",
    ],
    companyWebsite: "https://klasses.com.sg/",
  },

  {
    position: "Fullstack Developer Intern",
    company: "SERIAL CO_ Creative Tech Studio",
    companyShortName: "SERIAL CO_",
    description:
      "During my internship, I collaborated with my team to model and enhance the company website which consisted of multiple dynamic pages, using Next 12 and TypeScript. I incorporated multiple responsive microsites into the website by leveraging external APIs, and also established a fully responsive mobile version of the website, ensuring a seamless user experience across various devices.",
    startDate: "May 2023",
    endDate: "Nov 2023",
    techStack: [
      "Next (Framework)",
      "Typescript",
      "Tailwind CSS",
      "DatoCMS",
      "GraphQL",
    ],
    companyWebsite: "https://serial.sg/",
  },
  {
    position: "Data Analyst Intern",
    company: "Nanyang Business School, NTU",
    companyShortName: "NBS",
    description:
      "I built web scrapers using Selenium to extract relevant job details from job sites like Green Collar Careers and Monster. I utilized the collected data to generate databases and communicated with the team to analyse impactful trends for sustainability jobs across ASEAN and Asia.",
    startDate: "May 2022",
    endDate: "July 2022",
    techStack: ["Python", "Pandas", "Selenium", "Jupyter"],
  },
];

export { experiences };
