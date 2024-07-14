import { Skill } from "@/definitions";
import { performRequest } from "@/lib/datocms";

type Logo = { url: string };

type TechnicalSkillData = {
  name: string;
  logo: Logo;
};

interface GetAllTechnicalSkillsResponse {
  allProgrammingLanguages: TechnicalSkillData[];
  allFrameworks: TechnicalSkillData[];
  allOtherSkills: TechnicalSkillData[];
}

export const fetchTechnicalSkills = async () => {
  const query = `
    query GetAllTechnicalSkills {
        allProgrammingLanguages(orderBy: name_ASC) {
            name
            logo {
            url
            }
        }
        allFrameworks(orderBy: name_DESC) {
            name
            logo {
            url
            }
        }
        allOtherSkills(orderBy: name_DESC) {
            name
            logo {
            url
            }
        }
    }
    `;

  const data = await performRequest<GetAllTechnicalSkillsResponse>({
    query,
  });

  const programmingLanguages: Skill[] = data.allProgrammingLanguages.map(
    (language) => ({ ...language, logo: language.logo.url })
  );

  const frameworks: Skill[] = data.allFrameworks.map((framework) => ({
    ...framework,
    logo: framework.logo.url,
  }));

  const otherSkills: Skill[] = data.allOtherSkills.map((skill) => ({
    ...skill,
    logo: skill.logo.url,
  }));
  return { programmingLanguages, frameworks, otherSkills };
};
