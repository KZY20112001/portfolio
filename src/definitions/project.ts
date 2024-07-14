type Project = {
  name: string;
  organization?: string;
  organizationShortName?: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  website?: string;
} & (ImagesProps | VideoProps);

type ImagesProps = { mediaType: "images"; images: string[] };
type VideoProps = { mediaType: "video"; video: string };

export default Project;
