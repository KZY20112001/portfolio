import { performRequest } from "@/lib/datocms";
import { Project } from "@/definitions";

type TechStack = {
  name: string;
};

type Video = { url: string };

type Image = { url: string };

type Thumbnail = { url: string };

type ProjectData = {
  name: string;
  organization: string;
  organizationShortName: string;
  description: string;
  thumbnail: Thumbnail;
  mediaType: "images" | "video";
  video: Video | null;
  images: Image[] | null;
  techstack: TechStack[];
};

interface GetAllProjectsResponse {
  allProjects: ProjectData[];
}
const mapProjectDataToProject = (projectData: ProjectData): Project => {
  const baseProject = {
    name: projectData.name,
    organization: projectData.organization,
    organizationShortName: projectData.organizationShortName,
    description: projectData.description,
    thumbnail: projectData.thumbnail.url,
    techStack: projectData.techstack.map((tech) => tech.name),
  };

  if (projectData.mediaType === "video") {
    return {
      ...baseProject,
      mediaType: "video",
      video: projectData.video!.url,
    };
  } else {
    return {
      ...baseProject,
      mediaType: "images",
      images: projectData.images!.map((image) => image.url),
    };
  }
};

export const fetchProjects = async () => {
  const query = `
    query GetAllProjects {
        allProjects(orderBy: priority_ASC){
            name
            organization
            organizationShortName
            description
            mediaType
            video {
                url
            }
            images {
                url
            }
            thumbnail {
                url
            }
            techstack {
                name
            }
        }
    }
  `;
  const data = await performRequest<GetAllProjectsResponse>({ query });
  const projects: Project[] = data.allProjects.map((projectData) =>
    mapProjectDataToProject(projectData)
  );

  return projects;
};
