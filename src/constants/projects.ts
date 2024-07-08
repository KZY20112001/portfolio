import { Project } from "@/definitions/project";

const projects: Project[] = [
  {
    name: "Portfolio Website",
    description: "",
    mediaType: "images",
    images: ["/images/portfolio-thumbnail.png"],
    thumbnail: "/images/portfolio-thumbnail.png",
    techStack: ["Next (Framework)", "Chakra UI", "DatoCMS", "GraphQL"],
    website: "localhost:3000",
  },

  {
    name: "Teamder",
    description: "",
    mediaType: "video",
    video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnail: "",
    techStack: [
      "React",
      "Nest (Framework)",
      "Typescript",
      "Chakra UI",
      "Prisma DB",
      "AWS S3",
    ],
  },

  {
    name: "Fullhouse",
    description: "",
    mediaType: "video",
    video: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
    thumbnail: "",
    techStack: ["React", "Express", "Javascript", "Tailwind", "MongoDB"],
  },
  {
    name: "Jammin",
    organization: "NTU Open Source Society",
    organizationShortName: "NTUOSS",
    description:
      "Developed as a member of NTU Open Source Society, Jammin is a team project which provides a mobile platform for designed for music enthusiasts to connect with like-minded individuals and play music together.",
    mediaType: "images",
    images: [
      "/images/jammin-1.png",
      "/images/jammin-2.png",
      "/images/jammin-3.png",
      "/images/jammin-4.png",
    ],
    thumbnail: "/images/jammin.png",
    techStack: ["Flutter", "Supabase"],
  },
  {
    name: "Orientation Virtual Game",
    organization: "SCSE Transition & Orientation Programme",
    organizationShortName: "SCSE TOP 2023",
    description: "",
    mediaType: "images",
    images: [""],
    thumbnail: "",
    techStack: ["Next (Framework)", "Chakra UI", "Prisma DB"],
  },
  {
    name: "MOBLIMA",
    description: "",
    mediaType: "images",
    images: [""],
    thumbnail: "",
    techStack: ["Java"],
  },
];

export { projects };
