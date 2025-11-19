export interface Project {
  name: string;
  link: string;
  img: string;
  desc: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
}
