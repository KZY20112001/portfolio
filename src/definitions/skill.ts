type Skill = {
  name: string;
  logo: string;
};

type TechnicalSkills = {
  programmingLanguages: Skill[];
  frameworks: Skill[];
  otherSkills: Skill[];
};
export type { Skill, TechnicalSkills };
