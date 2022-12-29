export interface Project {
  id: number;
  title: string;
  folder: string;
  img: string;
  description: string;
  caller: string;
  category: string;
  tags: string[];
  hrefs: {
    github: string;
    project: string;
  };
}
