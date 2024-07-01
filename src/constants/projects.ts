import { Project } from "@/definitions/project";

const projects: Project[] = [
  {
    name: "Klass-Auth",
    company: "KLASS Engineering and Solutions Ptd",
    companyShortName: "KLASS",
    thumbnail: "/images/auth.png",
    images: ["/images/auth.png", "/images/robotics_ui.png"],
    description: "test",
    techStack: ["Go", "Gin", "Redis", "Valkey", "PostgresSQL"],
    companyWebsite: "https://klasses.com.sg/",
  },
  {
    name: "Robotics UI",
    company: "KLASS Engineering and Solutions Ptd",
    companyShortName: "KLASS",
    thumbnail: "/images/robotics_ui.png",
    images: ["/images/robotics_ui.png", "/images/auth.png"],
    description: "test",
    techStack: ["React", "Typescript", "Flask", "Docker"],
    companyWebsite: "https://klasses.com.sg/",
  },
];

export { projects };
