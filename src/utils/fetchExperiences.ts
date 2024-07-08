import { Experience } from "@/definitions/experience";
import { performRequest } from "@/lib/datocms";

type TechStack = {
  name: string;
};

type CompanyLogo = {
  url: string;
};

interface ExperienceData {
  title: string;
  company: string;
  companyShortName: string;
  description: string;
  startDate: string;
  endDate: string;
  companyWebsite?: string;
  companyLogo: CompanyLogo;
  techstack: TechStack[];
}

interface GetAllExperiencesResponse {
  allExperiences: ExperienceData[];
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export const fetchExperiences = async () => {
  const query = `
    query GetAllExperiences {
        allExperiences(orderBy: startDate_DESC) {
            title
            company
            companyShortName
            description
            startDate
            endDate
            companyWebsite
            companyLogo {
            url
            }
            techstack {
            name
            }
        }
    }
`;
  const data = await performRequest<GetAllExperiencesResponse>({ query });
  const experiences: Experience[] = data.allExperiences.map((item) => ({
    title: item.title,
    company: item.company,
    companyShortName: item.companyShortName,
    description: item.description,
    startDate: formatDate(item.startDate),
    endDate: formatDate(item.endDate),
    techStack: item.techstack.map((tech) => tech.name),
    companyWebsite: item.companyWebsite,
    companyLogo: item.companyLogo.url,
  }));
  return experiences;
};
